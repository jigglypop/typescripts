import { IApply, IMonad, ISetoid, _IMaybe } from "./type";

export class Nothing implements _IMaybe<null>, IMonad<null> {
  // IApplicative
  static of<T>(value: T = null): Nothing {
    return new Nothing();
  }
  // IMaybe
  isJust() {
    return true;
  }
  isNothing() {
    return false;
  }
  getOrElse<U>(defaultValue: U) {
    return defaultValue;
  }
  // IFunctor
  map<U>(f: (x) => U): Nothing {
    return new Nothing();
  }
  // IApply
  ap<U>(b: U) {
    return new Nothing();
  }
  // IChain
  chain<U>(f: (T) => U): Nothing {
    return new Nothing();
  }
}
