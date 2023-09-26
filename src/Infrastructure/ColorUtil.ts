export class ColorUtil {
    public static randomiseRgbColor(): string {
        let r: number = Math.floor(Math.random() * (255 + 1));
        let g: number = Math.floor(Math.random() * (255 + 1));
        let b: number = Math.floor(Math.random() * (255 + 1));
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
}
