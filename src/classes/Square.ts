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
}
