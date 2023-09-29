import {Square} from "../Domain/Entity/Square";

export class Render {
    public static draw(square: Square, ctx: CanvasRenderingContext2D): void {
        let x: number = square.getPosition().x.valueOf();
        let y: number = square.getPosition().y.valueOf();
        let size: number = square.size;

        ctx.fillStyle = square.color.toString();

        return ctx.fillRect(x, y, size, size);
    }

    public static drawAll(canvas: HTMLCanvasElement, squares: Square[]) {
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
        for (let square of squares) {
            Render.draw(square, canvas.getContext('2d'));
        }
    }

}
