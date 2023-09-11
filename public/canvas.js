window.onload = function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    let size = 50

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            ctx.fillStyle = (i + j) % 2 === 0 ? "black" : "red";
            ctx.fillRect(j * size,  i * size, size, size);
        }
    }
};

