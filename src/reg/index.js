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
  let reg = /^1[3,4,5,6,7,8,9][0-9]{9}$/;
  return reg.test(phoneNumber);
}

/**
 * @function 校验是否包含emoji表情
 * @param {String} value
 * @returns {Boolean} result
 * @author 🦉OwlLai🦉 2022/06/03
 */
export function isEmojiCharacter(value) {
  value = String(value);
  for (let i = 0; i < value.length; i++) {
    const hs = value.charCodeAt(i);
    if (0xd800 <= hs && hs <= 0xdbff) {
      if (value.length > 1) {
        const ls = value.charCodeAt(i + 1);
        const uc = (hs - 0xd800) * 0x400 + (ls - 0xdc00) + 0x10000;
        if (0x1d000 <= uc && uc <= 0x1f77f) {
          return true;
        }
      }
    } else if (value.length > 1) {
      const ls = value.charCodeAt(i + 1);
      if (ls == 0x20e3) {
        return true;
      }
    } else {
      if (0x2100 <= hs && hs <= 0x27ff) {
        return true;
      } else if (0x2b05 <= hs && hs <= 0x2b07) {
        return true;
      } else if (0x2934 <= hs && hs <= 0x2935) {
        return true;
      } else if (0x3297 <= hs && hs <= 0x3299) {
        return true;
      } else if (
        hs == 0xa9 ||
        hs == 0xae ||
        hs == 0x303d ||
        hs == 0x3030 ||
        hs == 0x2b55 ||
        hs == 0x2b1c ||
        hs == 0x2b1b ||
        hs == 0x2b50
      ) {
        return true;
      }
    }
  }
  return false;
}

/**
 * @function 判断是移动还是PC设备
 * @returns {String} 'mobile' || 'desktop'
 * @author 🦉OwlLai🦉 2022/06/03
 */
export function isMobile() {
  if (
    navigator.userAgent.match(
      /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i
    )
  ) {
    return "mobile";
  }
  return "desktop";
}

/**
 * @function 判断是否是苹果还是安卓移动设备
 * @returns {Boolean} result
 * @author 🦉OwlLai🦉 2022/06/03
 */
export function isAppleMobileDevice() {
  let reg = /iphone|ipod|ipad|Macintosh/i;
  return reg.test(navigator.userAgent.toLowerCase());
}

/**
 * @function 判断是否是微信/QQ内置浏览器
 * @returns {Boolean} result
 * @author 🦉OwlLai🦉 2022/06/03
 */
export function broswer() {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return "weixin";
  } else if (ua.match(/QQ/i) == "qq") {
    return "QQ";
  }
  return false;
}

/**
 * @function 获取浏览器型号和版本
 * @returns {Object} result {type:"IE",version:9}
 * @author 🦉OwlLai🦉 2022/06/03
 */
export function getExplorerInfo() {
  let t = navigator.userAgent.toLowerCase();
  return 0 <= t.indexOf("msie")
    ? {
        //ie < 11
        type: "IE",
        version: Number(t.match(/msie ([\d]+)/)[1]),
      }
    : !!t.match(/trident\/.+?rv:(([\d.]+))/)
    ? {
        // ie 11
        type: "IE",
        version: 11,
      }
    : 0 <= t.indexOf("edge")
    ? {
        type: "Edge",
        version: Number(t.match(/edge\/([\d]+)/)[1]),
      }
    : 0 <= t.indexOf("firefox")
    ? {
        type: "Firefox",
        version: Number(t.match(/firefox\/([\d]+)/)[1]),
      }
    : 0 <= t.indexOf("chrome")
    ? {
        type: "Chrome",
        version: Number(t.match(/chrome\/([\d]+)/)[1]),
      }
    : 0 <= t.indexOf("opera")
    ? {
        type: "Opera",
        version: Number(t.match(/opera.([\d]+)/)[1]),
      }
    : 0 <= t.indexOf("Safari")
    ? {
        type: "Safari",
        version: Number(t.match(/version\/([\d]+)/)[1]),
      }
    : {
        type: t,
        version: -1,
      };
}
