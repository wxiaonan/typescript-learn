/**
 * ts运行前提： 
 * 1.node （node中有ts解析器，node是一切开发环境的基础）
 * 2.全局安装安装ts： npm i -g typescript
 * 3.创建ts文件
 * 4.使用 tsc xxx.ts 对文件进行编译后，同目录下会产生同名的js文件
 * 
 * 
 * 1.查看本机TypeScript版本,可以使用npm view typescript version (或者tsc --version)
 * 2.查看TypeScript所有可以使用的版本,npm view typescript versions
 * 3.如果想要查看typescript不同环境下的版本,可以使用npm info typescript 查看测试版本、开发版本、最近版本、下一版本
 * 4.查看本地是否安装typescript,使用npm ls typescript
 * 
 * 
 * 
 * 
 * 

 */
console.log('halo ts!!')



/**
 * ### : 变量类型
 * 1.如果变量的声明&赋值是同时进行的，ts可自动对变量进行类型检测
 * 
 */

let a: number //如果同时打开ts & 编译后的js 文件，则会报错：无法重新声明块范围变量“a”。ts：同一目录下不能声明2个同名的变量
a = 10

a = null
a = undefined

let c = true


/**
 * 遇到的问题：
 * 1：为什么等于null,undefined不报错
 * 答：因为null 和 undefined 是一个类型，不是值，b = null 相当于释放内存了
 * 
 * 2：同一个ts& js 文件打开的话，回被认为是同一作用域，同一变量会报错：无法重新声明块范围变量
 * 答：问题出在了变量命名空间，如果不把文件当作模块使用的话，typescript会认为所有文件里的代码都是在一个作用域里的，所以即使在不同文件也不能声明同名变量
 *
 * 方法1:关闭js文件即可，
 * 
 * 方法2：TypeScript决定解决该问题的方法是简单地声明模块是包含导入或导出的任何文件。
 * 因此，如果您的文件没有任何顶级export或export顶级语句，那么您偶尔会看到全局声明相互干扰的问题。


 * export {} 语句; 在ts文件顶层的某个位置（把ts改成import的形式啥的）

 * 
 *  
 */

//  2.函数参数类型
function sum(a: number, b: number) {
    return a + b
}
sum(3, 7)
console.log(sum(3, 'uuuu')) 
// 报错：string 不能赋值给number类型


// 3.函数返回值的类型
function sum2(a: number, b: number): number {
    return a + '888'
    // 不能将类型“string”分配给类型“number”。ts
}

