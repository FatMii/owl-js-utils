/**
 * @function 防抖函数
 * @param {Function} fn
 * @param {number}  wait 等待时间
 * @returns {Function}
 * @author 🦉OwlLai🦉 2022/06/03
 */
export function debounce(fn, wait) {
  let timer = null;

  return function () {
    let context = this,
      args = arguments;

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

/**
 * @function 节流函数
 * @param {Function} fn
 * @param {number}  delay 等待时间
 * @returns {Function}
 * @author 🦉OwlLai🦉 2022/06/03
 */
export function throttle(fn, delay) {
  let curTime = Date.now();

  return function () {
    let context = this,
      args = arguments,
      nowTime = Date.now();

    if (nowTime - curTime >= delay) {
      curTime = Date.now();
      return fn.apply(context, args);
    }
  };
}
