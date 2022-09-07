import { Failure } from "./Failure";
import { Success } from "./Success";

export class Validation {
  static Success = Success;
  static Failure = Failure;
  static of<T>(f: T): Success<T> {
    return Success.of<T>(f);
  }
}
export { Success, Failure };
