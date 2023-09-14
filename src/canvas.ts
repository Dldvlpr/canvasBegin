import { Position } from "./classes/Position";
import { Square } from "./classes/Square";


window.onload = function() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement | null;

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

    const size: number = 50;
    let idOfSquare = 0;

    for(let i = 0; i < 2; i++) {
        for(let j = 0; j < 2; j++) {

            let x = i * size;
            let y = j * size;
            let color: string = (i + j) % 2 === 0 ? "black" : "red";
            idOfSquare++;

            let point: Position = new Position(x, y);
            let square: Square = new Square(point, size, color, idOfSquare, ctx);

            square.drawSquare();
        }
    }
};
