import GrSubmenu from './src/submenu';

/* istanbul ignore next */
GrSubmenu.install = function (Vue) {
  Vue.component(GrSubmenu.name, GrSubmenu);
};

export default GrSubmenu;
