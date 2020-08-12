const numArray: number[] = [1, 2, 3];
for (let value of numArray) {
  console.log(value);
}
const strArray: string[] = ["hello", "world", "!"];
for (let value of strArray) {
  console.log(value);
}

// 반복기 제공자 iterable
const createRangeIterable = (from: number, to: number) => {
  let currentValue = from;
  return {
    next() {
      const value = currentValue < to ? currentValue++ : undefined;
      const done = value == undefined;
      return { value, done };
    },
  };
};

const iterator = createRangeIterable(1, 3 + 1);
while (true) {
  const { value, done } = iterator.next();
  if (done) break;
  console.log(value);
}
