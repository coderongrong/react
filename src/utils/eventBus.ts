
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
  // code here
  on(event: string, callBack: any): Listener {
    this[event] = callBack;
    //增加remove方法
    const that = this
    // return {
    //   remove() {
    //     that[event] = null
    //   }
    // }
    const fn = (data: unknown): unknown => data
    fn.remove = () => {
      that[event] = null
    }
    return fn
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
listener1.remove();
myEvent.emit("event1", "1.3"); // no 1.3

myEvent.emit("event2", "2.1"); //  2.1
myEvent.off("event2", callBack2);
myEvent.emit("event2", "2.2"); // no



interface ICompany {
  name: string
  address: string
}
interface MyType {
  name: string
  age: string
  company: ICompany
}

type MyPa<T> = {
  [P in keyof T]?: T[P] extends object ? MyPa<T[P]> : T[P]
}

type Ip = MyPa<MyType>

let s: Ip = {
  company: {
    name: 'xxx',
    address: 'xxx'
  }
}

type _Require<T> = {
  [R in keyof T]-?: T[R]
}

type MyRequired = _Require<Ip>

type _Readonly<T> = {
  readonly [R in keyof T]: T[R]
}
type MyReadOnly = Readonly<MyType>

type _Pick<T, K extends keyof T> = {
  [X in K]: T[X]
}
type MyPick = _Pick<MyType, 'name' | 'age'>


