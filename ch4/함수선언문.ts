function add1(a: number, b: number): number {
  return a + b
}
const add2 = (a: number, b: number): number => {
  return a + b
}
console.log(add2(1, 2))

// void 타입
function printMe(name: string, age: number): void {
  console.log(`age : ${name}, age : ${age}`)
}
console.log(printMe('염동환', 30))

// 함수 시그니처

// type 키워드로 타입 별칭 만들기

type stringNumberFunc = (string, number) => void
let f: stringNumberFunc = function (a: string, b: number): void {}
let g: stringNumberFunc = function (c: string, d: number): void {}

// undefind 관련 주의사항
interface IAgeable {
  age?: number
}

function getAge(o: IAgeable) {
  return o != undefined && o.age ? o.age : 0
}
console.log(getAge(undefined))
console.log(getAge(null))
console.log(getAge({ age: 1 }))
