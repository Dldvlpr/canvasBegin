import { Point } from "./classes/Point";
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

    const size = 50;

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            ctx.fillStyle = (i + j) % 2 === 0 ? "black" : "red";

            let x = j * size;
            let y = i * size;

            let point: Point = new Point(x, y, size, size);
            let square: Square = new Square(point);

            console.log('toto')
            console.log(point)

            square.drawSquare(ctx);
        }
    }
};
