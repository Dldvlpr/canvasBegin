import {Position} from "./classes/Position";
import {Square} from "./classes/Square";
import {StateService} from "./service/stateService";
import {RenderService} from "./service/renderService";
import {PositionService} from "./service/positionService";


window.onload = function () {
    let squares: Square[] = [];
    let selectedSquare: Square | null = null;
    let isSquareSelected: boolean = false;

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
            let color: string = (i + j) % 2 === 0 ? "black" : "red";

            let point: Position = new Position(x, y);
            let square: Square = new Square(point, size, color, idOfSquare);

            squares.push(square);
            RenderService.draw(square, ctx)

            idOfSquare++;
        }
    }

    canvas.addEventListener("click", function (evt) {
        let mousePos: Position = PositionService.getMousePosition(canvas, evt);

        if (!isSquareSelected) {
            for (let i: number = squares.length - 1; i >= 0; i--) {
                if (PositionService.isInside(squares[i], mousePos)) {
                    selectedSquare = squares[i];

                    squares.splice(i, 1);
                    squares.push(selectedSquare);

                    StateService.changeColorOnClick(selectedSquare, "yellow")

                    isSquareSelected = true;
                    break;
                }
            }
        } else {
            if (selectedSquare) {
                let centerOfSquare: Position = PositionService.getCenterPosition(mousePos, selectedSquare.size);
                selectedSquare.setPosition(centerOfSquare);
                StateService.setRandomRgbColor(selectedSquare);
                RenderService.draw(selectedSquare, ctx)
                isSquareSelected = false;
                selectedSquare = null;
            }
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let square of squares) {
            RenderService.draw(square, ctx)
        }
    });
};

