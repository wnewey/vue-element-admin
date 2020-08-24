import GrMenuItem from './src/menu-item';

/* istanbul ignore next */
GrMenuItem.install = function (Vue) {
  Vue.component(GrMenuItem.name, GrMenuItem);
};

export default GrMenuItem;
