import { Container } from "./container";
import { MayBe } from "./maybe";

const square = (x) => x ** 2;
const Stack = MayBe.of(1)
  .map((x: number) => x + 1)
  .map((x: number) => x + 1);
console.log(Stack);
const Stack2 = MayBe.of(1)
  .fmap((x: number) => x + 1)
  .fmap((x: number) => x + 1);
console.log(Stack2);
