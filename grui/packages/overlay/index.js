import GrOverlay from './src/overlay';

/* istanbul ignore next */
GrOverlay.install = function (Vue) {
  Vue.component(GrOverlay.name, GrOverlay);
};

export default GrOverlay;
