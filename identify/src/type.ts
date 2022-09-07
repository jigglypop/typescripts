export interface IValuable<T> {
  value(): T;
}

export interface ISetoid<T> extends IValuable<T> {
  equals<U>(value: U): boolean;
}

export interface IApply<T> {
  ap<U>(b: U);
}

export interface IApplicative<T> extends IApply<T> {}
export interface IChain<T> extends IApply<T> {
  chain<U>(f: (T) => U);
}

export interface IMonad<T> extends IChain<T>, IApplicative<T> {}
