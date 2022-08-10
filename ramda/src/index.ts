import * as R from "ramda";

const numbers = R.range(1, 10);
R.tap((n) => console.log(n))(numbers);
