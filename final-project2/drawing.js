function brush(x, y) {
    dotColor.S = 0;
    dotColor.B = brightness;
    const { H, S, B, Alpha } = dotColor;

    stroke(H, S, 30, Alpha);
    fill(H, S, B, Alpha);

    for (let i = 0; i < brushTime; i++) {
        let posX = randomGaussian(0, dotDistance);
        let posY = randomGaussian(0, dotDistance);
        let size = randomGaussian(5, dotSize);
        ellipse(posX + x, posY + y, size, size);
    }
}

function drawPoint(points) {
    if (points) {
        for (let i = 0; i < points.length; i++) {
            brush(sizeW * points[i].x, sizeH * points[i].y);
        }
    }
}