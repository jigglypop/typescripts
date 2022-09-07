import { IFunctor, IRunIO } from "./type";

const pipe =
  (...fs) =>
  (arg) =>
    fs.reduce((v, f) => f(v), arg);

export class IO implements IRunIO, IFunctor<Function> {
  constructor(public f: Function) {}

  static of(f: Function) {
    return new IO(f);
  }

  // IRunIO
  runIO<T>(...args: any[]): T {
    return this.f(...args) as T;
  }

  // IFunctor
  map(f: Function): IO {
    const _f: Function = pipe(this.f, f);
    return IO.of(_f);
  }

  // IChain
  chain(f) {
    const that = this;
    return IO.of((value) => {
      const io = f(that.f(value));
      return io.f();
    });
  }
}
