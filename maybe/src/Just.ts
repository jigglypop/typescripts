import { IMonad, _IMaybe } from "./type";

export class Just<T> implements _IMaybe<T>, IMonad<T> {
  constructor(private _value: T) {}
  value() {
    return this._value;
  }
  // IApplicative
  static of<T>(value: T): Just<T> {
    return new Just<T>(value);
  }
  // IMaybe
  isJust() {
    return true;
  }
  isNothing() {
    return false;
  }
  getOrElse<U>(defaultValue: U) {
    return this.value();
  }
  // IFunctor
  map<U>(f: (x: T) => U) {
    return new Just<U>(f(this.value()));
  }
  // IApply
  ap<U>(b: U) {
    const f = this.value();
    if (f instanceof Function) {
      return Just.of<U>(f(b));
    }
  }
  // IChain
  chain<U>(f: (T) => U): U {
    return f(this.value());
  }
}
