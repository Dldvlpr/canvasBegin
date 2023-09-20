import {Position} from "../Domain/Entity/Position";

export class Mouse {
    public static getMousePosition(canvas: HTMLCanvasElement, evt: MouseEvent): Position {
        const rect: DOMRect = canvas.getBoundingClientRect();
        return new Position(evt.clientX - rect.left, evt.clientY - rect.top);
    }
}