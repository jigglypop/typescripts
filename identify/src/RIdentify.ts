import { IApply, ISetoid } from "./type";

export class RIdentify<T> implements ISetoid<T>, IApply<T> {
  constructor(private _value: T) {}

  static of<T>(value: T): RIdentify<T> {
    return new RIdentify<T>(value);
  }
  value() {
    return this._value;
  }
  equals<U>(that: U): boolean {
    if (that instanceof RIdentify) return this.value() === that.value();
    return false;
  }
  map<U>(f: (x: T) => U) {
    return new RIdentify<U>(f(this.value()));
  }

  ap<U>(b: U) {
    const f = this.value();
    if (f instanceof Function) {
      return RIdentify.of<U>(f(b));
    }
  }
  chain<U>(f: (T) => U): U {
    return f(this.value());
  }
}
