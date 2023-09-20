import { Square } from "../Domain/Entity/Square";
import { Position } from "../Domain/Entity/Position";

export class Selected {
    public static isSelected(squares: Square[], mousePos: Position): Square | null {
        for (let i: number = squares.length - 1; i >= 0; i--) {
            if (squares[i].isInside(mousePos)) {
                let selectedSquare = squares[i];
                squares.splice(i, 1);
                squares.push(selectedSquare);
                return selectedSquare;
            }
        }
        return null;
    }
}