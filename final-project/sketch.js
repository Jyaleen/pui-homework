function setup() {
    let myCanvas = createCanvas(300, 300);
    myCanvas.parent('myContainer');
    // colorMode(HSB);
    colorMode(RGB);
    angleMode(DEGREES);
}

function draw() {

    let leftX = 150;
    let leftY = 190;
    let leftAngle = atan2(mouseY - leftY, mouseX - leftX);

    push();
    translate(leftX, leftY);
    fill(255);
    ellipse(0, 0, 50, 50);
    rotate(leftAngle);
    fill(0);
    ellipse(12.5, 0, 25, 25);
    pop();

    let rightX = 250;
    let rightY = 190;
    let rightAngle = atan2(mouseY - rightY, mouseX - rightX);

    push();
    translate(rightX, rightY);
    fill(255);
    ellipse(0, 0, 50, 50);
    rotate(rightAngle);
    fill(0);
    ellipse(12.5, 0, 25, 25);
    pop();
}