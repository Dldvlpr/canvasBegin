import {Square} from "../classes/Square";

export class RenderService{
    public static draw(square: Square, ctx: CanvasRenderingContext2D): void {
        let x: number = square.position.x.valueOf();
        let y: number = square.position.y.valueOf();
        let size: number = square.size;

        ctx.fillStyle = square.color;

        return ctx.fillRect(x, y, size, size);
    }

}