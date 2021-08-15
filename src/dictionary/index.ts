import ValuePair from "../utils/valuePair";
import { defaultToString } from "@/utils/index";

/**
 * 数据结构中的字典
 */
export default class Dictionary {
  [x: string]: any;

  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  set(key: any, value: any) {
    if (key && value !== undefined) {
      this.table[this.toStrFn(key)] = new ValuePair<string, any>(key, value);
    }
  }

  get(key: any) {
    return this.hasKey(key) ? this.table[this.toStrFn(key)] : undefined;
  }

  remove(key: string) {
    if (key && typeof this.table[key] !== "undefined") {
      delete this.table[key];
    }
  }

  hasKey(key: any) {
    return typeof this.table[this.toStrFn(key)] !== "undefined";
  }

  clear() {
    this.table = {};
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return Object.keys(this.table).length;

    // 另一种方法
    let size = 0;
    for (let item in this.table) {
      if (this.table.hasOwnProperty(item)) {
        size++;
      }
    }
    return size;
  }

  keyValues() {
    return Object.keys(this.table);
  }

  keys() {
    return this.keyValues().map((i: any) => i.key);
  }

  values() {
    return this.keyValues().map((i: any) => i.value);
  }

  forEach(callbackFn: (arg0: string, arg1: any) => any) {
    const keyValues = this.keyValues();
    for (let i = 0, len = keyValues.length; i < len; i++) {
      if (
        typeof callbackFn === "function" &&
        !callbackFn((keyValues[i] as any).key, (keyValues[i] as any).value)
      ) {
        break;
      }
    }
  }

  toString() {
    return this.keyValues()
      .map((i) => this.table[i].value.toString())
      .join(",");
  }
}
