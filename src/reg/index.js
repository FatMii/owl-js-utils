/**
 * @function 判断邮箱是否正确
 * @param str {String}
 * @returns result {Boolean}
 * @author Owllai 2022/06/03
 */
export function isEmail(string) {
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return reg.test(string);
}

/**
 * @function 判断身份证是否正确
 * @param idCard {String}
 * @returns result {Boolean}
 * @author Owllai 2022/06/03
 */
export function isIdCard(idCard) {
  let reg =
    /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  return reg.test(idCard);
}

/**
 * @function 判断手机号码是否正确
 * @param phoneNumber {String}
 * @returns result {Boolean}
 * @author Owllai 2022/06/03
 */
export function isPhone(phoneNumber){

}
