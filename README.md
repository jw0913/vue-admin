# vue-admin

> vue-admin

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
```
###目录结构
```
参考地址：https://segmentfault.com/a/1190000015472744
src

├── assets          // 资源目录 图片，样式，iconfont
├── components      // 全局通用组件目录
├── config          // 项目配置，拦截器，开关
├── plugins         // 插件相关，生成路由、请求、store 等实例，并挂载 Vue 实例
├── directives      // 拓展指令集合
├── routes          // 路由配置
├── service         // 服务层
├── utils           // 工具类
└── views           // 视图层
```

###Vuex的项目结构
```
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── cart.js       # 购物车模块
        └── products.js   # 产品模块
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
