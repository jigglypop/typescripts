let arrayA = new Array()
arrayA.push(1)
arrayA.push(2)
arrayA.push(3)

// 단축 구문
let numbersA = []
let strings = ['hello', 'world']

// 배열의 타입
let numArray: number[] = [1, 2, 3]
let strArray: string[] = ['Hello', 'World']
type IPerson = { name: string; age?: number }
let personArray: IPerson[] = [{ name: 'Jack' }, { name: 'Jane', age: 32 }]
console.log(personArray)

// 스플릿
export const split = (str: string, delim: string = ''): string[] => str.split(delim)
console.log(split('hello'))
console.log(split('h_e_l_l_o', '-'))

// 조인
export const join = (strArray: string[], delim: string = ''): string => strArray.join(delim)
console.log(join(['h', 'e', 'l', 'l', 'o']))
console.log(join(['h', 'e', 'l', 'l', 'o'], '-'))

// 인덱스
const numbers: number[] = [1, 2, 3, 4, 5]
for (let index = 0; index < numbers.length; index++) {
  const item: number = numbers[index]
  console.log(item)
}

// 배열의 비구조화 할당
let array: number[] = [1, 2, 3, 4, 5]
let [first, second, third, ...rest] = array
console.log(rest)

// for in 문
let names = ['Jack', 'Jane', 'Steve']
for (let index in names) {
  const name = names[index]
  console.log(name)
}

// for in 문 property
let jack = { name: 'Jack', age: 32 }
for (let property in jack) {
  console.log(property)
  console.log(jack[property])
}

// for of 문
for (let name of ['Jack', 'Jane', 'Steve']) {
  console.log(name)
}

// 제네릭
const arrayLength = <T>(array: T[]): number => array.length

// 전개 연산자
let array1: number[] = [1]
let array2: number[] = [2, 3]
let mergedArray: number[] = [...array1, ...array2, 4]
console.log(mergedArray)

// range 함수 구현
export const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : []

let numberPractice: number[] = range(1, 9 + 1)
console.log(numberPractice)
