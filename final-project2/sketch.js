let dotDistance = 5;
let dotSize = 5;
let brushTime = 1;
let sizeH = 3;
let sizeW = 3;
let points = [];
let bounds = [];
let font;
let fontChinese;
let fontsize = 130;
let opacityValue = 9;
let brightness = 0;
let grayScale = true;
let dotColor = {
    H: 30,
    Alpha: 0.5,
};
let mouseTarget = null;

//for use if a user wants to input their own words
let userWords = [];

// words to be displayed on the screen if the user doesn't input anything
let words = [
    "jyaleen",
    "wu",
    "ui/ux",
    "design",
    "boston",
    "jelly",
    "soup",
    "bread",
    "pigeon",
    "fat cat",
    "home",
    "juice",
    "candy",
    "sohee",
    "sweets",
    "world",
    "universe",
    "light",
    "dark",
    "cool",
    "epic",
    "butter",
    "eggs",
    "rock",
    "pencil",
    "matcha",
    "!",
    "*",
    "⁂",
    "‽",
    "#",
    "∞",
    "&",
    "↵",
    "△",
    "○",
];

// Chinese characters need to go in a separate array because they use a different typeface
const wordsChinese = [
    "吴",
    "嘉",
    "琳",
    "吴嘉琳",
    "你好",
    "广州",
    "台湾",
    "麻州",
    "波士顿",
    "蓝瘦香菇",
]

let string = words[0];


// loads the fonts
function preload() {
    // fonts from A2Z Foundry and Google Fonts
    font = loadFont("A2Z-Faucet-Light.otf");
    fontChinese = loadFont("NotoSansSC-VariableFont_wght.ttf");
}

// initializes the canvas, sets color modes, draws initial words, and sets intervals for changing words.
function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 255, 255, 255, 1);
    drawWord();
    setInterval(changeWords, 650);
    cursor(CROSS);
    noLoop();
}

let frame = 0;
let framelength = 5;

// updates the frame and displays instructions on the screen.
function draw() {
    if (frame === 0) {
        frame--;
        helpButton = select('#help-button');
        helpButton.elt.style.display = 'none';
        textAlign(CENTER);
        textSize(30);
        fill(0, 0, 50, 0.5);
        text("DIRECTIONS", width / 2, height / 2 - 260);
        fill(0, 0, 50, 0.3);
        text("move your mouse around the screen to change the visuals", width / 2, height / 2 - 200);
        text("the x axis controls how dispersed the dots are, and", width / 2, height / 2 - 150);
        text("the y axis controls how dark the dots are", width / 2, height / 2 - 100);
        text("press 1-9 on your keyboard to change the opacity", width / 2, height / 2 - 50);
        text("if you’d like, you may enter your own list of words below", width / 2, height / 2 + 50);
        text("otherwise, the words will come from a pre-generated list", width / 2, height / 2 + 100);
        text("use at least 10 words and separate each word with a comma", width / 2, height / 2 + 150);
        describeElement('userInput', 'A yellow circle in the top-left corner.');
        userInput = select('#user-input');
        userInputLabel = select('#user-input-label');
        submitButton = select('#submit-button');
        userInputLabel.position(width / 2 - (userInput.width + submitButton.width) / 2, height / 2 + 200);
        userInput.position(width / 2 - (userInput.width + submitButton.width) / 2, height / 2 + 200);
        submitButton.position(userInput.x + userInput.width, height / 2 + 200);
        submitButton.mousePressed(submitUserWords);
        text("double click screen to start", width / 2, height / 2 + 300);
        textAlign(LEFT);
        return;
    }

    // get rid of frames stacking on top of each other:
    // https://stackoverflow.com/questions/41337271/p5-js-old-frames-not-deleting
    background(255, 0, 255, 0.15);

    // push pop translate example:
    // https://editor.p5js.org/js6450/sketches/7UrAl0ISj
    push();
    translate(
        -bounds.x * sizeW - (bounds.w / 2) * sizeW + windowWidth / 2,
        -bounds.y * sizeH + windowHeight / 5 + 180
    );
    drawPoint(points);
    pop();
    drawLeft();
    drawHelp();
}

// splits the user input into an array of words
function submitUserWords() {
    userText = userInput.value();
    userWords = userText.split(", ");
    words = userWords;
    doubleClicked();
}
