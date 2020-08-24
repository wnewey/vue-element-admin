// import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from "element-ui";
import Vue from 'vue';
import "../../element-ui-theme/index.css";
import GRUI from '../../grui';
import filters from "../../src/extends/filters";

Vue.use(filters);

Vue.use(GRUI, {
  size: 'mini'
});
Vue.use(ElementUI, {
  size: 'mini'
});



export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
  //  Vue.use(Element)
};
