export type First<T, R> = (T) => R;
export type Second<T, R> = (T) => First<T, R>;
export type Third<T, R> = (T) => Second<T, R>;
