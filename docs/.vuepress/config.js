module.exports = {
  title: "前端开发文档",
  themeConfig: {
    sidebar: [
      ['/', '首页'],
      {
        title: '字体颜色',
        path: '/components/theme',
      },
      {
        title: '组件',   // 必要的
        path: '/components/',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        // sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          ['/components/layout', "Layout布局"],
          ['/components/auto-size-text', "AutoSizeText"],
          ['/components/button', "Button"],
          ['/components/city-picker', "CityPicker"],
          ['/components/icon', "Icon"],
          ['/components/loading', "Loading"],
          ['/components/msg', "Msg"],
          ['/components/pagination', "Pagination"],
          ['/components/steps', "Steps"],
          ['/components/table', "Table"],
          ['/components/input', "Input"],
          ['/components/cascaderPanel', "CascaderPanel"],
          ['/components/checkboxGroup', "CheckboxGroup"],
          ['/components/datePicker', "DatePicker"]
        ]
      },
      {
        title: '权限控制',
        path: '/rights',
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          ['/rights/menu', "菜单权限"],
          ['/rights/api', "API权限"],
        ]
      },
      {
        title: '其他',
        path: '/plugins',
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          ['/plugins/filters', "Filters"],
          ['/plugins/utils', "Utils"]
        ]
      }
    ]
  }
};
