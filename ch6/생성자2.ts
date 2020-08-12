const period = 100;
let count = 0;
console.log("start");
const id = setInterval(() => {
  if (count >= 3) {
    clearInterval(id);
    console.log("finish");
  } else {
    console.log(++count);
  }
}, period);
