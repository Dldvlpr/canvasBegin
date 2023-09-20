import {Square} from "../classes/Square";
import {PositionService} from "./positionService";
import {Position} from "../classes/Position";

export class StateService {

    public static changeColorOnClick(square: Square, color: string): void {
        square.setColor(color);
    }

    public static setRandomRgbColor(square: Square): void {
        let r: number = Math.floor(Math.random()*(255 + 1));
        let g: number = Math.floor(Math.random()*(255 + 1));
        let b: number = Math.floor(Math.random()*(255 + 1));

        square.setColor('rgb(' + r + ', ' + g + ', ' + b + ')');
    }

    public static isSelected(squares: Square[], mousePos: Position): Square | null {
        for (let i: number = squares.length - 1; i >= 0; i--) {
            if (PositionService.isInside(squares[i], mousePos)) {
                let selectedSquare = squares[i];
                squares.splice(i, 1);
                squares.push(selectedSquare);
                return selectedSquare;
            }
        }
        return null;
    }
}

