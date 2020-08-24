import store from '@store';
var apis = store.state.permission.routeApis;

var haveApiRight = (pathName, apiUrl) => {
  var pathApis = apis[pathName];
  if (pathApis && pathApis[0]) {
    if (pathApis.includes('*')) {
      return true;
    }
    return pathApis.includes(apiUrl);
  }
  return false;
};

export default haveApiRight;
