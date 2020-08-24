// 校验器
var validator = {

  // 是否为手机
  isPhone: function (value) {
    if (value === null || value === '') {
      return false;
    }
    var reg = /^1[3-9]\d{9}$/;
    return reg.test(value);
  },
  // 是否为座机
  isTel: function (value) {
    if (value === null || value === '') {
      return false;
    }
    var reg = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
    return reg.test(value);
  },
  // 是否为邮箱
  isEmail: function (value) {
    if (value === null || value === '') {
      return false;
    }
    var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return reg.test(value);
  },

  // 是否为数字
  isNumber: function (value) {
    if (value === null || value === '') {
      return false;
    }
    var reg = /^[+-]?\d+(.|.\d+)?$/;
    return reg.test(value);
  },
  // 是否为证件号码
  isCert: function (rules, value, callback) {
    if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
      return false;
    } else {
      return true;
    }
  },
  // 密码强度校验
  passwordStrength: function (value) {
    if (value === null || value === '') {
      return 0;
    }
    // var reg = /^(?=.*\d)(?=.*[a-zA-Z]).{8,20}$/; // 必须包含数字、字母，可使用特殊字符
    var reg = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^0-9a-zA-Z]).{8,20}$/; // 必须包含数字、字母、特殊字符
    if (reg.test(value)) {
      let len = value.length;
      if (len >= 8 && len <= 10) {
        return 1; // 弱
      }
      if (len >= 11 && len <= 12) {
        return 2; // 中
      }
      if (len >= 13 && len <= 20) {
        return 3; // 强
      }
    }
    return 0; // 不满足规则
  }

};

export default validator;
