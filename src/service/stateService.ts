import {Square} from "../classes/Square";

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
}
