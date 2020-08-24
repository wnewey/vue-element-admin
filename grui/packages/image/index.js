import GrImage from './src/image.vue';
/* istanbul ignore next */
GrImage.install = function (Vue) {
  Vue.component(GrImage.name, GrImage);
};

export default GrImage;
