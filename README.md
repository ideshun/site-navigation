# site-navigation

> 我的网址导航

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Vue & nodejs 链接数据库
+ Vue-cli
  1. 全局安装
    cnpm install -g @vue/cli-init
  2. 局部安装项目
    vue init webpack my-project
    cd site-navigation
  3. 安装 axios
    > npm install axios --save
  4. 运行项目
    > npm run dev
+ express-generator
  1. 全局安装
    npm install -g express-generator
  2. express --view=ejs server (安装服务器)
     change directory:
       > cd server
       
     install dependencies:
       > npm install
  
     run the app:
       > npm start
       
       or
       
       > SET DEBUG=server:*
       
  3. 设置代理，请求接口
    在项目中找到
    ```
       devServer: {
           proxy: {
               '/rng': {     //这里最好有一个 /
                   target: 'http://45.105.124.130:8081',  // 后台接口域名
                   ws: true,        //如果要代理 websockets，配置这个参数
                   secure: false,  // 如果是https接口，需要配置这个参数
                   changeOrigin: true,  //是否跨域
                   pathRewrite:{
                       '^/rng':''
                   }
               }
           }
         }
```
