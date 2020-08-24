# 权限控制

权限实现过程

1.加载用户菜单信息,vuex store，见 store/permission.js,数据格式见mock/role/routes.js

```json
[{
  path: '/sysconfig',
  component: 'layout',
  name: 'sysconfig',
  meta: {
    title: '系统维护',
    icon: 'el-icon-menu'
  },
  children: [{
    path: '/orgconfig',
    component: 'sysconfig/orgconfig',
    name: 'orgconfig',
    meta: {
      title: '机构管理'
    },
    // '/orgconfig/delete'
    apis: ['/orgconfig/list', '/orgconfig/info', '/orgconfig/save', '/orgconfig/update']
  }]
}]
```

2.前端路由加载时，根据匹配信息判断是否有权限

```js
// ~/src/utils/have-api-right.js
haveApiRight:(menuId,url)=>{}
 
```

3.封装 v-apiauth 指令

4.可使用指令和 js 函数两种方式控制

[菜单权限](./menu.html)

[api权限](./api.html)
