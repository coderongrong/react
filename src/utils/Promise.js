// 定义promise中的三种状态
const STATUS_PENDING = "pending";
const STATUS_FULFILLED = "fulfilled";
const STATUS_REJECTED = "rejected";

// 定义promise的类
class myPromise {
    static resolve(value) {
        return new myPromise((resolve, reject) => {
            resolve(value);
        });
    }

    static reject(reason) {
        return new myPromise((resolve, reject) => {
            reject(reason);
        });
    }
    //class的构造函数，接受新建实例时的参数:executor在promise中是一个函数
    constructor(executor) {
        //初始化该class中的初始状态
        this.status = STATUS_PENDING;
        //定义class中成功（res）和失败（err）时的变量值
        this.res = "";
        this.err = "";

        //promise异步中最重要的一步，定义成功和错误函数存储的数组，存放异步时还没有执行的操作
        this.onResCallbacks = [];
        this.onErrCallbacks = [];

        //定义该构造函数constructor定义域中的变量resolve
        let resolve = (res) => {
            // console.log("this,", this); // 这里如果是 function  this 就是 window  所以需要用箭头函数
            // 首先判断该class中的状态，只有状态为pending时才能转化class转态为fulfilled或者rejected
            if (this.status === STATUS_PENDING) {
                //修改class的转态为fulfilled，也就表示不会转进行其他转态的转化了
                this.status = STATUS_FULFILLED;
                //将成功（resolve）状态下的值赋给class的成功返回res
                this.res = res;
                //此时状态由pending转为fulfilled，执行之前在then中存放的需要执行的异步操作，promise的then中参数res接受结果
                this.onResCallbacks.forEach((fn) => {
                    fn();
                });
            }
        };

        //定义该构造函数constructor定义域中的变量reject
        let reject = (err) => {
            // 首先判断该class中的状态，只有状态为pending时才能转化class转态为fulfilled或者rejected
            if (this.status === STATUS_PENDING) {
                //修改class的转态为rejected，也就表示不会转进行其他转态的转化了
                this.status = STATUS_REJECTED;
                //将失败（reject）状态下的值赋给class的失败返回err
                this.err = err;
                //此时状态由pending转为rejected，执行之前在catch中存放的需要执行的异步操作，promise的catch中参数err接受结果
                this.onErrCallbacks.forEach((fn) => {
                    fn();
                });
            }
        };

        //按照promise中的逻辑，在调用时就立即执行了，所以在手写的myPromise创建构造函数constructor时就执行executor
        try {
            //执行传入的函数，并将上述定义的resolve和reject作为参数传入
            executor(resolve, reject);
        } catch (err) {
            //报错时调用失败的状态函数
            reject(err);
        }
    }

    //在class中定义promise的成功状态接收函数then,按照promise逻辑，then中传入的一般都是一个函数
    then(onRes = () => {}) {
        //如果是异步的，此时在constructor中status的状态还没变成fulfilled，所以会跳过onRes调用，没有返回
        if (this.status === STATUS_FULFILLED) {
            onRes(this.res);
        }
        //但是我们将此时的异步放入数组存放
        if (this.status === STATUS_PENDING) {
            this.onResCallbacks.push(() => onRes(this.res));
        }
        console.log(this.onResCallbacks); // 先打印只有一个函数的数组 []，再打印有两个函数的数组 []
        //这步操作保证了then和catch能够在同级一起"."调起，当then上述操作完后，返回class实例，便可以接在后面继续调用catch
        return this;
    }

    //在class中定义promise的失败状态接收函数catch,按照promise逻辑，catch中传入的一般都是一个函数
    catch(onErr = () => {}) {
        //如果是异步的，此时在constructor中status的状态还没变成rejected，所以会跳过onErr调用，没有返回
        if (this.status === STATUS_REJECTED) {
            onErr(this.err);
        }
        //但是我们将此时的异步放入数组存放
        if (this.status === STATUS_PENDING) {
            this.onErrCallbacks.push(() => onErr(this.err));
        }
        //这步操作保证了then和catch能够在同级一起"."调起，当catch上述操作完后，返回class实例，便可以接在后面继续调用then
        return this;
    }
}

//调用自己手写的promise
new myPromise((resolve, reject) => {
    console.log("进入了手写的promise");
    //用setTimeOut模拟异步操作
    // console.log("this", this); // 指向 window
    setTimeout(() => {
        // console.log("this", this); // 指向 window
        if (true) {
            resolve("输出成功结果resolve");
        } else {
            reject("输出失败结果reject");
        }
    }, 2000); //按照js的特性，此时不会等待异步完成，直接调用then或者catch
})
    .then((res) => {
        console.log("then1:", res);
    })
    .then((res) => {
        console.log("then2:", res);
    })
    .catch((err) => {
        //return this具体作用体现在这里  链式调用
        console.log("catch1:", err);
    })
    .catch((err) => {
        //return this具体作用体现在这里
        console.log("catch2:", err);
    });

// catch 数量对应 then 数量，多出来的 catch 不会执行
// 多个 then 和 多个 catch  都会执行
// 每一个 then 或 catch 在执行的时候都会 push 到对应数组里保存，在 resolve 或 reject 调用的时候执行