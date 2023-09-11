"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y, height, length) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.length = length;
    }
    Point.prototype.getx = function () {
        return this.x;
    };
    Point.prototype.gety = function () {
        return this.y;
    };
    Point.prototype.setx = function (valueOfX) {
        this.x = valueOfX;
    };
    Point.prototype.sety = function (valueOfY) {
        this.y = valueOfY;
    };
    Point.prototype.setLength = function (valueOfLength) {
        this.length = valueOfLength;
    };
    Point.prototype.setHeight = function (valueOfHeight) {
        this.height = valueOfHeight;
    };
    return Point;
}());
exports.Point = Point;
