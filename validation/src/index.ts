import { Failure } from "./Failure";
import { Validation } from "./RValidation";
import { Success } from "./Success";

const checkNull = (o: { password?: string }) => {
  const { password } = o;
  return password === undefined || typeof password !== "string"
    ? new Failure(["Password can not be null"])
    : new Success(o);
};
const checkLength = (o: { password?: string }, minlength: number = 6) => {
  const { password } = o;
  return !password || password.length < minlength
    ? new Failure(["password must have more than 6 characters"])
    : new Success(o);
};

const checkPassword = (o) => {
  return Validation.of((a) => (b) => o)
    .ap(checkNull(o))
    .ap(checkLength(o));
};

const Passwords = [
  { password: "123456" },
  { password: "1234" },
  {},
  { pa: "123456" },
];

Passwords.forEach((o) => console.log(checkPassword(o)));
