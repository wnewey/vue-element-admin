//  无参和一个参数，都返回当前系统时间。
// 一个参为格式 fmt;
// 两个参数 则第一个为 date串，第二个为格式
var dateFormat = function (date, fmt = 'yyyy-MM-dd hh:mm:ss') {
  var dateSrc = date;
  date = new Date();
  if (arguments.length === 1) {
    fmt = arguments[0] || fmt;
  }

  if (arguments.length === 2) {
    if (dateSrc) {
      if (typeof dateSrc === 'number') {
        date = new Date(dateSrc);
      }
      // 字符串 20200101
      if (typeof dateSrc === 'string') {
        // 短横线格式
        if (dateSrc.indexOf('-') > 0) {
          date = new Date(Date.parse(dateSrc.replace(/-/g, '/')));
        }
        // 斜线格式
        if (dateSrc.indexOf('/') > 0) {
          date = new Date(Date.parse(dateSrc));
        }
        // 无分隔线的格式
        // 时间戳
        if (dateSrc.length === 8) {
          var finaldateSrc = [dateSrc.substr(0, 4), dateSrc.substr(4, 2), dateSrc.substr(6, 2)].join('/');
          date = new Date(Date.parse(finaldateSrc));
        }

        // 20200101010101
        if (dateSrc.length === 14) {
          var finaldateSrcx = [dateSrc.substr(0, 4), dateSrc.substr(4, 2), dateSrc.substr(6, 2)].join('/') + ' ' +
            [dateSrc.substr(8, 2), dateSrc.substr(10, 2), dateSrc.substr(12, 2)].join(':');
          date = new Date(Date.parse(finaldateSrcx));
        }
      }
      if (dateSrc instanceof Date) {
         date = dateSrc;
      }

      if (date.toString() === 'Invalid Date') {
        return dateSrc;
      }
    } else {
      date = new Date();
    }
  }

  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours() % 24 === 0 ? 24 : date.getHours() % 24, // 小时
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  };
  var week = {
    '0': '/u65e5',
    '1': '/u4e00',
    '2': '/u4e8c',
    '3': '/u4e09',
    '4': '/u56db',
    '5': '/u4e94',
    '6': '/u516d'
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468') : '') + week[date.getDay() + '']
    );
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return fmt;
};

export default dateFormat;
