let o: object = { name: 'Jack', age: 32 }
o = { first: 1, second: 2 }
console.log(o)

// 인터페이스
interface IPerson1 {
  name: string
  age: number
}

let good: IPerson1 = { name: 'Jack', age: 32 }
// 속성 모두 일치해야함
// let bad1: IPerson = { name: 'Jack' }
// let bad2: IPerson = { age: 1 }
// let bad3: IPerson = {  }
// let bad4: IPerson = { name: 'Jack',age:32,etc:true }

// 선택 속성 구문
interface IPerson2 {
  name: string
  age: number
  etc?: boolean
}

let good1: IPerson2 = { name: 'Jack', age: 32 }
let good2: IPerson2 = { name: 'Jack', age: 32, etc: true }
