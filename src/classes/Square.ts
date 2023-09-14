import {Position} from "./Position";
export class Square {
    public position: Position;
    public size: number;
    public color: string;
    public idOfSquare: number;
    public ctx: CanvasRenderingContext2D;

    constructor(position: Position, size: number, color: string, idOfSquare:number, ctx: CanvasRenderingContext2D) {
        this.position = position;
        this.size = size;
        this.color = color;
        this.idOfSquare = idOfSquare;
        this.ctx = ctx;
    }

    public getPoint(): Position {
        return this.position;
    }

    public getIdOfSquare(): number {
        return this.idOfSquare;
    }


    public drawSquare(): void {
        let x: number = this.position.x.valueOf();
        let y: number = this.position.y.valueOf();
        let size: number = this.size;

        this.ctx.fillStyle = this.color;

        return this.ctx.fillRect(x, y, size, size);
    }

    public getUpperLeftCorner(): Position {
        return this.position;
    }

    public getUpperRightCorner(): Position{
        return new Position(this.position.x + this.size, this.position.y);
    }

    public getLowerLeftCorner() {
        return new Position(this.position.x, this.position.y + this.size);
    }

    public getLowerRightCorner() {
        return new Position( this.position.x + this.size,  this.position.y + this.size)
    }


}
