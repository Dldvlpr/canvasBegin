import { Square } from "../Domain/Entity/Square";
import { Position } from "../Domain/Entity/Position";
import {ColorUtil} from "../Infrastructure/ColorUtil";

export class SquareApplication {
    public static changeSquareColor(square: Square, color: string): void {
        square.setColor(color);
    }

    public static moveSquareToPosition(square: Square, position: Position): void {
        square.move(position);
    }

    public static setRandomColorForSquare(square: Square): void {
        square.setColor(ColorUtil.randomiseRgbColor());
    }

    public static isInside(square: Square ,mousePosition: Position): void {
        square.isInside(mousePosition);
    }
}