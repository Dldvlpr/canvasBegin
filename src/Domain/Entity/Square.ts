import {Position} from "./Position";
export class Square {
    public position: Position;
    public size: number;
    public color: string;
    public id: number;

    constructor(position: Position, size: number, color: string, id:number) {
        this.position = position;
        this.size = size;
        this.color = color;
        this.id = id;
    }

    public getPoint(): Position {
        return this.position;
    }

    public getId(): number {
        return this.id;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getUpperLeftCorner(): Position {
        return new Position(this.position.x, this.position.y);
    }

    public getUpperRightCorner(): Position{
        return new Position(this.position.x + this.size, this.position.y);
    }

    public getLowerLeftCorner(): Position {
        return new Position(this.position.x, this.position.y + this.size);
    }

    public getLowerRightCorner(): Position {
        return new Position( this.position.x + this.size,  this.position.y + this.size)
    }

    public setPosition(position: Position): void {
        this.position = new Position(position.getx(), position.gety());
    }

    public changeColor(color: string): void {
        this.color = color;
    }

    public setRandomRgbColor(): void {
        let r: number = Math.floor(Math.random()*(255 + 1));
        let g: number = Math.floor(Math.random()*(255 + 1));
        let b: number = Math.floor(Math.random()*(255 + 1));
        this.color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }

    public move(centerOfSquare: Position): void {
        this.position = new Position(centerOfSquare.getx(), centerOfSquare.gety());
    }

    public isLeft(lineFirstPoint: Position, lineSecondPoint: Position, point: Position): boolean {
        const xp = point.x;
        const yp = point.y;

        const x1 = lineFirstPoint.x;
        const y1 = lineFirstPoint.y;

        const x2 = lineSecondPoint.x;
        const y2 = lineSecondPoint.y;

        const D = (x2 - x1) * (yp - y1) - (xp - x1) * (y2 - y1);

        return D <= 0;
    }

    public isInside(mousePosition: Position): boolean {
        return !this.isLeft(this.getLowerRightCorner(), this.getLowerLeftCorner(), mousePosition) &&
            !this.isLeft(this.getLowerLeftCorner(), this.getUpperLeftCorner(), mousePosition) &&
            !this.isLeft(this.getUpperLeftCorner(), this.getUpperRightCorner(), mousePosition) &&
            !this.isLeft(this.getUpperRightCorner(), this.getLowerRightCorner(), mousePosition);
    }

    public getCenterPosition(mousePos: Position, size: number): Position {
        const centerX: number = mousePos.x - (size / 2);
        const centerY: number = mousePos.y - (size / 2);
        return new Position(centerX, centerY);
    }
}
