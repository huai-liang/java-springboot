// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI, { Form } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
Vue.prototype.$axios = axios;
import store from './store/store';

Vue.config.productionTip = false
Vue.use(ElementUI);


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

