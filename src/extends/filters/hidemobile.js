import codec from '../utils/codec';

var install = (Vue) => {
  Vue.filter('hidemobile', codec.hideMobile);
};

export default {
  install
};
