import GrStrength from './src/strength';

/* istanbul ignore next */
GrStrength.install = function (Vue) {
  Vue.component(GrStrength.name, GrStrength);
};

export default GrStrength;
