import GrSelect from './src/select';
/* istanbul ignore next */
GrSelect.install = function (Vue) {
  Vue.component(GrSelect.name, GrSelect);
};

export default GrSelect;
