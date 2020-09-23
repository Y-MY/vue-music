// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import fastclick from 'fastclick';// 引入fastclick
import VueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router/router';

import './common/less/index.less';

fastclick.attach(document.body);
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueLazyload, {
  loading: require('../src/assets/images/default.png')
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
