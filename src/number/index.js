/**
 * @function 获取指定范围内的随机数
 * @param {number} min 最小范围
 * @param {number} max 最大范围
 * @returns {number} result
 * @author 🦉OwlLai🦉 2022/06/03
 */
export function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @function 将数字装换为千分位
 * @param {number} n
 * @returns {number} num
 * @author 🦉OwlLai🦉 2022/06/03
 */
export function formatThousandth(n) {
  let num = n.toString();
  let len = num.length;
  if (len <= 3) {
    return num;
  } else {
    let temp = "";
    let remainder = len % 3;
    if (remainder > 0) {
      // 不是3的整数倍
      return (
        num.slice(0, remainder) +
        "," +
        num.slice(remainder, len).match(/\d{3}/g).join(",") +
        temp
      );
    } else {
      // 3的整数倍
      return num.slice(0, len).match(/\d{3}/g).join(",") + temp;
    }
  }
}
