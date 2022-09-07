import { IApply, IFunctor, IValidation, _IMaybe } from "./type";

export class Failure<T> implements IValidation<T>, IFunctor<T>, IApply<T> {
  constructor(
    public value: T[],
    public isSuccess = false,
    public isFailure = true
  ) {}
  // IApplicative
  static of<U>(value: U[]): Failure<U> {
    return new Failure<U>(value);
  }
  // IFunctor
  map(f): Failure<T> {
    return new Failure<T>(f(this.value));
  }
  // IApply
  ap(b) {
    return b.isFailure ? new Failure<T>([...this.value, ...b.value]) : this;
  }
}
