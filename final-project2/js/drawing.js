// draw dots around the given x,y coordinates using random Gaussian distribution for position and size
function brush(x, y) {
    if (grayScale) {
        dotColor.S = 0;
        dotColor.B = brightness;
    } else {
        dotColor.H = int(random(200, 255));
        dotColor.S = saturation;
        dotColor.B = brightness;
    }
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

// takes an array of points and draws them
function drawPoint(points) {
    for (let i = 0; i < points.length; i++) {
        brush(sizeW * points[i].x, sizeH * points[i].y);
    }
}