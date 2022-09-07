"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Just = void 0;
var Just = /** @class */ (function () {
    function Just(_value) {
        this._value = _value;
    }
    Just.prototype.value = function () {
        return this._value;
    };
    // IApplicative
    Just.of = function (value) {
        return new Just(value);
    };
    // IMaybe
    Just.prototype.isJust = function () {
        return true;
    };
    Just.prototype.isNothing = function () {
        return false;
    };
    Just.prototype.getOrElse = function (defaultValue) {
        return this.value();
    };
    // IFunctor
    Just.prototype.map = function (f) {
        return new Just(f(this.value()));
    };
    // IApply
    Just.prototype.ap = function (b) {
        var f = this.value();
        if (f instanceof Function) {
            return Just.of(f(b));
        }
    };
    // IChain
    Just.prototype.chain = function (f) {
        return f(this.value());
    };
    return Just;
}());
exports.Just = Just;
//# sourceMappingURL=Just.js.map