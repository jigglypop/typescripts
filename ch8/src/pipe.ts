import { f, g, h } from "./compose";

export const pipe = <T, R>(...functions: readonly Function[]): Function => (
  x: T
): ((T) => R) => {
  return functions.reduce((value, func) => func(value), x);
};
const piped = pipe(f, g, h);
console.log(piped("x"));
