/**
 * @function 获取数据类型
 * @param {Object} target
 * @returns {String} result
 * @author 🦉OwlLai🦉 2022/06/03
 */
export function getType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}

/**
 * @function 对象深度克隆
 * @param {Object} target
 * @returns {WeakMap} hash
 * @author 🦉OwlLai🦉 2022/06/03
 */
export function deepClone(obj, hash = new WeakMap()) {
  // 日期对象直接返回一个新的日期对象
  if (obj instanceof Date) {
    return new Date(obj);
  }
  //正则对象直接返回一个新的正则对象
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  //如果循环引用,就用 weakMap 来解决
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  // 获取对象所有自身属性的描述
  let allDesc = Object.getOwnPropertyDescriptors(obj);
  // 遍历传入参数所有键的特性
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);

  hash.set(obj, cloneObj);
  for (let key of Reflect.ownKeys(obj)) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      cloneObj[key] = deepClone(obj[key], hash);
    } else {
      cloneObj[key] = obj[key];
    }
  }
  return cloneObj;
}
