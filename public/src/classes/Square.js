"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
var Square = /** @class */ (function () {
    function Square(point) {
        this.point = point;
    }
    Square.prototype.drawSquare = function (ctx) {
        var x = this.point.getx().valueOf();
        var y = this.point.gety().valueOf();
        var height = this.point.getHeight().valueOf();
        var length = this.point.getHeight().valueOf();
        ctx.fillRect(x, y, height, length);
    };
    return Square;
}());
exports.Square = Square;
