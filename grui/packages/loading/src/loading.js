import Loading from 'element-ui/packages/loading/src';
import directive from './directive';

var loadingService = Loading;

var LodingInstance = {};
var showLoading = (text) => {
  LodingInstance = loadingService({
    lock: true,
    fullscreen: true,
    text: text || '数据加载中'
  });
};

var hideLoading = () => { LodingInstance.close(); };

export default {
  install(Vue) {
    Vue.use(directive);
    Vue.prototype.showLoading = showLoading;
    Vue.prototype.hideLoading = hideLoading;
  },
  showLoading,
  hideLoading
};
