const state = {
  SUCCESS: {
    code: '000000',
    msg: '成功'
  },
  FAIL: {
    code: '100000',
    msg: '失败'
  },
  FORBIDDEN: {
    code: '400003',
    msg: '权限错误'
  },
  REPEATERROR: {
    code: '100001',
    msg: '账号在别处登录，被强迫下线'
  }
};

export default {
  state
};
