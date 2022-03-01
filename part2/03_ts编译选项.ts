// 编译选项：配置，自动执行编译成es6
// 监视单个文件（类似热部署）：tsc 当前文件路径 -w  （watch 监视的意思）

// 监视所有文件（前提：有配置文件tsconfig.json文件，可tsc --init直接生成, 就算里面啥内容都没有，只有一个空的{}，tsc也能生效）：
//  tsc 即可编译所有目录ts文件， tsc -w 可直接监视所有文件

/**
 * tsconfig.json是ts编译器的配置文件，ts编译器可以根据配置信息进行编译
 * 具体内容看下tsconfig.json的注释
 */


console.log('hello')
let a1 = 10
let b1 = 33
let c1