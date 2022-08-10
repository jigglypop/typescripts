const tap = (value) => (fn) => (
  typeof fn === "function" && fn(value), console.log(value)
);

tap(2)((it) => console.log("value is " + it));
console.log(["1", "2", "3"].map(parseInt));

const unary = (f) => (f.length === 1 ? f : (x) => f(x));
console.log(["1", "2", "3"].map(unary(parseInt)));

// once 함수 = 한번만 실행되게 함
const once = (f) => {
  let done = false;
  return function () {
    return done ? undefined : ((done = true), f.apply(this, arguments));
  };
};
const doPayment = once(() => {
  console.log("payment is done");
});

doPayment();
doPayment();
