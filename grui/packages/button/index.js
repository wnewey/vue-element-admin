import GrButton from './src/button.vue';

/* istanbul ignore next */
GrButton.install = function (Vue) {
  Vue.component(GrButton.name, GrButton);
};

export default GrButton;
