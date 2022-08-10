import { Container } from "./container";
import { MayBe } from "./maybe";

const square = (x) => x ** 2;

const square2 = Container.of(3).map(square);
const square3 = MayBe.of(null).map(square);

console.log(square2.map(square));
console.log(square3.map(square));
