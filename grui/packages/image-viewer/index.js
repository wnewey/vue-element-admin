import GrImageViewer from './src/image-viewer.vue';
/* istanbul ignore next */
GrImageViewer.install = function (Vue) {
  Vue.component(GrImageViewer.name, GrImageViewer);
};

export default GrImageViewer;
