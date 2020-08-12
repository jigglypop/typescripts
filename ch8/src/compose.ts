export const f = <T>(x: T): string => `f(${x})`;
export const g = <T>(x: T): string => `g(${x})`;
export const h = <T>(x: T): string => `h(${x})`;

const compose = <T, R>(...functions: readonly Function[]): Function => (
  x: T
): ((T) => R) => {
  const deepCopiedFunctions = [...functions];
  return deepCopiedFunctions.reverse().reduce((value, func) => func(value), x);
};
// h, g, f 반복
const composedFGH = compose(h, g, f);
console.log(composedFGH("x"));
// 같은 함수 3번 반복
const inc = (x) => x + 1;
const composed = compose(inc, inc, inc);
console.log(composed(1));
