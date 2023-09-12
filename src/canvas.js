import { Point } from "./classes/Point";
import { Square } from "./classes/Square";
window.onload = function () {
    var canvas = document.getElementById('canvas');
    if (!canvas) {
        var h1 = document.createElement('h1');
        var textNode = document.createTextNode("Canvas is null");
        h1.appendChild(textNode);
        document.body.appendChild(h1);
        return;
    }
    var ctx = canvas.getContext('2d');
    if (!ctx) {
        var h1 = document.createElement('h1');
        var textNode = document.createTextNode("Canvas context is unavailable");
        h1.appendChild(textNode);
        document.body.appendChild(h1);
        return;
    }
    var size = 50;
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            ctx.fillStyle = (i + j) % 2 === 0 ? "black" : "red";
            var x = j * size;
            var y = i * size;
            var point = new Point(x, y, size, size);
            var square = new Square(point);
            console.log('toto');
            console.log(point);
            square.drawSquare(ctx);
        }
    }
};
