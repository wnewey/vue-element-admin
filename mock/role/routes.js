// 没有子级，也没有配置权限的菜单前端都不加载

module.exports = [{
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
    apis: ['/orgconfig/list', '/orgconfig/info', '/orgconfig/save', '/orgconfig/update', '/orgconfig/delete']
  }, {
    path: '/orgconfig2',
    component: 'sysconfig/orgconfig-dialog',
    name: 'orgconfigdialog',
    meta: {
      title: '机构管理2'
    },
    apis: ['/orgconfig/list', '/orgconfig/info', '/orgconfig/save', '/orgconfig/update']
  }, {
    path: '/roleconfig',
    component: 'sysconfig/roleconfig',
    name: 'roleconfig',
    meta: {
      title: '角色管理'
    }
  },
  {
    path: '/user',
    component: 'sysconfig/userconfig',
    name: 'user',
    meta: {
      title: '用户管理'
    }
  },
  {
    path: '/menu',
    component: 'sysconfig/menus',
    name: 'menu',
    meta: {
      title: '菜单管理'
    }
  }
  ]
},
{
  path: '/params',
  component: 'layout',
  name: 'params',
  meta: {
    title: '参数维护',
    icon: 'el-icon-setting'
  },
  children: [{
    path: '/sysparms',
    name: 'sysparms',
    component: 'sysparams/sysparam',
    meta: {
      title: '系统参数管理'
    }
  }, {
    path: '/dicts',
    name: 'dicts',
    component: 'sysparams/sysdict',
    meta: {
      title: '数据字典管理'
    }
  }]
}
];
