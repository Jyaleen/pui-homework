let sliderX;
let sliderY;
const yDistance = 20;

//draw the UI on the left side of the screen
function drawLeft() {
    //create the sliders that show where the user's mouse is on the screen
    textSize(15);
    textStyle(BOLD);
    text("mouse location", 5, yDistance * 1.8);
    textStyle(NORMAL);
    fill(0, 0, 50, 0.15);
    text("close", 5, yDistance * 3);
    text("light", 5, yDistance * 4);
    text("far", 160, yDistance * 3);
    text("dark", 160, yDistance * 4);

    sliderX = createSlider(0, 16, dotDistance, 0);
    sliderX.position(55, yDistance * 3);

    sliderY = createSlider(0, 16, dotSize, 0);
    sliderY.position(55, yDistance * 4);

    sliderX.style("width", "100px");
    sliderY.style("width", "100px");
    sliderX.addClass("slider");
    sliderY.addClass("slider");

    //write the text on the screen that says what the color value is and the direction to move your mouse around the screen

    textSize(15);
    textStyle(BOLD);
    text("currect opacity: " + opacityValue, 5, yDistance * 7);
    textStyle(NORMAL);
    fill(0, 0, 50, 0.15);
    text("press 1-9 on keyboard to change", 5, yDistance * 8.2);
}