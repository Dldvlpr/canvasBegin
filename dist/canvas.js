"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Position_1 = require("./classes/Position");
const Square_1 = require("./classes/Square");
window.onload = function () {
    const canvas = document.getElementById('canvas');
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
    let idOfSquare = 0;
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            let x = i * size;
            let y = j * size;
            let color = (i + j) % 2 === 0 ? "black" : "red";
            idOfSquare++;
            let point = new Position_1.Point(x, y);
            let square = new Square_1.Square(point, size, color, idOfSquare, ctx);
            square.drawSquare();
            console.log(square.getUpperLeftCorner());
            console.log(square.getPoint());
        }
    }
};
//# sourceMappingURL=canvas.js.map