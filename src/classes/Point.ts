export class Point {
    private x: Number;
    private y: Number;

    constructor(x: Number, y: Number) {
        this.x = x;
        this.y = y;
    }

    getx(): Number {
       return this.x;
    }

    gety(): Number {
        return this.y;
    }

    setx(valueOfX: Number): void {
        this.x = valueOfX;
    }

    sety(valueOfY: Number): void {
        this.y = valueOfY;
    }
}