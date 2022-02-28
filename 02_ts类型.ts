/**
 * ts的类型：
 * number string boolean
 * null  undefind 
 * enum  
 * void 没有值
 * 
 * any： 关闭ts检查，any类型的变量可以赋值给任意变量
 * 
 * array object tuple（元素，ts新增类型，固定长度数组）
 * 
 * unknown： 表示未知类型
 * 
 * 字面量：其本身，限制变量的值就是该字面量的值（let a: 10 | '0', 使用场景：联合类型）
 * 
 * 
 */

// 字面量：有点类似常量，只能赋值一次，不然报错
// 可以使用 | 连接多个类型(联合类型)
let a: 10
a = 11 //不能将类型“11”分配给类型“10”。
// 使用场景：
let b: 'male' | 'female'
b = 'male'
b = 'female'

let c: boolean | string
c = 'xxx'
c = false

// 声明变量如果不指定类型，ts解析器会自动判断变量的类型为any（隐式any）.不建议使用
let d
d = 10
d = 'eeee'
d = true


// unknown： 未知类型，实际是一个类型安全的any。不能直接赋值给其他变量
let e: unknown
let s: string

e = 'hell0'
e = s // 其他类型可以赋值给unknown
s = e   //但不能将类型“unknown”分配给具体类型“string”。但可以赋值给any类型ts(2322)

// 可以以下2种解决方案：
if (typeof e === 'string') {
    s = e
}

// 类型断言，用来告诉解析器，变量的实际类型
// 2种语法都可以：
s = e as string
s = <string>e

// void: 空，没有返回值
function get(): void {
    return undefined
}
function get2(): void {
    return null
}
function get3(): void {
    return never //“never”仅表示类型，但在此处却作为值使用。ts(2693)
}
// 代码抛错，立即结束，就没有返回值
function get4(): never {
    throw new Error('报错了')
}

// 声明object： js对象（不实用）
let f: object

// 实际用法 {属性名： 属性值}
// ？可选属性
let g: { name: string, age?: number }
g = { name: 'www' }
// 优化写法
// 必须属性为name，其他属性都可选
let g1: { name: string, [propName: string]: any }



// 声明函数: 用箭头函数
let h: (a: number, b: number) => number
h = function (n1, n2) {
    return n1 + n2
}

// h = function (n1:string, n2) { 
//     return n1 + n2
// }
// 不能将类型“(n1: string, n2: number) => string”分配给类型“(a: number, b: number) => number”。
//   参数“n1”和“a” 的类型不兼容。
//     不能将类型“number”分配给类型“string”


// 声明数组： 2种写法
let i: number[]
let i2: Array<number>


// 声明元祖，固定长度的数组
let j: [string, string]


// 声明枚举
enum Gender {
    Male = 0,
    Female = 1
}
let k: {
    name: string,
    gender: Gender
}
k = {
    name: 'xc',
    gender: Gender.Female
}


// & 表示同时
let l: { name: string } & { age: number }
// 等价于 {name: string, age:number}


// 类型的别名
type myType = 1 | 3 | 4 | 5
let m: myType
// m = 6 不能将类型“6”分配给类型“myType”。ts(2322)
