function mousePressed() {
    loop();
}

//draw the word from the word array
function drawWord() {
    points = font.textToPoints(string, 100, 100, fontsize, {
        sampleFactor: 0.2,
        simplifyThreshold: 0,
    });
    bounds = font.textBounds(string, 100, 100, fontsize);
}

//draw the word from the Chinese word array
function drawWordChinese() {
    points = fontChinese.textToPoints(string, 100, 100, fontsize, {
        sampleFactor: 0.2,
        simplifyThreshold: 0,
    });
    bounds = fontChinese.textBounds(string, 100, 100, fontsize);
}

//change the words on the screen based on the arrays of english and chinese words
function changeWords() {
    string = words[int(random(0, words.length))];
    loadFont("A2Z-Faucet-Light.otf");
    drawWord();
    string = wordsChinese[int(random(0, words.length - 1))];
    drawWordChinese();
}

// what happens when the user presses 1-9 (keys 48-57) to change the opacity
function keyPressed() {
    if (keyCode > 48 && keyCode <= 57) {
        if (grayScale) {
            opacityValue = keyCode - 48;
            saturation = 255 - (keyCode - 48 - 1) * 28;
            brightness = 255 - (keyCode - 48 - 1) * 28;
        }
        else {
            opacityValue = keyCode - 48;
            saturation = 255 - (keyCode - 48 - 1) * 28;
            brightness = 255 - (keyCode - 48 - 1) * 28;
        }
    }
    else if (keyCode == 32) {
        // space
        grayScale = !grayScale;
    }
    // if (grayscale) {
    //     if (keyCode > 48 && keyCode <= 57) {
    //         opacityValue = keyCode - 48;
    //         saturation = 255 - (keyCode - 48 - 1) * 28;
    //         brightness = 255 - (keyCode - 48 - 1) * 28;
    //     }
    // }
    // if (!grayscale) {
    //     if (keyCode > 48 && keyCode <= 57) {
    //         saturation = 255 - (keyCode - 48 - 1) * 28;
    //         colorValue = keyCode - 48;
    //     }
    // }
    // if (keyCode == 32) {
    //     // space
    //     grayScale = !grayScale;
    // }
}

// what happens when the user moves the mouse around the screen
function mouseMoved() {
    dotDistance = mouseX / 50;
    sliderX && sliderX.value(dotDistance);

    dotSize = mouseY / 50;
    sliderY && sliderY.value(dotSize);
}