// 콜백함수

const init = (callback: () => void): void => {
  console.log('default initialization finished')
  callback()
  console.log('all initialization finished')
}

init(() => console.log('custom initialization finished'))

// 고차함수와 클로저

const add4 = (a: number, b: number): number => a + b
// const add5 = (a: number): ((number) => number) => (b: number): number => a + b
