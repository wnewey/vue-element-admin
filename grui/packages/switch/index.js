import GrSwitch from './src/switch';

/* istanbul ignore next */
GrSwitch.install = function (Vue) {
  Vue.component(GrSwitch.name, GrSwitch);
};

export default GrSwitch;
