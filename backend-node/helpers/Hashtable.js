export default class Hashtable {
  constructor() {
    this.table = {};
  }

  set(key, value) {
    this.table[key] = this.beforeSet(value);
  }

  beforeSet(value) {
    return value;
  }

  get(key, defaultValue) {
    return this.table[key] || defaultValue;
  }

  getAll() {
    return Object.values(this.table);
  }

  findProperty(key, property, defaultValue) {
    if (!this.has(key)) {
      return defaultValue;
    }
    return this.get(key)[property] || defaultValue;
  }

  has(key) {
    return this.table.hasOwnProperty(key);
  }

  remove(key) {
    delete this.table[key];
  }
}
