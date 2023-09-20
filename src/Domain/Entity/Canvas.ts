import {Square} from "./Square";
import {Position} from "./Position";

export class Canvas {
    public squares;
    public selectedSquare;

    public setSquares(squaresArray: Square[]) {
        this.squares = squaresArray;
    }

    public setSelectedSquare(mousePos: Position): Square | null {
        for (let i: number = this.squares.length - 1; i >= 0; i--) {
            if (this.squares[i].isInside(mousePos)) {
                this.selectedSquare = this.squares[i];
                this.squares.splice(i, 1);
                this.squares.push(this.selectedSquare);
                return this.selectedSquare;
            }
        }
        return null;
    }
}