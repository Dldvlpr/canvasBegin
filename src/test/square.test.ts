import {Square} from "../Domain/Entity/Square";
import { Position } from "../Domain/Entity/Position";
import {Render} from "../Infrastructure/Render";
import { Color } from "../Domain/Entity/Color";

describe('Square class', () => {

    let mockContext: CanvasRenderingContext2D;
    let position: Position;
    let size: number;
    let color: Color;
    let id: number;

    beforeEach(() => {
        mockContext = {
            fillStyle: "",
            fillRect: jest.fn(),
        } as unknown as CanvasRenderingContext2D;

        position = new Position(0, 0);
        size = 50;
        color = new Color(0, 0, 0);
        id = 1;
    });

    it('should create a Square instance correctly', () => {
        const square = new Square(position, size, color, id);
        expect(square.getPosition()).toEqual(position);
        expect(square.getId()).toBe(id);
    });

    it('should draw the square with correct values', () => {
        const square = new Square(position, size, color, id);
        Render.draw(square, mockContext);
        expect(mockContext.fillStyle).toBe(color);
        expect(mockContext.fillRect).toHaveBeenCalledWith(position.x, position.y, size, size);
    });

    it('Should get the upper left corner correctly', () => {
        const square = new Square(position, size, color, id);
        const upperLeft = square.getUpperLeftCorner();
        expect(upperLeft).toEqual(position);
    });

    it('Should get the upper right corner correctly', () => {
        const square = new Square(position, size, color, id);
        const upperRight = square.getUpperRightCorner();
        expect(upperRight).toEqual(new Position(position.x + size, position.y));
    });

    it('Should get the lower left corner correctly', () => {
        const square = new Square(position, size, color, id);
        const lowerLeft = square.getLowerLeftCorner();
        expect(lowerLeft).toEqual(new Position(position.x, position.y + size));
    });

    it('Should get the lower right corner correctly', () => {
        const square = new Square(position, size, color, id);
        const lowerRight = square.getLowerRightCorner();
        expect(lowerRight).toEqual(new Position(position.x + size, position.y + size));
    });

    it('Should be inside', () => {
        const square = new Square(position, size, color, id);
        const actualPosition = new Position(25, 30)
        const isInside = square.isInside(actualPosition);
        expect(isInside).toBeTruthy();
    });

    it('Should not be inside', () => {
        const square = new Square(position, size, color, id);
        const actualPosition = new Position(70, 87)
        const isInside = square.isInside(actualPosition);
        expect(isInside).toBeFalsy();
    });
});
