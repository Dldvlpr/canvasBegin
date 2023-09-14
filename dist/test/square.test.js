"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Square_1 = require("../classes/Square");
const Position_1 = require("../classes/Position");
const node_test_1 = require("node:test");
(0, node_test_1.describe)('Square draw', () => {
    let canvas;
    let ctx;
    (0, node_test_1.beforeEach)(function () {
        canvas = document.createElement('canvas');
        canvas.width = 300;
        canvas.height = 300;
        ctx = canvas.getContext('2d');
        const point = new Position_1.Point(0, 0);
        const square = new Square_1.Square(point, 50, "red", 4, ctx);
    });
    (0, node_test_1.it)('should be draw a square in canvas', () => {
    });
});
//# sourceMappingURL=square.test.js.map