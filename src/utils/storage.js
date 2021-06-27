// 数据缓存封装
/***
 * storage封装
 */

import config from '../config';

export default {
  /**
   *设置item
   * @param {*} key
   * @param {*} val
   */
  setItem(key, val) {
    let storage = this.getStorage();
    storage[key] = val;
    window.localStorage.setItem(config.namespace, JSON.stringify(storage));
    // window.localStorage.setItem(key, val);
  },
  /**
   * 获取item数据
   * @return {object}
   */
  getStorage() {
    return JSON.parse(window.localStorage.getItem(config.namespace)) || {};
  },
  /**
   *获取item
   * @param {*} key
   */
  getItem(key) {
    this.getStorage()[key];
    // window.localStorage.getItem(key);
  },
  //   清除单个
  clearItem(key) {
    let storage = this.getStorage();
    delete storage[key];
  },
  //   全部清除
  clearAll() {
    window.localStorage.clear();
  },
};
