var dict = new Map();
// 初始化字典 --> 后续改由数据库获取
dict.set('status', { // 卡状态
  '0': '正常',
  '1': '未激活',
  '2': '已冻结',
  '3': '已挂失',
  '4': '已销卡',
  '5': '已销户',
  '6': '待重置密码',
  '7': '已口头挂失',
  '8': '已过期汇总'
});
dict.set('accountType', { // 账户类型
  '0': '共享余额',
  '1': '非共享余额'
});
dict.set('accountMode', { // 账户模式
  '0': '预付款',
  '1': '信贷'
});
dict.set('isVirtualCard', { // 卡形式
  0: '虚拟卡',
  1: '实体卡'
});
dict.set('cardType', { // 卡类型
  '0': '礼品卡',
  '1': '车队卡',
  '2': '个人卡'
});
dict.set('enterpriseNature', { // 企业性质
  '1': '国有企业',
  '2': '三资企业',
  '3': '集体企业',
  '4': '私营企业',
  '5': '政府部门',
  '6': '军队',
  '7': '个人',
  '8': '其他'
});
dict.set('invoiceType', { // 发票类型
  '0': '消费时开普通发票',
  '1': '充值时开普通发票',
  '2': '月结开具普通发票',
  '3': '月结开具增值税发票',
  '4': '不开发票'
});
dict.set('businessType', { // 企业类型
  '1': '农林牧渔业',
  '2': '采矿业',
  '3': '制造业',
  '4': '金融业',
  '5': '房地产业',
  '6': '电力、燃气及水的生产和供应业',
  '7': '建筑业',
  '8': '交通运输、仓储和邮政业',
  '9': '信息传输、计算机服务和软件业',
  '10': '批发和零售业',
  '11': '住宿和餐饮业',
  '12': '租赁和商业服务业',
  '13': '科学研究、技术服务和地质勘察业',
  '14': '水利、环境和公共设施管理业',
  '15': '居民服务和其他服务业',
  '16': '教育',
  '17': '卫生、社会报障和社会福利业',
  '18': '文化、体育和娱乐业',
  '19': '公共管理和社会组织',
  '20': '国际组织',
  '99': '其他'
});
dict.set('invoiceType', { // 发票类型
  '0': '消费时开普通发票',
  '1': '充值时开普通发票',
  '2': '月结开具普通发票',
  '3': '月结开具增值税发票',
  '4': '不开发票'
});
dict.set('vehicleType', { // 车类型
  '1': '挂车',
  '2': '大型货车',
  '3': '中型货车',
  '4': '小型货车',
  '5': '大型客车',
  '6': '中型客车',
  '7': '小型客车',
  '8': '小轿车',
  '9': '泥头车',
  '10': '摩托车',
  '11': '农用车',
  '12': '工程车',
  '13': '油桶',
  '14': '小油车',
  '15': '大油车'
});
dict.set('virtualCard', { // 是否虚拟卡
  '1': '实体卡'
});
dict.set('flag', { // 单据状态
  '0': '待审核',
  '100': '已通过'
});
dict.set('openCardStates', {
  '1': '待审核',
  '2': '已撤回',
  '3': '审核未通过',
  '4': '审核成功'
});

dict.set('payUnitType', [{ // 付款单位类型
   label: 0, text: '本公司付款'
}, {
   label: 1, text: '第三方付款单位'
}]);

dict.set('yesOrNo', [{ // yesNo选择
  label: 1, text: '是'
}, {
  label: 0, text: '否'
}]);

// 数据字典
var datadict = {
  // 获取字典原始值
  getDict: function(code) {
    return dict.get(code);
  },
  // 获取下拉框选项
  getOptions: function (code) {
    let result = [];
    let data = dict.get(code);
    if (data) {
      for (let key in data) {
        result.push({
          label: data[key],
          value: key
        });
      }
    }
    return result;
  },

  // 获取值，无对应值则返回key
  getValue: function (key, code) {
    if (key !== undefined && code !== undefined) {
      let data = dict.get(code);
      if (data) {
        let value = data[key];
        if (value) {
          return value;
        }
      }
    }
    return key || '';
  },

  // 格式化方法
  getFormatter: function (code) {
    return function (row, column, cellValue, index) {
      return datadict.getValue(cellValue, code || column.property);
    };
  }

};

export default datadict;
