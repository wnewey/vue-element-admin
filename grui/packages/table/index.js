import GrTable from './src/table.vue';
/* istanbul ignore next */
GrTable.install = function (Vue) {
  Vue.component(GrTable.name, GrTable);
};

export default GrTable;
