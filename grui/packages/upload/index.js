import GrUpload from './src/upload';

/* istanbul ignore next */
GrUpload.install = function (Vue) {
  Vue.component(GrUpload.name, GrUpload);
};

export default GrUpload;
