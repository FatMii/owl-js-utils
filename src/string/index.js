/**
 * @function 字符串前后置空
 * @param {String} str
 * @returns {String} result
 * @author 🦉OwlLai🦉 2022/06/03
 */
export function trim(str) {
  let reg = /^\s+|\s+$/g;
  return str.replace(reg, "");
}

/**
 * @function 获取随机字符串
 * @param {number} length
 * @returns {String} result
 * @author 🦉OwlLai🦉 2022/06/03
 */
export function getRandomString(length) {
  let chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789";
  let strLen = chars.length;
  let randomStr = "";
  for (let i = 0; i < length; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * strLen));
  }
  return randomStr;
}

/**
 * @function 首字母大写
 * @param {str} str
 * @returns {String} result
 * @author 🦉OwlLai🦉 2022/06/03
 */
export function fistLetterUpper(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * @function 电话号码隐藏中间四位为****
 * @param {number} tel
 * @returns {String} result
 * @author 🦉OwlLai🦉 2022/06/03
 */
export function formatTel(tel) {
  tel = String(tel);
  return tel.substr(0, 3) + "****" + tel.substr(7);
}
