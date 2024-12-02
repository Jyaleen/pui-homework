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
let dotColor = {
    Alpha: 0.5,
};
let mouseTarget = null;

const words = [
    "jyaleen",
    "wu",
    "product",
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

const wordsChinese = [
    "吴",
    "嘉",
    "琳",
    "你好",
    "广州",
    "台湾",
    "麻州",
]

let string = words[0];


function preload() {
    // fonts from A2Z Foundry and Google Fonts
    font = loadFont("A2Z-Faucet-Light.otf");
    fontChinese = loadFont("NotoSansSC-VariableFont_wght.ttf");
}

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

function draw() {
    if (frame === 0) {
        frame--;
        textAlign(CENTER);
        textSize(30);
        fill(0, 0, 50, 0.3);
        text("move mouse around screen to change", width / 2, height / 2 - 30);
        text("click screen to start", width / 2, height / 2 + 30);
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
}
