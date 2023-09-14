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

    it('Should get the upper left corner correctly', () => {
        const square = new Square(position, size, color, idOfSquare, mockContext);
        const upperLeft = square.getUpperLeftCorner();
        expect(upperLeft).toEqual(position); // Car le point supérieur gauche est le même que la position initiale du carré
    });

    it('Should get the upper right corner correctly', () => {
        const square = new Square(position, size, color, idOfSquare, mockContext);
        const upperRight = square.getUpperRightCorner();
        expect(upperRight).toEqual(new Position(position.x + size, position.y));
    });

    it('Should get the lower left corner correctly', () => {
        const square = new Square(position, size, color, idOfSquare, mockContext);
        const lowerLeft = square.getLowerLeftCorner();
        expect(lowerLeft).toEqual(new Position(position.x, position.y + size));
    });

    it('Should get the lower right corner correctly', () => {
        const square = new Square(position, size, color, idOfSquare, mockContext);
        const lowerRight = square.getLowerRightCorner();
        expect(lowerRight).toEqual(new Position(position.x + size, position.y + size));
    });
});
