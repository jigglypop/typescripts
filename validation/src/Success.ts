import { IApply, IFunctor, IValidation, _IMaybe } from "./type";

export class Success<T> implements IValidation<T>, IFunctor<T>, IApply<T> {
  constructor(
    public value: T,
    public isSuccess = false,
    public isFailure = true
  ) {}
  // IApplicative
  static of<U>(value: U): Success<U> {
    return new Success<U>(value);
  }
  // IFunctor
  map(f): Success<T> {
    return new Success<T>(f(this.value));
  }
  // IApply
  ap(b) {
    return b.isFailure ? b : b.map(this.value);
  }
}
