import {Position} from "./interfaces/IPosition";

export class Point implements Position {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getx(): number {
       return this.x;
    }

    gety(): number {
        return this.y;
    }

    setx(valueOfX: number): void {
        this.x = valueOfX;
    }

    sety(valueOfY: number): void {
        this.y = valueOfY;
    }
}