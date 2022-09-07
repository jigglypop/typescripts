"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchJokes = void 0;
var node_fetch_1 = __importDefault(require("node-fetch"));
var fetchJokes = function () {
    return new Promise(function (resolve, reject) {
        var jokeUrl = "https://api.icndb.com/jokes/random/5?limitTo=[nerdy]";
        (0, node_fetch_1.default)(jokeUrl)
            .then(function (res) { return res.json(); })
            .then(function (fetchResult) { return resolve(fetchResult); })
            .catch(function (e) { return reject(e); });
    });
};
exports.fetchJokes = fetchJokes;
(0, exports.fetchJokes)()
    .then(function (result) { return console.log(result); })
    .catch(function (e) { return console.log(e); });
console.log("Hello");
//# sourceMappingURL=index.js.map