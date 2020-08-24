import GrBadge from './src/badge';

/* istanbul ignore next */
GrBadge.install = function (Vue) {
  Vue.component(GrBadge.name, GrBadge);
};

export default GrBadge;
