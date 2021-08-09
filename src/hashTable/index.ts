import { defaultToString } from "@/utils/index";

export default class HashTable {
  [x: string]: {};

  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  // 散列函数
}
