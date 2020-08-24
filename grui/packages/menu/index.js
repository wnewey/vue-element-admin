import GrMenu from './src/menu.vue';
/* istanbul ignore next */
GrMenu.install = function (Vue) {
  Vue.component(GrMenu.name, GrMenu);
};

export default GrMenu;
