// 함수 호출 연산자
let functionExpression = function (a, b) {
  return a + b
}

let value = functionExpression(1, 2)
console.log(value)

// 익명 함수
let value1 = (function (a, b) {
  // 1
  return a + b
})(1, 2) // 2
console.log(value1)
// 함수는 let으로 선언하면 변수가 바뀔 여지가 있으므로 const로 선언이 바람직
