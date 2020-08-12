import * as R from "ramda";

const array: number[] = [3, 4];
const newArray1 = R.prepend(1)(array);
console.log(newArray1);
const newArray2 = R.append(2)(array);
console.log(newArray2);

// R.sortBy함수
type IPerson = {
  name: string;
  age: number;
  title?: string;
};
