import * as R from "ramda";

// range
console.log(R.range(1, 9 + 1));
// tap
const numbers: number[] = R.range(1, 9 + 1);
const array: number[] = R.range(1, 10);
R.tap((n) => console.log(n))(numbers);
R.pipe(R.tap((n) => console.log(n)))(array);

export const dump = R.pipe(R.tap((n) => console.log(n)));
