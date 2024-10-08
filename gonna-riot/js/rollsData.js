const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }
};

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}
const cart = [];

/*
    Adds the roll (with glaze and pack size specifications) to the cart
*/
function onAddToCart() {
    const thisGlaze = document.querySelector('#glazingOptions');
    const glazeValue = thisGlaze.options[thisGlaze.selectedIndex];

    const thisPack = document.querySelector('#packOptions');
    const packValue = thisPack.options[thisPack.selectedIndex];

    const glazeText = glazeValue.text;
    const packText = packValue.text;

    const newCartItem = new Roll(
        rollType,
        glazeText,
        packText,
        basePrice
    );

    cart.push(newCartItem);
    console.log(cart);
}