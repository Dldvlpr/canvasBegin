export class Position {
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

    public static isLeft(lineFirstPoint: Position, lineSecondPoint: Position, point: Position): boolean {
        const xp = point.x;
        const yp = point.y;

        const x1 = lineFirstPoint.x;
        const y1 = lineFirstPoint.y;

        const x2 = lineSecondPoint.x;
        const y2 = lineSecondPoint.y;

        const D = (x2 - x1) * (yp - y1) - (xp - x1) * (y2 - y1);

        return D <= 0;
    }
}