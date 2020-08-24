// 编译码器
var codec = {

  // 隐藏手机号中间部分
  hideMobile: function (value) {
    if (value && value !== '') {
      var r = /^1[3-9]\d{9}$/;
      if (r.test(value)) {
        var reg = /^(\d{3})\d{5}(\d{3})$/;
        return value.replace(reg, '$1*****$2');
      }
    }
  }

};

export default codec;
