export const compose =
  <T, R>(...fns: readonly Function[]): Function =>
  (x: T): R => {
    return [...fns].reverse().reduce((v, f) => f(v), x);
  };

export const pipe =
  <T, R>(...fns: readonly Function[]): Function =>
  (x: T): R => {
    return [...fns].reduce((v, f) => f(v), x);
  };

const f = <T>(x: T) => `f(${x})`;
const g = <T>(x: T) => `g(${x})`;
const h = <T>(x: T) => `h(${x})`;

const inc = (x: string) => x + 1;

const composed = compose<number, string>(inc, inc, inc);
console.log(composed(1));

const fgh = compose<number, string>(f, g, h);
const rfgh = pipe<number, string>(f, g, h);

console.log(fgh("x"));
console.log(rfgh("x"));
