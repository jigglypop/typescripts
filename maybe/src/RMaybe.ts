import { Just } from "./Just";
import { Nothing } from "./Nothing";
import { _IMaybe } from "./type";

export class RMaybe<T> {
  static Just<U>(value: U) {
    return new Just<U>(value);
  }
  static Nothing = new Nothing();
}
