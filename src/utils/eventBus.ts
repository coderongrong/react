// TX 
type Listener = {
  (data: unknown): unknown;
};

type CallBack = {
  (data: unknown): unknown;
};

interface EventSupport {
  // 订阅事件
  on(event: string, callBack: CallBack): Listener;

  //取消
  off(event: string, callBack: CallBack): void;

  //触发事件
  emit(event: string, data: unknown): void;
}

class MyEvent implements EventSupport {
  obj: any;
  // code here
  on(event: string, callBack: any): any {
    this[event] = callBack;

    //增加remove方法
    const that: any = this
    return {
      remove: function () {
        that[event] = null
      }
    }
  }

  emit(event: string, data: any) {
    this[event] && this[event](data);
  }
  off(event: string, callBack: any) {
    this[event] = null
    callBack = null
  }
}

const myEvent = new MyEvent();

const listener1 = myEvent.on("event1", (param: any) => {
  console.log("event1 emitted with", param);
});

const callBack2 = (param: any) => {
  console.log("event2 emitted with", param);
};

myEvent.on("event2", callBack2);

myEvent.emit("event1", "1.1"); //  1.1
myEvent.emit("event1", "1.2"); //  1.2
// listener1.remove && listener1.remove();
listener1.remove();
myEvent.emit("event1", "1.3"); // no 1.3

myEvent.emit("event2", "2.1"); //  2.1
myEvent.off("event2", callBack2);
myEvent.emit("event2", "2.2"); // no


// class Person {
//   protected name: string;
//   constructor(name: string) { this.name = name; }
// }

// class Employee extends Person {
//   private department: string;

//   constructor(name: string, department: string) {
//       super(name)
//       this.department = department;
//   }

//   public getElevatorPitch() {
//       return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//   }
// }

// let howard = new Employee("Howard", "Sales");
// console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误

// class Greeter {
//   static standardGreeting = "Hello, there";
//   greeting: string;
//   greet() {
//       if (this.greeting) {
//           return "Hello, " + this.greeting;
//       }
//       else {
//           return Greeter.standardGreeting;
//       }
//   }
// }

// let greeter1: Greeter;
// greeter1 = new Greeter();
// console.log(greeter1.greet());

// let greeterMaker: typeof Greeter = Greeter;
// greeterMaker.standardGreeting = "Hey there!";

// let greeter2: Greeter = new greeterMaker();
// console.log(greeter2.greet());