import { Point } from "./Point";

export class Square {

    private point: Point;

    constructor(point: Point) {
        this.point = point;
    }

    drawSquare(ctx: CanvasRenderingContext2D): void {
        let x: number = this.point.getx().valueOf();
        let y: number = this.point.gety().valueOf();
        let height: number = this.point.getHeight().valueOf();
        let length: number = this.point.getHeight().valueOf();

        ctx.fillRect(x, y, height, length);
    }

}
