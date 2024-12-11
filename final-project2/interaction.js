// animation starts when mouse is double clicked
function doubleClicked() {
    userInputLabel = select('#user-input-label');
    userInputLabel.elt.style.display = 'none';
    userInput = select('#user-input');
    userInput.elt.style.display = 'none';
    userInput.remove();
    submitButton.remove();
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

// if user didn't input words, change the words on the screen based on the 
// arrays of english and chinese words. otherwise, change the words on the 
// screen based on the user's input
function changeWords() {
    if (userWords.length > 0) {
        string = words[int(random(0, words.length))];
        loadFont("A2Z-Faucet-Light.otf");
        drawWord();
    }
    else {
        string = words[int(random(0, words.length))];
        loadFont("A2Z-Faucet-Light.otf");
        drawWord();
        string = wordsChinese[int(random(0, words.length - 1))];
        drawWordChinese();
    }
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
}

// what happens when the user moves the mouse around the screen
function mouseMoved() {
    dotDistance = mouseX / 50;
    sliderX && sliderX.value(dotDistance);

    dotSize = mouseY / 50;
    sliderY && sliderY.value(dotSize);
}