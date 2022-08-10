export class MayBe<T> {
  constructor(private value) {}

  static of<U>(value) {
    return new MayBe<U>(value);
  }

  isNothing() {
    return this.value === null || this.value === undefined;
  }

  map(f: Function) {
    return this.isNothing() ? MayBe.of(null) : MayBe.of(f(this.value));
  }
}
