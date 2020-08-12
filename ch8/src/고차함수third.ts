import { First, Second, Third } from "./고차함수";

export const add3: Third<number, number> = (
  x: number
): Second<number, number> => (y: number): First<number, number> => (
  z: number
): number => x + y + z;
