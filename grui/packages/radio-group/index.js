import GrRadioGroup from './src/radio-group';

/* istanbul ignore next */
GrRadioGroup.install = function (Vue) {
  Vue.component(GrRadioGroup.name, GrRadioGroup);
};

export default GrRadioGroup;
