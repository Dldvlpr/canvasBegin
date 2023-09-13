import {Point} from "./Point";

export class Square {

    private point: Point;
    private size: number;
    private color: string;
    private idOfSquare: number;
    private ctx: CanvasRenderingContext2D;

    constructor(point: Point, size: number, color: string, idOfSquare:number, ctx: CanvasRenderingContext2D) {
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


    drawSquare(): void {
        let x: number = this.point.getx().valueOf();
        let y: number = this.point.gety().valueOf();
        let size: number = this.size;

        this.ctx.fillStyle = this.color;

        return this.ctx.fillRect(x, y, size, size);
    }

    getUpperLeftCorner() {
        let x = this.point.getx();
        let y = this.point.gety();

        return ["Value of x = " + x, "Value of y = " + y]
    }

    getUpperRightCorner(){
        let x = this.point.getx() + this.size;
        let y = this.point.gety();

        return ["Value of x = " + x, "Value of y = " + y]
    }

    getLowerLeftCorner() {
        let x = this.point.getx();
        let y = this.point.gety() + this.size;

        return ["Value of x = " + x, "Value of y = " + y]
    }

    getLowerRightCorner() {
        let x = this.point.getx() + this.size;
        let y = this.point.gety() + this.size;

        return ["Value of x = " + x, "Value of y = " + y]
    }


}
