import GrPagination from './src/pagination.vue';
/* istanbul ignore next */
GrPagination.install = function (Vue) {
  Vue.component(GrPagination.name, GrPagination);
};

export default GrPagination;
