

   ### 使用webpack打包ts代码
  
  - npm init -y -y 的含义：yes的意思，在init的时候省去了敲回车的步骤，生成的默认的package.json
  - 安装淘宝镜像： npm install -g cnpm --registry=https://registry.npm.taobao.org
  - 安装依赖 webpack webpack-cli typescript ts-loader：  cnpm i -D webpack webpack-cli typescript ts-loader（-D安装开发依赖）
  - 编写webpack 配置文件
  - tsc --init 生成tsconfig.json文件,
  - 修改打包配置文件： 添加build指令
         "scripts": {
            "bulid": "webpack"
          }
            就可以使用npm run build 来执行webpack打包了：目录下生成dist/bundle.js文件就代表成功了

  - 自动生成html， 安装插件： cnpm i -D html-webpack-plugin 

    在webpack.config。js中引入 html-webpack-plugin 
  - webpack 热更新： cnpm i -D webpack-dev-server （这个有node版本要求，低版本node会报错）
     在package.json 文件中配置start："start": "webpack serve --open" 
     通过console.log(验证热更新，为啥html内容没有热更新呢, webpack-dev-server只对js & css 热更新，对HTML不会热更新，需要另外的配置)
     - 需要安装
     - 模块热替换（HMR）：到目前为止，如果修改 .src/style.css 文件，页面会自动应用新的样式，包括，如果装了 vue-loader 修改 .vue 文件，也会有 hot load 效果，根据文档提示：
     - 
```
HMR 是可选功能，只会影响包含 HMR 代码的模块。举个例子，通过 style-loader 为 style 样式追加补丁。 为了运行追加补丁，style-loader 实现了 HMR 接口；当它通过 HMR 接收到更新，它会使用新的样式替换旧的样式

```
但是修改 index.html 文件时，服务器不能 hot reload，因为 css 和 .vue 的 HMR 都是因为相应的 loader 实现了 HMR 接口，所以如果想要修改 index.html 实现 hot load ，则需要装相应的 html-loader

```
npm install -D html-loader
```
然后 index.js 里需要加上一行：
```

require('./index.html')
```


然后 webpack.config.dev.js 里 module.rules 也要加上：

```
module: {
  rules: [
    //...
    {
      test: /\.html$/,
      use: ['html-loader']
    }
    //...
  ]
}
````


这个时候，hot load 才算基本完成，如果以后要加载新的文件，也是一样的道理，装新的 loader 。

- 每次编译前删除旧的打包文件：clean-webpack-plugin

 - npm i -D clean-webpack-plugin