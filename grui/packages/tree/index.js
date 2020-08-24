import GrTree from './src/tree.vue';
/* istanbul ignore next */
GrTree.install = function (Vue) {
  Vue.component(GrTree.name, GrTree);
};

export default GrTree;
