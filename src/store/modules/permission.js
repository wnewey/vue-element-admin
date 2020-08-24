import Layout from '@src/pages/layout/index';
import { AFFIX_ROUTES, APPEND_ROUTES, genComponent } from '@src/router';

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes) {
  const res = [];

  // 解析菜单
  // 没有子级，也没有配置权限的菜单都不加载
  routes.forEach(route => {
    const tmp = { ...route };
    if (tmp.children) {
      tmp.children = filterAsyncRoutes(tmp.children);
    }
    if (tmp.component === 'layout') {
      tmp.component = Layout;
    } else {
      tmp.component = genComponent(tmp.component);
    }

    res.push(tmp);
  });

  return res;
}

function genRouteApis(list) {
  for (let i in list) {
    var data = list[i];
    if (data.children) {
      genRouteApis(data.children);
    }
    state.routeApis[data.name] = data.apis || [];
  }
}

const state = {
  routes: [],
  addRoutes: [],
  routeApis: {}
};

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes;
    state.routes = AFFIX_ROUTES.concat(routes);
  }
};

const actions = {
  generateRoutes({ commit }, routes) {
    return new Promise(resolve => {
      let accessedRoutes = filterAsyncRoutes(routes);
      accessedRoutes = accessedRoutes.concat(APPEND_ROUTES);
      commit('SET_ROUTES', accessedRoutes);
      genRouteApis(accessedRoutes);
      resolve(accessedRoutes);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
