import * as R from "ramda";

// R.trim 앞뒤의 공백 제거
console.log(R.trim("\t hello \n"));
// R.toLower 소문자로 / R.toUpper 대문자로
console.log(R.toLower("HELLO"));
console.log(R.toUpper("hello"));

// R.split 문자를 배열로
const words: string[] = R.split(" ")(`Hello world!, Im Peter`);
console.log(words);
