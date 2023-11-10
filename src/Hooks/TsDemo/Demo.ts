interface Iperson {
    name: string
    age: number
}

let person: Iperson = {
    name: "aaa",
    age: 12
}

console.log('Iperson', person)


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
    if(typeof val == 'number') {
        val.toFixed()
    } else {
        val.concat()
    }
}

// 2. instanceof  in