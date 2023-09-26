export class Position {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public getX(): number {
       return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public setX(valueOfX: number): void {
        this.x = valueOfX;
    }

    public setY(valueOfY: number): void {
        this.y = valueOfY;
    }
}