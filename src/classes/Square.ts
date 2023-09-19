import {Position} from "./Position";
export class Square {
    public position: Position;
    public size: number;
    public color: string;
    public id: number;
    public ctx: CanvasRenderingContext2D;
    public center: number;

    constructor(position: Position, size: number, color: string, id:number, ctx: CanvasRenderingContext2D) {
        this.position = position;
        this.size = size;
        this.color = color;
        this.id = id;
        this.ctx = ctx;
    }

    public getPoint(): Position {
        return this.position;
    }

    public getId(): number {
        return this.id;
    }

    public setColor(color: string) {
        this.color = color;
    }

    public setRandomRgbColor(): void {
        let r = Math.floor(Math.random()*(255 + 1));
        let g = Math.floor(Math.random()*(255 + 1));
        let b = Math.floor(Math.random()*(255 + 1));

        this.color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }

    public draw(): void {
        let x: number = this.position.x.valueOf();
        let y: number = this.position.y.valueOf();
        let size: number = this.size;

        this.ctx.fillStyle = this.color;

        return this.ctx.fillRect(x, y, size, size);
    }

    public getUpperLeftCorner(): Position {
        return new Position(this.position.x, this.position.y);
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

    public setPosition(position: Position) {
        this.position = position;
    }

    public isInside(mousePosition: Position): boolean {
        return !Position.isLeft(this.getLowerRightCorner(), this.getLowerLeftCorner(), mousePosition) &&
            !Position.isLeft(this.getLowerLeftCorner(), this.getUpperLeftCorner(), mousePosition) &&
            !Position.isLeft(this.getUpperLeftCorner(), this.getUpperRightCorner(), mousePosition) &&
            !Position.isLeft(this.getUpperRightCorner(), this.getLowerRightCorner(), mousePosition);
    }
}
