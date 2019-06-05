// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'

import routes from './router/routes'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false;


Vue.use(ElementUI);
Vue.use(VueRouter);


const router = new VueRouter({
  routes
});
/*new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});*/
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
