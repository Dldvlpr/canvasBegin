import { Square } from "./Domain/Entity/Square";
import { Position } from "./Domain/Entity/Position";
import { Canvas } from "./Domain/Entity/Canvas";
import { Render } from "./Infrastructure/Render";
import { Selected } from "./Infrastructure/Selected";
import { SquareApplication } from "./Application/SquareApplication";
import {Mouse} from "./Infrastructure/Mouse";


window.onload = function () {
    let squares: Square[] = [];
    let selectedSquare: Square | null = null;
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
            let color: string = (i + j) % 2 === 0 ? "black" : "red";

            let point: Position = new Position(x, y);
            let square: Square = new Square(point, size, color, idOfSquare);

            squares.push(square);
            Render.draw(square, ctx);

            idOfSquare++;
        }
        canvasModel.setSquares(squares);
    }

    canvas.addEventListener("click", function (evt) {
        let mousePos: Position = Mouse.getMousePosition(canvas, evt)
        if (!selectedSquare) {
            selectedSquare = Selected.isSelected(squares, mousePos);
            if (selectedSquare) {
                SquareApplication.changeSquareColor(selectedSquare, "yellow");
            }
        } else {
            let centerOfSquare: Position = selectedSquare.getCenterPosition(mousePos, selectedSquare.size);
            SquareApplication.moveSquareToPosition(selectedSquare, centerOfSquare)
            SquareApplication.setRandomColorForSquare(selectedSquare);
            selectedSquare = null;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let square of squares) {
            Render.draw(square, ctx);
        }
    });

};

