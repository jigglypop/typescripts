export class Container<T> {
  constructor(private value) {}

  static of<U>(value) {
    return new Container<U>(value);
  }

  map(f: Function) {
    return Container.of(f(this.value));
  }
}
