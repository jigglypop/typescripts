"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nothing = void 0;
var Nothing = /** @class */ (function () {
    function Nothing() {
    }
    // IApplicative
    Nothing.of = function (value) {
        if (value === void 0) { value = null; }
        return new Nothing();
    };
    // IMaybe
    Nothing.prototype.isJust = function () {
        return true;
    };
    Nothing.prototype.isNothing = function () {
        return false;
    };
    Nothing.prototype.getOrElse = function (defaultValue) {
        return defaultValue;
    };
    // IFunctor
    Nothing.prototype.map = function (f) {
        return new Nothing();
    };
    // IApply
    Nothing.prototype.ap = function (b) {
        return new Nothing();
    };
    // IChain
    Nothing.prototype.chain = function (f) {
        return new Nothing();
    };
    return Nothing;
}());
exports.Nothing = Nothing;
//# sourceMappingURL=Nothing.js.map