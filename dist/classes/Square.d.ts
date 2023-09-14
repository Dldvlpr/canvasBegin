import { Position } from "./Position";
export declare class Square {
    point: Position;
    size: number;
    color: string;
    idOfSquare: number;
    ctx: CanvasRenderingContext2D;
    constructor(point: Position, size: number, color: string, idOfSquare: number, ctx: CanvasRenderingContext2D);
    getPoint(): Position;
    getIdOfSquare(): number;
    drawSquare(): void;
    getUpperLeftCorner(): Position;
    getUpperRightCorner(): string[];
    getLowerLeftCorner(): string[];
    getLowerRightCorner(): string[];
}
