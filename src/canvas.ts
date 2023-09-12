window.onload = function() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement | null;

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

    const size = 50;

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            ctx.fillStyle = (i + j) % 2 === 0 ? "black" : "red";
            ctx.fillRect(j * size,  i * size, size, size);
        }
    }
};
