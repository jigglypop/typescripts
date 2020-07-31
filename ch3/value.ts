// 타입스크립트 변수 선언문
let n: number = 1
let b: boolean = true
let s: string = 'hello'
// let o: object = {}

// 타입스크립트 오류 발생 예
// n = "a";
// b = 1;
// s = false;
// o = { name: "Jack", age: 32 };

// any 타입(안 쓰는 것을 지향함. 최상위 타입)
let a: any = 9
a = 'hello'
a = true
a = {}

// undefined 타입(최하위 타입)
let u: undefined = undefined
// u = 1;

// 템플릿 문자열
let count = 10,
  message = 'You Count'

let result = `${message} is ${count}`
console.log(result)
