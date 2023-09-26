import { Square } from "../Domain/Entity/Square";
import { Position } from "../Domain/Entity/Position";
import {Color} from "../Domain/Entity/Color";

export class SquareApplication {
    public static changeSquareColor(square: Square, newColor: Color): void {
        square.color = newColor;  // <-- Correction ici
    }

    public static moveSquareToPosition(square: Square, position: Position): void {
        square.move(position);
    }

    public static isInside(square: Square ,mousePosition: Position): void {
        square.isInside(mousePosition);
    }
}