export interface IValuable<T> {
  value(): T;
}

export interface ISetoid<T> extends IValuable<T> {
  equals<U>(value: U): boolean;
}

export interface IApply<T> {
  ap<U>(b: U);
}

export interface IFunctor<T> {
  map<U>(f: (x: T) => U);
}

export interface IApplicative<T> extends IApply<T> {}
export interface IChain<T> extends IApply<T> {
  chain<U>(f: (T) => U);
}

export interface IValidation<T> {
  isSuccess: boolean;
  isFailure: boolean;
}

export interface IMonad<T> extends IChain<T>, IApplicative<T> {}
export interface _IMaybe<T> {
  isJust(): boolean;
  isNothing(): boolean;
  getOrElse(defaultValue: T): T;
}
export type IMaybe<T> = _IMaybe<T> & IMonad<T>;
export interface IRunIO {
  runIO<T, U>(...args: U[]): T;
}
