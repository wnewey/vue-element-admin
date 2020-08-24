import apiauth from './apiauth';

var directives = [apiauth];

const install = function (Vue) {
  directives.forEach(directive => {
    Vue.use(directive);
  });
};

export default {
  version: '1.0.0',
  install
};
