export class Color {
    private r: number;
    private g: number;
    private b: number;

    constructor(r: number, g: number, b: number) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    updateColor(r: number, g: number, b: number): Color {
        return new Color(r, g, b)
    }

    public static randomRgbColor(): Color {
        let r: number = Math.floor(Math.random() * (255 + 1));
        let g: number = Math.floor(Math.random() * (255 + 1));
        let b: number = Math.floor(Math.random() * (255 + 1));
        return new Color(r, g, b);
    }

    public toString(): string {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
}
