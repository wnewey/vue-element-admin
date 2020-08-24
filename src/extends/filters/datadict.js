import datadict from '../utils/datadict';

var install = (Vue) => {
  Vue.filter('datadict', datadict.getValue);
};

export default {
  install
};
