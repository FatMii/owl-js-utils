/**
 * @function 判断邮箱是否正确
 * @param  {String} str
 * @returns {Boolean} result
 * @author 🦉OwlLai🦉 2022/06/03
 */
export function isEmail(string) {
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return reg.test(string);
}

/**
 * @function 判断身份证是否正确
 * @param {String} idCard
 * @returns {Boolean} result
 * @author 🦉OwlLai🦉 2022/06/03
 */
export function isIdCard(idCard) {
  let reg =
    /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  return reg.test(idCard);
}

/**
 * @function 判断手机号码是否正确
 * @param {String} phoneNumber
 * @returns {Boolean} result
 * @author 🦉OwlLai🦉 2022/06/03
 */
export function isPhone(phoneNumber) {
  let reg = /^1[3-9]\d{9}$/;
  return reg.test(phoneNumber);
}
