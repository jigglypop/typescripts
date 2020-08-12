import { First, Second } from "./고차함수";

export const add: Second<number, number> = (
  x: number
): First<number, number> => (y: number): number => x + y;
