import {Square} from "../classes/Square";
import {Point} from "../classes/Point";
import {beforeEach, describe, it} from "node:test";

describe('Square draw', () => {
    let canvas;
    let ctx;

    beforeEach(function () {
        canvas = document.createElement('canvas');
        canvas.width = 300;
        canvas.height = 300;
        ctx = canvas.getContext('2d');
        
        const point = new Point(0, 0);
        const square = new Square(point, 50, "red", 4, ctx)

    });

    it('should be draw a square in canvas', () => {

    });
});