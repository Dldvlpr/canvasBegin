import {Square} from "../classes/Square";
import {Position} from "../classes/Position";
import {beforeEach, describe, it} from "node:test";

describe('Square draw', () => {
    let canvas;
    let ctx;

    beforeEach(function () {
        canvas = document.createElement('canvas');
        canvas.width = 300;
        canvas.height = 300;
        ctx = canvas.getContext('2d');
        
        const position = new Position(0, 0);
        const square = new Square(position, 50, "red", 4, ctx)

    });

    it('should be draw a square in canvas', () => {

    });
});