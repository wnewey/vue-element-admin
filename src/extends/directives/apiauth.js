import haveApiRight from '../utils/have-api-right';

var apiauth = {
  bind: function (el, binding, vnode) {
    if (!haveApiRight(binding.arg, el.getAttribute('url'))) {
      el.setAttribute('norights', true);
    }
  },
  inserted: (el, binding, vnode) => {
    if (el.getAttribute('norights')) {
      el.parentNode.removeChild(el);
    }
  }
};

var install = (Vue) => {
  Vue.directive('apiauth', apiauth);
};

export default {
  install,
  apiauth
};
