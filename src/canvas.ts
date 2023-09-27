import {Square} from "./Domain/Entity/Square";
import {Position} from "./Domain/Entity/Position";
import {Canvas} from "./Domain/Entity/Canvas";
import {Color} from "./Domain/Entity/Color";
import {Render} from "./Infrastructure/Render";
import {SquareApplication} from "./Application/SquareApplication";
import {Mouse} from "./Infrastructure/Mouse";

window.onload = function () {
    let squares: Square[] = [];
    let canvasModel = new Canvas()

    const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement | null;

    if (!canvas) {
        const h1: HTMLHeadingElement = document.createElement('h1');
        const textNode: Text = document.createTextNode("Canvas is null");
        h1.appendChild(textNode);
        document.body.appendChild(h1);
        return;
    }

    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

    if (!ctx) {
        const h1: HTMLHeadingElement = document.createElement('h1');
        const textNode: Text = document.createTextNode("Canvas context is unavailable");
        h1.appendChild(textNode);
        document.body.appendChild(h1);
        return;
    }

    let idOfSquare: number = 0;

    for (let i: number = 0; i < 2; i++) {
        for (let j: number = 0; j < 2; j++) {
            let size: number = 50;

            let x: number = i * size;
            let y: number = j * size;
            let color: Color = (i + j) % 2 === 0 ? new Color(0, 0, 0) : new Color(255, 0, 0);

            let point: Position = new Position(x, y);
            let square: Square = new Square(point, size, color, idOfSquare);

            squares.push(square);
            Render.draw(square, ctx);

            idOfSquare++;
        }
        canvasModel.setSquares(squares);
    }

    let action = 'none';

    canvas.addEventListener("click", function (evt) {
        let mousePos: Position = Mouse.getMousePosition(canvas, evt);

        console.log(canvasModel.findSquare(mousePos, squares))
        console.log(canvasModel.getSelectedSquare())

        if (canvasModel.getSelectedSquare() !== canvasModel.findSquare(mousePos, squares)) {
            canvasModel.setSelectedSquare(mousePos)
            if (action === 'none') {
                const newColor = new Color(255, 255, 0);
                SquareApplication.changeSquareColor(canvasModel.getSelectedSquare(), newColor);
                action = 'selected';
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let square of squares) {
                Render.draw(square, ctx);
            }
            return;
        }

        if (action === 'selected' && canvasModel.getSelectedSquare()) {
            let centerOfSquare: Position = canvasModel.getSelectedSquare().setCenterPosition(mousePos);
            SquareApplication.moveSquareToPosition(canvasModel.getSelectedSquare(), centerOfSquare);
            const randomColor = Color.randomRgbColor();
            SquareApplication.changeSquareColor(canvasModel.getSelectedSquare(), randomColor);
            action = 'none';
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let square of squares) {
            Render.draw(square, ctx);
        }
    });
}
