import {Square} from "./Square";
import {Position} from "./Position";

export class Canvas {
    public squares: Square[];
    public selectedSquare: Square | null;

    public setSquares(squaresArray: Square[]) {
        this.squares = squaresArray;
    }

    public getSelectedSquare(): Square | null {
        return this.selectedSquare;
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

    public findSquare(mousePos: Position, squares: Square[]): Square {
        return squares.find(square => square.getId());
    }
}