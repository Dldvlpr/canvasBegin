"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
var Square = /** @class */ (function () {
    function Square(point) {
        this.point = point;
    }
    Square.prototype.drawSquare = function (ctx) {
        var x = this.point.getx();
        var y = this.point.gety();
        var height = this.point.getHeight();
        var length = this.point.getHeight();
        // @ts-ignore
        ctx.fillRect(x, y, height, length);
    };
    return Square;
}());
exports.Square = Square;
