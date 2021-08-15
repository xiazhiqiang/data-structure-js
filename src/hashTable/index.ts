import { defaultToString } from "@/utils/index";
import { plus } from "@/utils/arithmetic";
import ValuePair from "@/utils/valuePair";

export default class HashTable {
  [x: string]: any;

  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  push(key: any, value: any) {
    if (!key) {
      return;
    }

    const k = this.hashFun(key);
    this.table[k] = new ValuePair(key, value);
  }

  remove(key: any) {
    if (!key) {
      return;
    }

    const k = this.hashFun(key);
    delete this.table[k];
  }

  get(key: any) {
    if (!key) {
      return;
    }

    const k = this.hashFun(key);
    return this.table[k].value;
  }

  // 散列函数
  hashFun(key: any): string {
    if (typeof key === "number") {
      return "" + key;
    }

    const keyStr = this.toStrFn(key);
    // 获取str中每个字符的Unicode码，并相加
    let ret = "" + keyStr.charCodeAt(0);
    for (let i = 1, len = keyStr.length; i < len; i++) {
      ret = plus(ret, "" + keyStr.charCodeAt(i));
    }

    return ret;
  }
}
