

export function trim(str) {
  let reg = /^\s+|\s+$/g;
  return str.replace(reg, "");
}
