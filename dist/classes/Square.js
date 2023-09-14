"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
class Square {
    constructor(point, size, color, idOfSquare, ctx) {
        this.point = point;
        this.size = size;
        this.color = color;
        this.idOfSquare = idOfSquare;
        this.ctx = ctx;
    }
    getPoint() {
        return this.point;
    }
    getIdOfSquare() {
        return this.idOfSquare;
    }
    drawSquare() {
        let x = this.point.x.valueOf();
        let y = this.point.y.valueOf();
        let size = this.size;
        this.ctx.fillStyle = this.color;
        return this.ctx.fillRect(x, y, size, size);
    }
    getUpperLeftCorner() {
        return this.point;
    }
    getUpperRightCorner() {
        let x = this.point.x + this.size;
        let y = this.point.y;
        return ["Value of x = " + x, "Value of y = " + y];
    }
    getLowerLeftCorner() {
        let x = this.point.x;
        let y = this.point.y + this.size;
        return ["Value of x = " + x, "Value of y = " + y];
    }
    getLowerRightCorner() {
        let x = this.point.x + this.size;
        let y = this.point.y + this.size;
        return ["Value of x = " + x, "Value of y = " + y];
    }
}
exports.Square = Square;
//# sourceMappingURL=Square.js.map