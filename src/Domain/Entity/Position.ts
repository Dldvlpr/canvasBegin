export class Position {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public getx(): number {
       return this.x;
    }

    public gety(): number {
        return this.y;
    }

    public setx(valueOfX: number): void {
        this.x = valueOfX;
    }

    public sety(valueOfY: number): void {
        this.y = valueOfY;
    }
}