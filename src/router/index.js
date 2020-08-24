import Layout from '@src/pages/layout/index';
import Vue from 'vue';
import Router from 'vue-router'; // 获取组件的方法

const _import = require('@src/router/_import_' + process.env.NODE_ENV);
// var pathPre = config.pathPre;

// const routerPush = Router.prototype.push;
// Router.prototype.push = function push(location) {
//   if (typeof location === 'string') {
//     location = pathPre + location;
//   } else if (location.url) {
//     location.url = pathPre + location.url;
//   }
//   return routerPush.call(this, location).catch(error => error);
// };

Vue.use(Router);

var affixRoutes = [{
  path: '/',
  component: Layout,
  meta: {
    affix: true,
    icon: 'el-icon-s-home',
    title: '首页'
  },
  name: 'layout',
  children: [{
    path: '/',
    component: _import('index/dashboard'),
    name: 'index',
    meta: {
      affix: true,
      title: '首页',
      icon: 'el-icon-s-home'
    },
    apis: ['*']
  }],
  hidden: true
}];

// 匹配不到路由进入默认页面
var appendRoutes = [
  {
    path: '/auth',
    component: _import('layout/index'),
    hidden: true,
    children: [
      {
        path: '/forbbiden',
        name: 'forbbiden',
        component: _import('403'),
        meta: {
          title: 'Forbidden',
          noCache: true,
          noTag: true
        },
        hidden: true,
        apis: ['*']
      }, {
        path: '/*',
        name: 'notfound',
        component: _import('404'),
        meta: {
          title: 'NotFound',
          noCache: true,
          noTag: true
        },
        hidden: true,
        apis: ['*']
      }]
  }
];

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: affixRoutes
});

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export const AFFIX_ROUTES = affixRoutes;
export const APPEND_ROUTES = appendRoutes;
export const genComponent = _import;

export default router;
