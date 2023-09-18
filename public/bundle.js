/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Position.ts":
/*!*********************************!*\
  !*** ./src/classes/Position.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Position = void 0;
class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getx() {
        return this.x;
    }
    gety() {
        return this.y;
    }
    setx(valueOfX) {
        this.x = valueOfX;
    }
    sety(valueOfY) {
        this.y = valueOfY;
    }
    static isLeft(lineFirstPoint, lineSecondPoint, point) {
        const xp = point.x;
        const yp = point.y;
        const x1 = lineFirstPoint.x;
        const y1 = lineFirstPoint.y;
        const x2 = lineSecondPoint.x;
        const y2 = lineSecondPoint.y;
        const D = (x2 - x1) * (yp - y1) - (xp - x1) * (y2 - y1);
        return D <= 0;
    }
}
exports.Position = Position;


/***/ }),

/***/ "./src/classes/Square.ts":
/*!*******************************!*\
  !*** ./src/classes/Square.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Square = void 0;
const Position_1 = __webpack_require__(/*! ./Position */ "./src/classes/Position.ts");
class Square {
    constructor(position, size, color, id, ctx) {
        this.position = position;
        this.size = size;
        this.color = color;
        this.id = id;
        this.ctx = ctx;
        this.center = size / 2;
    }
    getPoint() {
        return this.position;
    }
    getId() {
        return this.id;
    }
    getCenter() {
        return this.center;
    }
    setRandomRgbColor() {
        let r = Math.floor(Math.random() * (255 + 1));
        let g = Math.floor(Math.random() * (255 + 1));
        let b = Math.floor(Math.random() * (255 + 1));
        this.color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
    setColorAfterSelected() {
        this.color = "yellow";
    }
    draw() {
        let x = this.position.x.valueOf();
        let y = this.position.y.valueOf();
        let size = this.size;
        this.ctx.fillStyle = this.color;
        return this.ctx.fillRect(x, y, size, size);
    }
    getUpperLeftCorner() {
        return this.position;
    }
    getUpperRightCorner() {
        return new Position_1.Position(this.position.x + this.size, this.position.y);
    }
    getLowerLeftCorner() {
        return new Position_1.Position(this.position.x, this.position.y + this.size);
    }
    getLowerRightCorner() {
        return new Position_1.Position(this.position.x + this.size, this.position.y + this.size);
    }
    compareMousePosition(actualMousePosition) {
    }
    isInside(mousePosition) {
        return !Position_1.Position.isLeft(this.getLowerRightCorner(), this.getLowerLeftCorner(), mousePosition) &&
            !Position_1.Position.isLeft(this.getLowerLeftCorner(), this.getUpperLeftCorner(), mousePosition) &&
            !Position_1.Position.isLeft(this.getUpperLeftCorner(), this.getUpperRightCorner(), mousePosition) &&
            !Position_1.Position.isLeft(this.getUpperRightCorner(), this.getLowerRightCorner(), mousePosition);
    }
}
exports.Square = Square;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***********************!*\
  !*** ./src/canvas.ts ***!
  \***********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Position_1 = __webpack_require__(/*! ./classes/Position */ "./src/classes/Position.ts");
const Square_1 = __webpack_require__(/*! ./classes/Square */ "./src/classes/Square.ts");
window.onload = function () {
    let squares = [];
    const canvas = document.getElementById('canvas');
    const canvasMaxX = document.getElementById('canvas').clientWidth;
    const canvasMaxY = document.getElementById('canvas').clientHeight;
    if (!canvas) {
        const h1 = document.createElement('h1');
        const textNode = document.createTextNode("Canvas is null");
        h1.appendChild(textNode);
        document.body.appendChild(h1);
        return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        const h1 = document.createElement('h1');
        const textNode = document.createTextNode("Canvas context is unavailable");
        h1.appendChild(textNode);
        document.body.appendChild(h1);
        return;
    }
    function getMousePos(canvas, evt) {
        const rect = canvas.getBoundingClientRect();
        return new Position_1.Position(evt.clientX - rect.left, evt.clientY - rect.top);
    }
    const size = 50;
    let idOfSquare = 0;
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            let x = i * size;
            let y = j * size;
            let color = (i + j) % 2 === 0 ? "black" : "red";
            idOfSquare++;
            let point = new Position_1.Position(x, y);
            let square = new Square_1.Square(point, size, color, idOfSquare, ctx);
            squares.push(square);
            square.draw();
        }
    }
    canvas.addEventListener("click", function (evt) {
        let mousePos = getMousePos(canvas, evt);
        console.log(mousePos);
        for (let square of squares) {
            if (square.isInside(mousePos)) {
                fetch(`http://localhost:3000/store-id/${square.id}`)
                    .then(response => console.log(response))
                    .then(data => console.log(data));
                square.setColorAfterSelected();
                square.draw();
            }
        }
    }, false);
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ckMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQy9CLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNqQjtTQUNKO0lBQ0wsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBR2QsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW50aXRsZWQvLi9zcmMvY2xhc3Nlcy9Qb3NpdGlvbi50cyIsIndlYnBhY2s6Ly91bnRpdGxlZC8uL3NyYy9jbGFzc2VzL1NxdWFyZS50cyIsIndlYnBhY2s6Ly91bnRpdGxlZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91bnRpdGxlZC8uL3NyYy9jYW52YXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBvc2l0aW9uIHtcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xuICAgIHB1YmxpYyB5OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cblxuICAgIGdldHgoKTogbnVtYmVyIHtcbiAgICAgICByZXR1cm4gdGhpcy54O1xuICAgIH1cblxuICAgIGdldHkoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueTtcbiAgICB9XG5cbiAgICBzZXR4KHZhbHVlT2ZYOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy54ID0gdmFsdWVPZlg7XG4gICAgfVxuXG4gICAgc2V0eSh2YWx1ZU9mWTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMueSA9IHZhbHVlT2ZZO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaXNMZWZ0KGxpbmVGaXJzdFBvaW50OiBQb3NpdGlvbiwgbGluZVNlY29uZFBvaW50OiBQb3NpdGlvbiwgcG9pbnQ6IFBvc2l0aW9uKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHhwID0gcG9pbnQueDtcbiAgICAgICAgY29uc3QgeXAgPSBwb2ludC55O1xuXG4gICAgICAgIGNvbnN0IHgxID0gbGluZUZpcnN0UG9pbnQueDtcbiAgICAgICAgY29uc3QgeTEgPSBsaW5lRmlyc3RQb2ludC55O1xuXG4gICAgICAgIGNvbnN0IHgyID0gbGluZVNlY29uZFBvaW50Lng7XG4gICAgICAgIGNvbnN0IHkyID0gbGluZVNlY29uZFBvaW50Lnk7XG5cbiAgICAgICAgY29uc3QgRCA9ICh4MiAtIHgxKSAqICh5cCAtIHkxKSAtICh4cCAtIHgxKSAqICh5MiAtIHkxKTtcblxuICAgICAgICByZXR1cm4gRCA8PSAwO1xuICAgIH1cbn0iLCJpbXBvcnQge1Bvc2l0aW9ufSBmcm9tIFwiLi9Qb3NpdGlvblwiO1xuZXhwb3J0IGNsYXNzIFNxdWFyZSB7XG4gICAgcHVibGljIHBvc2l0aW9uOiBQb3NpdGlvbjtcbiAgICBwdWJsaWMgc2l6ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwdWJsaWMgY2VudGVyOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9zaXRpb24sIHNpemU6IG51bWJlciwgY29sb3I6IHN0cmluZywgaWQ6bnVtYmVyLCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBzaXplLzI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBvaW50KCk6IFBvc2l0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIGdldElkKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDZW50ZXIoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2VudGVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRSYW5kb21SZ2JDb2xvcigpOiB2b2lkIHtcbiAgICAgICAgbGV0IHIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKDI1NSArIDEpKTtcbiAgICAgICAgbGV0IGcgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKDI1NSArIDEpKTtcbiAgICAgICAgbGV0IGIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKDI1NSArIDEpKTtcblxuICAgICAgICB0aGlzLmNvbG9yID0gJ3JnYignICsgciArICcsICcgKyBnICsgJywgJyArIGIgKyAnKSc7XG4gICAgfVxuXG4gICAgcHVibGljIHNldENvbG9yQWZ0ZXJTZWxlY3RlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IFwieWVsbG93XCI7XG4gICAgfVxuXG4gICAgcHVibGljIGRyYXcoKTogdm9pZCB7XG4gICAgICAgIGxldCB4OiBudW1iZXIgPSB0aGlzLnBvc2l0aW9uLngudmFsdWVPZigpO1xuICAgICAgICBsZXQgeTogbnVtYmVyID0gdGhpcy5wb3NpdGlvbi55LnZhbHVlT2YoKTtcbiAgICAgICAgbGV0IHNpemU6IG51bWJlciA9IHRoaXMuc2l6ZTtcblxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmN0eC5maWxsUmVjdCh4LCB5LCBzaXplLCBzaXplKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VXBwZXJMZWZ0Q29ybmVyKCk6IFBvc2l0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIGdldFVwcGVyUmlnaHRDb3JuZXIoKTogUG9zaXRpb257XG4gICAgICAgIHJldHVybiBuZXcgUG9zaXRpb24odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMb3dlckxlZnRDb3JuZXIoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUG9zaXRpb24odGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMb3dlclJpZ2h0Q29ybmVyKCkge1xuICAgICAgICByZXR1cm4gbmV3IFBvc2l0aW9uKCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUsICB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUpXG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBhcmVNb3VzZVBvc2l0aW9uKGFjdHVhbE1vdXNlUG9zaXRpb24pIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBpc0luc2lkZShtb3VzZVBvc2l0aW9uOiBQb3NpdGlvbik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIVBvc2l0aW9uLmlzTGVmdCh0aGlzLmdldExvd2VyUmlnaHRDb3JuZXIoKSwgdGhpcy5nZXRMb3dlckxlZnRDb3JuZXIoKSwgbW91c2VQb3NpdGlvbikgJiZcbiAgICAgICAgICAgICFQb3NpdGlvbi5pc0xlZnQodGhpcy5nZXRMb3dlckxlZnRDb3JuZXIoKSwgdGhpcy5nZXRVcHBlckxlZnRDb3JuZXIoKSwgbW91c2VQb3NpdGlvbikgJiZcbiAgICAgICAgICAgICFQb3NpdGlvbi5pc0xlZnQodGhpcy5nZXRVcHBlckxlZnRDb3JuZXIoKSwgdGhpcy5nZXRVcHBlclJpZ2h0Q29ybmVyKCksIG1vdXNlUG9zaXRpb24pICYmXG4gICAgICAgICAgICAhUG9zaXRpb24uaXNMZWZ0KHRoaXMuZ2V0VXBwZXJSaWdodENvcm5lcigpLCB0aGlzLmdldExvd2VyUmlnaHRDb3JuZXIoKSwgbW91c2VQb3NpdGlvbik7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7UG9zaXRpb259IGZyb20gXCIuL2NsYXNzZXMvUG9zaXRpb25cIjtcbmltcG9ydCB7U3F1YXJlfSBmcm9tIFwiLi9jbGFzc2VzL1NxdWFyZVwiO1xuXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNxdWFyZXM6IFNxdWFyZVtdID0gW107XG5cblxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw7XG4gICAgY29uc3QgY2FudmFzTWF4WDogbnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpLmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IGNhbnZhc01heFk6IG51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKS5jbGllbnRIZWlnaHQ7XG5cbiAgICBpZiAoIWNhbnZhcykge1xuICAgICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDYW52YXMgaXMgbnVsbFwiKTtcbiAgICAgICAgaDEuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGgxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgaWYgKCFjdHgpIHtcbiAgICAgICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ2FudmFzIGNvbnRleHQgaXMgdW5hdmFpbGFibGVcIik7XG4gICAgICAgIGgxLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoMSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGdldE1vdXNlUG9zKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGV2dDogTW91c2VFdmVudCk6IFBvc2l0aW9uIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQb3NpdGlvbihldnQuY2xpZW50WCAtIHJlY3QubGVmdCwgZXZ0LmNsaWVudFkgLSByZWN0LnRvcCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2l6ZTogbnVtYmVyID0gNTA7XG4gICAgbGV0IGlkT2ZTcXVhcmUgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAyOyBqKyspIHtcbiAgICAgICAgICAgIGxldCB4ID0gaSAqIHNpemU7XG4gICAgICAgICAgICBsZXQgeSA9IGogKiBzaXplO1xuICAgICAgICAgICAgbGV0IGNvbG9yOiBzdHJpbmcgPSAoaSArIGopICUgMiA9PT0gMCA/IFwiYmxhY2tcIiA6IFwicmVkXCI7XG4gICAgICAgICAgICBpZE9mU3F1YXJlKys7XG5cbiAgICAgICAgICAgIGxldCBwb2ludDogUG9zaXRpb24gPSBuZXcgUG9zaXRpb24oeCwgeSk7XG4gICAgICAgICAgICBsZXQgc3F1YXJlOiBTcXVhcmUgPSBuZXcgU3F1YXJlKHBvaW50LCBzaXplLCBjb2xvciwgaWRPZlNxdWFyZSwgY3R4KTtcblxuICAgICAgICAgICAgc3F1YXJlcy5wdXNoKHNxdWFyZSk7XG4gICAgICAgICAgICBzcXVhcmUuZHJhdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIGxldCBtb3VzZVBvcyA9IGdldE1vdXNlUG9zKGNhbnZhcywgZXZ0KTtcbiAgICAgICAgY29uc29sZS5sb2cobW91c2VQb3MpO1xuXG4gICAgICAgIGZvciAobGV0IHNxdWFyZSBvZiBzcXVhcmVzKSB7XG4gICAgICAgICAgICBpZiAoc3F1YXJlLmlzSW5zaWRlKG1vdXNlUG9zKSkge1xuICAgICAgICAgICAgICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvc3RvcmUtaWQvJHtzcXVhcmUuaWR9YClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKTtcblxuICAgICAgICAgICAgICAgIHNxdWFyZS5zZXRDb2xvckFmdGVyU2VsZWN0ZWQoKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuZHJhdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgZmFsc2UpO1xuXG5cbn07XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==