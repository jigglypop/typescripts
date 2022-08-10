export class Nothing<T> {
  constructor(private value) {}

  static of<U>(value) {
    return new Nothing<U>(value);
  }

  map(f: Function) {
    return this;
  }
}

export class Some<T> {
  constructor(private value) {}

  static of<U>(value) {
    return new Some<U>(value);
  }

  map(f: Function) {
    return Some.of(f(this.value));
  }
}

export const Either = {
  Some: Some,
  Nothing: Nothing,
};
