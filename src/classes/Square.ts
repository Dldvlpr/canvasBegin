import {Point} from "./Point";

export class Square {

    private point: Point;

    constructor(point: Point) {
        this.point = point;
    }

    drawSquare(ctx: CanvasRenderingContext2D): void {
        let x: Number = this.point.getx();
        let y: Number = this.point.gety();
        let height: Number = this.point.getHeight();
        let length: Number = this.point.getHeight();

        ctx.fillRect(x, y, height, length);
    }

}