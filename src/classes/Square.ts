import { Point } from "./Point";

export class Square {

    private point: Point;
    private size: number;

    constructor(point: Point, size: number) {
        this.point = point;
        this.size = size;
    }

    drawSquare(ctx: CanvasRenderingContext2D): void {
        let x: number = this.point.getx().valueOf();
        let y: number = this.point.gety().valueOf();
        let size: number = this.size;

        ctx.fillRect(x, y, size, size);
    }

}
