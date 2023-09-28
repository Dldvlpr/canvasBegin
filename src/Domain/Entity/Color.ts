export class Color {
    private r: number;
    private g: number;
    private b: number;

    constructor(r: number, g: number, b: number) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    public setYellowColor(): void {
        this.r = 255;
        this.g = 255;
        this.b = 0;
    }


    public setRandomRgbColor(): void {
        this.r = Math.floor(Math.random() * (255 + 1));
        this.g = Math.floor(Math.random() * (255 + 1));
        this.b = Math.floor(Math.random() * (255 + 1));
    }

    public toString(): string {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
}
