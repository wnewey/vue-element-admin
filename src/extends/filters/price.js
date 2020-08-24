
var price = (_price, qfw) => {
  var price = '0.00';
  if (_price) {
    price = isNaN(parseFloat(_price).toFixed(2)) ? '0.00' : parseFloat(_price).toFixed(2);
  }
  if (qfw) {
    var point = price.split('.')[1];
    var num = price.split('.')[0];
    var re = /(?=(?!(\b))(\d{3})+$)/g;
    num = num.replace(re, ',');
    price = num + '.' + point;
  }
  return price;
};

var install = (Vue) => {
  Vue.filter('price', price);
};

export default {
  install,
  price
};
