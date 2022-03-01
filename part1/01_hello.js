/**
 * 前提：
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
console.log('halo ts!!');
/**
 * 01: 变量类型
 *
 */
var a = 10;
// a = 33
/**
 * 为什么等于null,undefined不报错
 * 因为null 和 undefined 是一个类型，不是值，b = null 相当于释放内存了
 *
 */
var b;
// b = null
// b = undefined
// b = '222'
