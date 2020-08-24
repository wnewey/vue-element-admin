import GrPopover from './src/popover.vue';
/* istanbul ignore next */
GrPopover.install = function (Vue) {
  Vue.component(GrPopover.name, GrPopover);
};

export default GrPopover;
