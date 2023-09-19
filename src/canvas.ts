import {Position} from "./classes/Position";
import {Square} from "./classes/Square";


window.onload = function () {
    let squares: Square[] = [];
    let selectedSquare: Square | null = null;
    let isSquareSelected: boolean = false;

    const canvas = document.getElementById('canvas') as HTMLCanvasElement | null;
    const canvasMaxX: number = document.getElementById('canvas').clientWidth;
    const canvasMaxY: number = document.getElementById('canvas').clientHeight;

    if (!canvas) {
        const h1 = document.createElement('h1');
        const textNode = document.createTextNode("Canvas is null");
        h1.appendChild(textNode);
        document.body.appendChild(h1);
        return;
    }

    const ctx = canvas.getContext('2d');

    if (!ctx) {
        const h1 = document.createElement('h1');
        const textNode = document.createTextNode("Canvas context is unavailable");
        h1.appendChild(textNode);
        document.body.appendChild(h1);
        return;
    }


    function getMousePos(canvas: HTMLCanvasElement, evt: MouseEvent): Position {
        const rect = canvas.getBoundingClientRect();
        return new Position(evt.clientX - rect.left, evt.clientY - rect.top);
    }

    let idOfSquare = 0;

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            let size = 50;

            let x = i * size;
            let y = j * size;
            let color: string = (i + j) % 2 === 0 ? "black" : "red";

            let point: Position = new Position(x, y);
            let square: Square = new Square(point, size, color, idOfSquare, ctx);

            squares.push(square);
            square.draw();

            idOfSquare++;
        }
    }

    canvas.addEventListener("click", function (evt) {
        let mousePos = getMousePos(canvas, evt);

        if (!isSquareSelected) {
            for (let i = squares.length - 1; i >= 0; i--) {
                if (squares[i].isInside(mousePos)) {
                    selectedSquare = squares[i];

                    squares.splice(i, 1);
                    squares.push(selectedSquare);

                    selectedSquare.setColor('yellow');
                    isSquareSelected = true;
                    break;
                }
            }
        } else {
            if (selectedSquare) {
                let { x, y } = mousePos;
                let centerX = x - (selectedSquare.size/2);
                let centerY = y - (selectedSquare.size/2);
                let centerOfSquare: Position = new Position(centerX, centerY);
                selectedSquare.setPosition(centerOfSquare);
                selectedSquare.setRandomRgbColor()
                selectedSquare.draw();
                isSquareSelected = false;
                selectedSquare = null;
            }
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let square of squares) {
            square.draw();
        }
    });
};

