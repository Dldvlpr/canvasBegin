import { Square } from "../Domain/Entity/Square";
import { Position } from "../Domain/Entity/Position";

export class SquareApplication {
    public static changeSquareColor(square: Square, color: string): void {
        square.changeColor(color);
    }

    public static moveSquareToPosition(square: Square, position: Position): void {
        square.move(position);
    }

    public static setRandomColorForSquare(square: Square): void {
        square.setRandomRgbColor();
    }

    public static isInside(square: Square ,mousePosition: Position): void {
        square.isInside(mousePosition);
    }
}