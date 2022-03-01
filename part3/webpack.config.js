// 首先引入一个包： 拼接路径的包
// path 模块提供了用于处理文件和目录的路径的实用工具。 可以使用以下方式访问它：

const path = require('path')
console.log('__dirname>>>', __dirname) ///Users/shanon/wxn-learn/ts/typescript-learn/part3
console.log(path.resolve(__dirname, 'dist')) ///Users/shanon/wxn-learn/ts/typescript-learn/part3/dist
console.log(path.resolve(__dirname, '../dist')) ///Users/shanon/wxn-learn/ts/typescript-learn/dist
console.log(path.resolve(__dirname, './dist')) ///Users/shanon/wxn-learn/ts/typescript-learn/part3/dist
console.log(path.resolve(__dirname, '/dist')) // /dist  /代表根目录 ./代表目前所在目录 ../ 上一级目录



console.log(path.resolve(__dirname, 'dist', 'xxx'))
console.log(path.resolve('/foo/bar', './baz')) ///foo/bar/baz
console.log(path.resolve('/foo/bar', '/tmp/file/')) ///tmp/file


const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')



// webpack所有的配置信息 都应该在module.exports中
module.exports = {
    mode: 'development',
    // 入口文件
    entry: "./src/index.ts",
    // 输出文件
    output: {
        // path指定打包文件所在目录
        // path: './dist' 直接这样写也可以，但是我们引入了path的包，可以用path.resolve 拼接路径
        // path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。
        // 给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径。
        // 例如，给定的路径片段的序列为：/foo、/bar、baz，则调用 path.resolve('/foo', '/bar', 'baz') 会返回 /bar/baz。

        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件名字
        filename: 'bundle.js'
    },
    // module 打包时要使用的模块
    module: {
        // 指定加载的规则
        rules: [
            {
                // test 指定规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: 'ts-loader',
                // 排除：不需要编译的文件
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: '自定义标题',
            template: "./src/index.html" //如果有html模板，就会根据这个模板生成
        }), //npm run build 后，自动生成dist/html文件，和打包文件bundle.js文件同一路径，并且引入相关资源
        new CleanWebpackPlugin()
    ],

}