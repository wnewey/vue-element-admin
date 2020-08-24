import request from '@src/extends/utils/request';

// 没有子级，也没有配置权限的菜单前端都不加载

export function getRoutes() {
  return request({
    url: '/role/routes',
    method: 'get'
  });
}
