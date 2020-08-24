import config from '@src/manage/config/server';
import CryptoJS from 'crypto-js/crypto-js';

let encryptUtil = {
  encrypt: function (text) {
    let encryptKey = CryptoJS.enc.Utf8.parse(config.encryptKey);
    let srcs = CryptoJS.enc.Utf8.parse(text);
    var encrypted = CryptoJS.AES.encrypt(srcs, encryptKey, {
      iv: encryptKey,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    });
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
  }
};

export default encryptUtil;
