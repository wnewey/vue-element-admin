import GrAutoSizeText from './src/auto-size-text';

/* istanbul ignore next */
GrAutoSizeText.install = function (Vue) {
  Vue.component(GrAutoSizeText.name, GrAutoSizeText);
};

export default GrAutoSizeText;
