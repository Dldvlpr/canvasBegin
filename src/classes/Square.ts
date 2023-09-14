import {Point} from "./Point";
import {Position} from "./interfaces/IPosition";
export class Square {

    public point: Position;
    public size: number;
    public color: string;
    public idOfSquare: number;
    public ctx: CanvasRenderingContext2D;

    constructor(point: Position, size: number, color: string, idOfSquare:number, ctx: CanvasRenderingContext2D) {
        this.point = point;
        this.size = size;
        this.color = color;
        this.idOfSquare = idOfSquare;
        this.ctx = ctx;
    }

    getPoint(): Position {
        return this.point;
    }

    getIdOfSquare(): number {
        return this.idOfSquare;
    }


    drawSquare(): void {
        let x: number = this.point.x.valueOf();
        let y: number = this.point.y.valueOf();
        let size: number = this.size;

        this.ctx.fillStyle = this.color;

        return this.ctx.fillRect(x, y, size, size);
    }

    getUpperLeftCorner() {
        let x = this.point.x;
        let y = this.point.y;

        return ["Value of x = " + x, "Value of y = " + y]
    }

    getUpperRightCorner(){
        let x = this.point.x + this.size;
        let y = this.point.y;

        return ["Value of x = " + x, "Value of y = " + y]
    }

    getLowerLeftCorner() {
        let x = this.point.x;
        let y = this.point.y + this.size;

        return ["Value of x = " + x, "Value of y = " + y]
    }

    getLowerRightCorner() {
        let x = this.point.x + this.size;
        let y = this.point.y + this.size;

        return ["Value of x = " + x, "Value of y = " + y]
    }
}
