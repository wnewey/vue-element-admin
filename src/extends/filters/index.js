import datadict from './datadict';
import dateformat from './dataformat';
import hidemobile from './hidemobile';
import price from './price';

var filters = [price, dateformat, hidemobile, datadict];

const install = function (Vue) {
  filters.forEach(filter => {
    Vue.use(filter);
  });
};

export default {
  version: '1.0.0',
  install
};
