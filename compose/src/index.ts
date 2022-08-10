const compose =
  (...fs: Function[]) =>
  (value) =>
    fs.reverse().reduce((v, f) => f(v), value);

let number = compose(Math.round, parseFloat, Math.sqrt);

console.log(number("3.56"));
