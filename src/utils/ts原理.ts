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

// 5 Omit 忽略摸一个属性
type _Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
type MyOmit = _Omit<MyType, 'name'>

// 6 record类型
let obj: Record<string, any> = {a: 1, b: '2'}

export { }