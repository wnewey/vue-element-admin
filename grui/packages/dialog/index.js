import GrDialog from './src/dialog.vue';
/* istanbul ignore next */
GrDialog.install = function (Vue) {
  Vue.component(GrDialog.name, GrDialog);
};

export default GrDialog;
