const range = (from, to) => (from < to ? [from, ...range(from + 1, to)] : []);

for (let value of range(1, 3 + 1)) {
  console.log(value);
}
