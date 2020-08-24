import GrRadio from './src/radio.vue';
/* istanbul ignore next */
GrRadio.install = function (Vue) {
  Vue.component(GrRadio.name, GrRadio);
};

export default GrRadio;
