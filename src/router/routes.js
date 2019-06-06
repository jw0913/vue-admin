import Home from '@/views/Home'
import Table from '@/views/demo/Table'
import Form from '@/views/demo/Form'
import List from '@/views/demo/List'
/*import Vuex from '@/views/demo/Vuex'*/
import ProductList from '@/views/vuex/ProductList'
import ShoppingCart from  '@/views/vuex/ShoppingCart'
let routes = [
    {
      path: '/login',
      component: Home,
      name: '',
      hidden: true
    },
    {
      path: '/404',
      component: Home,
      name: '',
      hidden: true
    },
    {
      path: '/',
      name: '首页',
      component: Home,
      icon:'el-icon-menu',
      leaf:true
    },
    {
      path: '/first',
      name: '示例1',
      icon: 'el-icon-message',
      component: Home,
      leaf:false,
      children: [
        { path: '/table', component: Table, name: '表格' },
        { path: '/form', component: Form, name: '表单' },
        { path: '/list', component: List, name: '列表' },
      ]
    },
    {
      path: '/first',
      name: '示例2',
      icon: 'el-icon-message',
      component: Home,
      leaf:false,
      children: [
        { path: '/ProductList', component: ProductList, name: 'ProductList' },
        { path: '/ShoppingCart', component: ShoppingCart, name: 'ShoppingCart' }
      ]
    }
  ];

export default routes;




/*
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
  export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})*/
