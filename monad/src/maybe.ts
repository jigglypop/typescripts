export class MayBe<T> {
  constructor(private value: T) {}

  static of<U>(value: U) {
    return new MayBe<U>(value);
  }

  isNothing() {
    return this.value === null || this.value === undefined;
  }

  map(f: Function) {
    return this.isNothing() ? MayBe.of(null) : MayBe.of(f(this.value));
  }

  join() {
    return this.isNothing() ? MayBe.of(null) : this.value;
  }

  chain(f: Function) {
    return this.map(f).join();
  }

  fmap(f: Function) {
    return MayBe.of(this.chain(f));
  }
}
