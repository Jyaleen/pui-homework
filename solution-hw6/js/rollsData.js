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

/*
    The glaze options and their price adaptations
*/
const allGlaze = {
    'Keep Original': 0,
    'Sugar Milk': 0,
    'Vanilla Milk': 0.5,
    'Double Chocolate': 1.5,
};

/*
    The pack size options and their price adaptations
*/
const allPack = {
    1: 1,
    3: 3,
    6: 5,
    12: 10,
};

let cart;

if (cart === undefined) {
    cart = new Set();
}

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

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

    const newCartItem = addNewRoll(
        rollType,
        glazeText,
        packText,
        basePrice
    );

    saveToLocalStorage();
}

/*
    Creates a new roll and adds it to the DOM
*/
function createRoll(roll) {
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector('.cart-entry');

    const btnRemove = roll.element.querySelector('.remove');
    console.log(btnRemove);
    btnRemove.addEventListener('click', () => {
        removeRoll(roll);
    });

    const cartElement = document.querySelector('#item-list');
    cartElement.prepend(roll.element);

    updateRoll(roll);
}

/*
    Updates the DOM element with the given roll's information
*/
function updateRoll(roll) {
    const rollImageElement = roll.element.querySelector('.item-thumbnail');
    const rollTypeElement = roll.element.querySelector('#roll-type');
    const rollGlazingElement = roll.element.querySelector('#glaze-type');
    const rollPackElement = roll.element.querySelector('#pack-size');
    const rollPriceElement = roll.element.querySelector('.item-price');

    rollImageElement.src = '../assets/products/' + rolls[roll.type]["imageFile"]; ////https://stackoverflow.com/questions/983267/how-to-access-the-first-property-of-a-javascript-object
    rollTypeElement.innerText = roll.type + " Cinnamon Roll";
    rollGlazingElement.innerText = "Glazing: " + roll.glazing;
    rollPackElement.innerText = "Pack Size: " + roll.size;

    const rollPrice = getPrice(roll);
    rollPriceElement.innerText = "$ " + rollPrice.toFixed(2);

    getTotalPrice();
}

/*
    Gets the price of the single given roll
*/
function getPrice(roll) {
    const glazePrice = allGlaze[roll.glazing];
    const packPrice = allPack[roll.size];
    let price = ((roll.basePrice + glazePrice) * packPrice).toFixed(2); //source: https://stackoverflow.com/questions/3163070/javascript-displaying-a-float-to-2-decimal-places
    return parseFloat(price);
}

/*
    Gets the total price of all rolls
*/
function getTotalPrice() {
    let total = 0;
    for (const roll of cart) {
        total += getPrice(roll);
    }

    displayTotalPrice(total);
}

/*
    Displays the given price
*/
function displayTotalPrice(total) {
    const cartPriceElement = document.querySelector("#total-price");
    if (cartPriceElement != null) {
        cartPriceElement.innerText = "$ " + total.toFixed(2);
    }
}

/*
    Removes the given roll from the DOM and deletes it from the cart, refreshing the total price
*/
function removeRoll(roll) {
    roll.element.remove();
    cart.delete(roll);
    getTotalPrice();
    saveToLocalStorage();
}

/*
    Adds a new roll to the cart with the specified parameters
*/
function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.add(roll);
    return roll;
}

/*
    Saves the cart to local storage
*/
function saveToLocalStorage() {
    const cartArray = Array.from(cart);
    const cartArrayString = JSON.stringify(cartArray);
    localStorage.setItem('storedCart', cartArrayString);
}

/*
    Retrives the cart from local storage
*/
function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('storedCart');
    const cartArray = JSON.parse(cartArrayString);
    for (const rollData of cartArray) {
        addNewRoll(rollData.type, rollData.glazing, rollData.size, rollData.basePrice);
    };
    getTotalPrice();
}

if (localStorage.getItem('storedCart') !== null) {
    retrieveFromLocalStorage();
}

for (const roll of cart) {
    createRoll(roll);
}
