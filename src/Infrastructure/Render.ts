import {Square} from "../Domain/Entity/Square";

export class Render {
    public static draw(square: Square, ctx: CanvasRenderingContext2D): void {
        let x: number = square.position.x.valueOf();
        let y: number = square.position.y.valueOf();
        let size: number = square.size;

        ctx.fillStyle = square.color.toString();

        return ctx.fillRect(x, y, size, size);
    }
}
