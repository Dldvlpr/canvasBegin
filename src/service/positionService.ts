import {Position} from "../classes/Position";
import {Square} from "../classes/Square";
import {StateService} from "./stateService";
import {RenderService} from "./renderService";

export class PositionService {
    public static getMousePosition(canvas: HTMLCanvasElement, evt: MouseEvent): Position {
        const rect: DOMRect = canvas.getBoundingClientRect();
        return new Position(evt.clientX - rect.left, evt.clientY - rect.top);
    }

    public static getCenterPosition(mousePos: Position, size: number): Position {
        const centerX: number = mousePos.x - (size / 2);
        const centerY: number = mousePos.y - (size / 2);
        return new Position(centerX, centerY);
    }

    public static isLeft(lineFirstPoint: Position, lineSecondPoint: Position, point: Position): boolean {
        const xp = point.x;
        const yp = point.y;

        const x1 = lineFirstPoint.x;
        const y1 = lineFirstPoint.y;

        const x2 = lineSecondPoint.x;
        const y2 = lineSecondPoint.y;

        const D = (x2 - x1) * (yp - y1) - (xp - x1) * (y2 - y1);

        return D <= 0;
    }

    public static isInside(square: Square, mousePosition: Position): boolean {
        return !this.isLeft(square.getLowerRightCorner(), square.getLowerLeftCorner(), mousePosition) &&
            !this.isLeft(square.getLowerLeftCorner(), square.getUpperLeftCorner(), mousePosition) &&
            !this.isLeft(square.getUpperLeftCorner(), square.getUpperRightCorner(), mousePosition) &&
            !this.isLeft(square.getUpperRightCorner(), square.getLowerRightCorner(), mousePosition);
    }

    public static moveSelected(square: Square, ctx: CanvasRenderingContext2D, mousePos: Position) {
        let centerOfSquare: Position = PositionService.getCenterPosition(mousePos, square.size);
        square.setPosition(centerOfSquare);
        StateService.setRandomRgbColor(square);
        RenderService.draw(square, ctx)
    }
}