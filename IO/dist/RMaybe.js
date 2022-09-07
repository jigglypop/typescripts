"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RMaybe = void 0;
var Just_1 = require("./Just");
var Nothing_1 = require("./Nothing");
var RMaybe = /** @class */ (function () {
    function RMaybe() {
    }
    RMaybe.Just = function (value) {
        return new Just_1.Just(value);
    };
    RMaybe.Nothing = new Nothing_1.Nothing();
    return RMaybe;
}());
exports.RMaybe = RMaybe;
//# sourceMappingURL=RMaybe.js.map