interface Iperson {
    name: string
    age: number
}

let person: Iperson = {
    name: "aaa",
    age: 12
}

//元组的类型交换

const swap = <T, K>(arr: [T, K]): [K, T] => {
    return [arr[1], arr[0]]
}

swap(['abc', 123])

interface ISpeaker {
    name: string
    speak(): void
}

interface IEat {
    eat(): number
}

class Speak implements ISpeaker, IEat {
    name: 'www'
    speak(): string {
        return 'xx'
    }
    eat(): number {
        return 123
    }
}

// 泛型给类的使用
class GetArrMax<T = number> {
    public arr: T[] = []
    add(val: T) {
        this.arr.push(val)
    }
    getMax() {
        let arr = this.arr
        let max = arr[0]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i]
            }
        }
        return max
    }
}

let getArr = new GetArrMax<number>()
getArr.add(1)
getArr.add(2)
getArr.add(3)
getArr.add(4)
const r = getArr.getMax()


// 1. typeof 区分类型，保护变量
function fn(val: number | string) {
    if (typeof val == 'number') {
        val.toFixed()
    } else {
        val.concat()
    }
}

// 2. instanceof  in


// 交叉类型， 交集
interface Person1 {
    handSome: string
}

interface Person2 {
    height: string
}

type Person3 = Person1 & Person2
let Iperson: Person3 = {
    handSome: 'xxx',
    height: 'xxx'
}

// 方法的mixin默认生成交集
function mixin<T extends object, K extends object>(o1: T, o2: K): T & K {
    return { ...o1, ...o2 }
}
let r1 = mixin({ name: 'xxx', age: 12 }, { address: 'zzz' })
// r1.age

// ts 中的兼容性


// ts 中的条件类型
interface Fish {
    name: string
    type: 'yu'
}

interface Bird {
    name: string
    type: 'niao'
}

interface Swimming {
    swimming: string
}
interface Sky {
    sky: string
}

type MyType<T> = T extends Bird ? Sky : Swimming // 三元表达式功能

// type Exclude<T, K> = T extends K ? never : T;
type MyS = Exclude<string | number | boolean, boolean>


// type Extract<T, K> = T extends K ? T : never;
type sMySt = Extract<string | number | boolean, boolean>
type MySt = Extract<string | number | boolean, boolean>

// infet 推断  
// 获取函数的返回值类型， infer 放在哪里就是推断哪里的类型
function getType(x: number, y: string) {
    return { name: 'xxx', age: 12 }
}

// type ReturnType<T extends (...args: any) => any> = T extends (...args: any[]) => infer r ? r : any
type oget = ReturnType<typeof getType>

// type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : any
type osget = Parameters<typeof getType>


class Person {
    constructor({ name: string }) { }
}
type ConstructorParameters<T extends new (...args: any[]) => any> = T extends new (...args: infer CP) => any ? CP : any
type myC = ConstructorParameters<typeof Person>


// T extends xxx? 三元。类型分发，infer关键字

interface ICompany {
    name: string
    address: string
}
interface IPerson {
    name: string
    age: number
    company: ICompany
}
// Partial
type Partial<T> = {
    [K in keyof T]?: T[K] extends object ? Partial<T[K]> : T[K]
}
type MyPerson = Partial<IPerson>
let p: MyPerson = {
}

// required
type Required<T> = {
    [k in keyof T]-?: T[k]
}
type MyRe = Required<MyPerson>

// Readonly 
type Readonly<T> = {
    readonly [k in keyof T]-?: T[k]
}
type MyRead = Readonly<MyPerson>

// pick 精挑细选
type Pick<T, K extends keyof T> = {
    [X in K]: T[X]
}
type Mypick = Pick<IPerson, 'age' | 'company'>

// omit 忽略属性
type Omit<T, K extends any> = { [P in Exclude<keyof T, K>]: T[P] }
type MyOmit = Omit<IPerson, 'name'> & { name: number }

interface O {
    name: string
    age: number
    height: number
}
type MO = Exclude<keyof O, 'name'>

// Record 类型
// let obj: Record<string | number, any> = { a: 1, 2: 2 }
type Record<K extends keyof any, T> = {
    [p in K]: T
}
function map<K extends keyof any, V, X>(obj: Record<K, V>, cb: (item: V, key: K) => X): Record<K, X> {
    let result = {} as Record<K, X>
    for (let key in obj) {
        result[key] = cb(obj[key], key)
    }
    return result
}
let rs = map({ name: 'xx', age: 12 }, (item, key) => {
    return "$" + item
})

export { }













