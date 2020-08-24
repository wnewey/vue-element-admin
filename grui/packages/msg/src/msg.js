import { Message, MessageBox } from 'element-ui';

var defaultMsg = (msg, type, call) => {
  require([], require => {
    Message({
      duration: 3 * 1000,
      showClose: true,
      message: msg || '这是一条提示消息',
      type: type || 'info',
      onClose: function () {
        if (call && typeof call === 'function') {
          call();
        }
      }
    });
  });
};

var msgConfirm = (title, msg, call, confirmButtonText, cancelButtonText, showCancelButton) => {
  require([], require => {
    if (showCancelButton === null || showCancelButton === undefined) {
      showCancelButton = true;
    }
    MessageBox({
      showCancelButton: showCancelButton,
      title: title,
      confirmButtonText: confirmButtonText || '确定',
      cancelButtonText: cancelButtonText || '取消',
      message: msg || '这是一条提示消息',
      callback(action, instance) {
        if (call && typeof call === 'function') {
          call(action, instance);
        }
      }
    });
  });
};

var install = (Vue) => {
  Vue.prototype.msg = defaultMsg;
  // success/warning/info/error
  Vue.prototype.msgSuccess = (msg, call) => defaultMsg(msg, 'success', call);

  Vue.prototype.msgWarning = (msg, call) => defaultMsg(msg, 'warning', call);

  Vue.prototype.msgInfo = (msg, call) => defaultMsg(msg, 'info', call);

  Vue.prototype.msgError = (msg, call) => defaultMsg(msg || '获取信息失败', 'error', call);

  Vue.prototype.msgConfirm = (title, msg, call, confirmButtonText, cancelButtonText, showCancelButton) => msgConfirm(title, msg || '获取信息失败', call, confirmButtonText, cancelButtonText, showCancelButton);
};

// success/warning/info/error
export default {
  install,
  msg: defaultMsg,
  msgSuccess: (msg, call) => defaultMsg(msg, 'success', call),
  msgWarning: (msg, call) => defaultMsg(msg, 'warning', call),
  msgInfo: (msg, call) => defaultMsg(msg, 'info', call),
  msgError: (msg, call) => defaultMsg(msg || '获取信息失败', 'error', call),
  msgConfirm: (title, msg, call, confirmButtonText, cancelButtonText, showCancelButton) => msgConfirm(title, msg || '获取信息失败', 'error', call, confirmButtonText, cancelButtonText, showCancelButton)
};
