import {Square} from "../classes/Square";
import { Position } from "../classes/Position";

describe('Square class', () => {

    let mockContext: CanvasRenderingContext2D;
    let position: Position;
    let size: number;
    let color: string;
    let idOfSquare: number;

    beforeEach(() => {
        mockContext = {
            fillStyle: "",
            fillRect: jest.fn(),
        } as unknown as CanvasRenderingContext2D;

        position = new Position(0, 0);
        size = 50;
        color = "black";
        idOfSquare = 1;
    });

    it('should create a Square instance correctly', () => {
        const square = new Square(position, size, color, idOfSquare, mockContext);
        expect(square.getPoint()).toEqual(position);
        expect(square.getIdOfSquare()).toBe(idOfSquare);
    });

    it('should draw the square with correct values', () => {
        const square = new Square(position, size, color, idOfSquare, mockContext);
        square.drawSquare();
        expect(mockContext.fillStyle).toBe(color);
        expect(mockContext.fillRect).toHaveBeenCalledWith(position.x, position.y, size, size);
    });

});
