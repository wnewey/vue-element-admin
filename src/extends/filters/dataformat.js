import dateFormat from '../utils/dateformat';
var install = (Vue) => {
  Vue.filter('dateFormat', dateFormat);
};

// success/warning/info/error
export default {
  install,
  dateFormat
};
