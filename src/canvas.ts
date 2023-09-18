import {Position} from "./classes/Position";
import {Square} from "./classes/Square";


window.onload = function () {
    let squares: Square[] = [];


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

    const size: number = 50;
    let idOfSquare = 0;

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            let x = i * size;
            let y = j * size;
            let color: string = (i + j) % 2 === 0 ? "black" : "red";
            idOfSquare++;

            let point: Position = new Position(x, y);
            let square: Square = new Square(point, size, color, idOfSquare, ctx);

            squares.push(square);
            square.draw();
        }
    }

    let selectedSquare: Square = null;
    let isDragging: boolean = false;
    let offsetX: number = 0;
    let offsetY: number = 0;

    canvas.addEventListener("mousedown", function (evt) {
        let mousePos = getMousePos(canvas, evt);

        for (let i = squares.length - 1; i >= 0; i--) {
            if (squares[i].isInside(mousePos)) {
                selectedSquare = squares[i];
                isDragging = true;

                offsetX = mousePos.x - selectedSquare.position.x;
                offsetY = mousePos.y - selectedSquare.position.y;

                squares.splice(i, 1);
                squares.push(selectedSquare);

                selectedSquare.setColorAfterSelected();
                break;
            }
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let square of squares) {
            square.draw();
        }
    }, false);



    canvas.addEventListener("mousemove", function (evt) {
        if (isDragging && selectedSquare) {
            let mousePos = getMousePos(canvas, evt);

            selectedSquare.position.x = mousePos.x - offsetX;
            selectedSquare.position.y = mousePos.y - offsetY;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let square of squares) {
                square.draw();
            }
        }
    }, false);

    canvas.addEventListener("mouseup", function (evt){
        if (isDragging) {
            isDragging = false;

            if (selectedSquare !== null) {
                selectedSquare.setRandomRgbColor();
                selectedSquare.draw();
                selectedSquare = null;
            }
        }
    }, false)
};

