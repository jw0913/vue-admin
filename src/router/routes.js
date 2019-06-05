import Home from '@/components/Home'
import Table from '@/components/demo/Table'
import Form from '@/components/demo/Form'
import List from '@/components/demo/List'
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
      name: '示例',
      icon: 'el-icon-message',
      component: Home,
      leaf:false,
      children: [
        { path: '/table', component: Table, name: '表格' },
        { path: '/form', component: Form, name: '表单' },
        { path: '/list', component: List, name: '列表' },
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
