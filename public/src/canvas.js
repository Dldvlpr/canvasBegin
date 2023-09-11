"use strict";
window.onload = function () {
    var canvas = document.getElementById('canvas');
    if (canvas === null) {
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
            ctx.fillRect(j * size, i * size, size, size);
        }
    }
};
