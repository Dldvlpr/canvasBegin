import {Square} from "./Square";
import {Position} from "./Position";

export class Canvas {
    public squares: Square[];
    public selectedSquare: Square | null;

    public setSquares(squaresArray: Square[]) {
        this.squares = squaresArray;
    }

    public static setSelectedSquare(squares: Square[], mousePos: Position): Square | null {
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