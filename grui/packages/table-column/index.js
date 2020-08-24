import GrTableColumn from './src/table-column';
/* istanbul ignore next */
GrTableColumn.install = function (Vue) {
  Vue.component(GrTableColumn.name, GrTableColumn);
};

export default GrTableColumn;
