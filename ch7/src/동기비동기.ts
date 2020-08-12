import { readFile, readFileSync } from "fs";

console.log("read");
const buffer: Buffer = readFileSync("./package.json");
console.log(buffer.toString());
