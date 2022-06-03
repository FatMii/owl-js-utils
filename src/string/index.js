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
