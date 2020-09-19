// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import {
  getRoutes
} from '@api/role';
import 'babel-polyfill';
import ElementUI from 'element-ui';
import promise from 'es6-promise';
import Vue from 'vue';
import '../element-ui-theme/index.css';
import GRUI from '../grui';
import Entry from './entry.vue';
import directives from './extends/directives';
import filters from './extends/filters';
import haveApiRight from './extends/utils/have-api-right';
// import plugins from './extends/plugins';
import router, { resetRouter } from './router';
import store from './store';
promise.polyfill(); ;
Vue.use(filters);
// Vue.use(plugins);
Vue.use(directives);

//  交互组件size全局设置为small
Vue.use(GRUI, {
  size: 'mini'
});

Vue.use(ElementUI, {
  size: 'mini'
});

Vue.config.productionTip = false;
Vue.prototype.haveApiRight = haveApiRight;

// 生产代码要去掉
const { mockXHR } = require('../mock');
mockXHR();

var whiteList = ['login'];

router.beforeEach(async (to, from, next) => {
  if (whiteList.indexOf(to.name) > -1) {
    store.dispatch('app/setLayoutLoadig', false);
    next();
    return;
  }
  if (store.state.permission.routes.length === 0) {
    store.dispatch('app/setLayoutLoadig', true);
    var menus = await getRoutes();
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
    var accessRoutes = await store.dispatch('permission/generateRoutes', menus);
    resetRouter(accessRoutes);
    store.dispatch('app/setLayoutLoadig', false);
    next({
      ...to,
      replace: true
    });
    return;
  }
  next();
});

// router.afterEach(function (to) {
// });

/* eslint-disable no-new */
new Vue({
  router,
  store,
  data: {
    eventHub: new Vue()
  },
  render: h => h(Entry)
}).$mount('#app');
