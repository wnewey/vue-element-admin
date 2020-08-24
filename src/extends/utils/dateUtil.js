let dateUtil = {
  prevDate: function (date) {
    let amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - amount);
  },
  nextDate: function (date) {
    let amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
  }
};

export default dateUtil;
