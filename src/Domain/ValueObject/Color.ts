export class Color {
    private r: number;
    private g: number;
    private b: number;

    constructor(r: number, g: number, b: number) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    public static randomRgbColor(): [number, number, number] {
        return [
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256)
        ];
    }

    public static createRandomColor(): Color {
        const [r, g, b] = Color.randomRgbColor();
        return new Color(r, g, b);
    }


    public toString(): string {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
}
