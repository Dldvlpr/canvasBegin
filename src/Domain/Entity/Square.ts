import {Position} from "./Position";
import {Color} from "./Color";
export class Square {
    public position: Position;
    public size: number;
    public color: Color;
    public id: number;

    constructor(position: Position, size: number, color: Color, id: number) {
        this.position = position;
        this.size = size;
        this.color = color
        this.id = id;
    }

    public getPosition(): Position {
        return new Position(this.position.x, this.position.y);
    }

    public getId(): number {
        return this.id;
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

    public move(centerOfSquare: Position): void {
        this.position = new Position(centerOfSquare.getX(), centerOfSquare.getY());
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

    public setCenterPosition(mousePos: Position): void {
        const centerX: number = mousePos.x - (this.size / 2);
        const centerY: number = mousePos.y - (this.size / 2);
        this.position = new Position(centerX, centerY);
    }
}
