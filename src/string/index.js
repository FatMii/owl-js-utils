/**
 * @function 字符串前后置空
 * @param {String} str
 * @returns {String} result
 * @author Owllai 2022/06/03
 */
export function trim(str) {
  let reg = /^\s+|\s+$/g;
  return str.replace(reg, "");
}
