// 向储存服务storage中写入数据
export const write = function(key, value) {
    if (!key) {
      return;
    }
    if (value) {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
}

  // 从储存服务storage中读取主句
export const read = function(key) {
    if (!key) {
      return null;
    }
    const value = localStorage.getItem(key);
    if (value && value !== 'undefined' && value !== 'null') {
      return JSON.parse(value);
    }
    return null;
}

  // 根据key删除对应storage中的数据
export const  remove = function(key) {
    if (!key) {
      return;
    }
    localStorage.removeItem(key);
}
  // 清空storage
export const  clear = function() {
    localStorage.clear();
}

