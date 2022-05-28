const store = {
  // 存储过期时间映射
  setExpireMap: (key, expire) => {
    const expireMap = localStorage.getItem("EXPIRE_MAP") || "{}";
    localStorage.setItem(
      "EXPIRE_MAP",
      JSON.stringify({
        ...JSON.parse(expireMap),
        key: expire,
      })
    );
  },
  setItem: (key, value, expire) => {
    store.setExpireMap(key, expire);
    localStorage.setItem(key, value);
  },
  getItem: (key) => {
    // 在取值之前先判断是否过期
    const expireMap = JSON.parse(localStorage.getItem("EXPIRE_MAP") || "{}");
    if (expireMap[key] && expireMap[key] < Date.now()) {
      return localStorage.getItem(key);
    } else {
      localStorage.removeItem(key);
      return null;
    }
  },
  
};

//对 store 操作时需要维护2份数据, 并且占用缓存空间
//如果 EXPIRE_MAP 误删除将会导致所有过期时间失效
//对操作过程缺少更灵活的控制(比如操作状态, 操作回调等)
