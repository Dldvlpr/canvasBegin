export class Point {
    private x: Number;
    private y: Number;
    private height: Number;
    private length: Number;

    constructor(x: Number, y: Number, height: Number, length: Number) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.length = length;
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

    setLength(valueOfLength: number): void {
        this.length = valueOfLength;
    }

    setHeight(valueOfHeight: number): void {
        this.height = valueOfHeight;
    }

    getLength(): Number {
        return this.length;
    }

    getHeight(): Number {
        return this.height;
    }
}