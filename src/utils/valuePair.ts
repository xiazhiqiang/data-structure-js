export default class ValuePair<IKey, IValue> {
  key: IKey;
  value: IValue;

  constructor(key: IKey, value: IValue) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `${this.key}: ${this.value}`;
  }

}