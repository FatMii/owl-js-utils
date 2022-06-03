/**
 * @function 判断两个数组是否相等
 * @param a {Array}
 * @param b {Array}
 * @returns result {Boolean}
 * @author Owllai 2022/06/03
 */
export function isSameArray(a, b) {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date)
    return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== "object" && typeof b !== "object"))
    return a === b;
  if (a.prototype !== b.prototype) return false;
  let keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every((k) => equals(a[k], b[k]));
}
