class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");
const selectedRoll = rolls[rollType];

/*
    The glaze options and their price adaptations
*/

const allGlaze = {
    'Keep original': 0,
    'Sugar milk': 0,
    'Vanilla milk': 0.5,
    'Double chocolate': 1.5,
};
const allPack = {
    1: 1,
    3: 3,
    6: 5,
    12: 10,
};

/*
    The pack size options and their price adaptations
*/


let glazeSelect = document.querySelector("#glazingOptions");

for (const glaze in allGlaze) {
    var element = document.createElement("option");
    element.text = glaze;
    element.value = allGlaze[glaze];
    glazeSelect.add(element);
}

let packSelect = document.querySelector("#packOptions");

for (const pack in allPack) {
    console.log(pack);
    let element = document.createElement("option");
    element.text = pack;
    element.value = allPack[pack];
    packSelect.add(element);
}

let basePrice = selectedRoll.basePrice;
let price = basePrice;
let glazePrice = Object.values(allGlaze)[0]; //https://stackoverflow.com/questions/983267/how-to-access-the-first-property-of-a-javascript-object
let packPrice = Object.values(allPack)[0];

/*
    Populate the elements on the page with the specific cinnamon roll selection info
*/
const headerElement = document.querySelector('#roll-header-text');
headerElement.innerText = rollType + ' Cinnamon Roll';

const rollImage = document.querySelector('#roll-detail-img');
rollImage.src = "../assets/products/" + selectedRoll.imageFile;

const rollPrice = document.querySelector('#roll-price');
rollPrice.innerText = "$ " + basePrice;

var cartButton = document.querySelector('#add-to-cart-btn');

/*
    Event listeners for glaze/pack size select change, cart button click
*/
glazeSelect.addEventListener('change', onGlazeSelectValueChange);
packSelect.addEventListener('change', onPackSelectValueChange);
cartButton.addEventListener('click', onAddToCart);

/*
    Starts the calculation process when the glaze select value changes
*/
function onGlazeSelectValueChange() {
    glazePrice = parseFloat(this.value);
    calculatePrice(glazePrice, packPrice);
}

/*
    Starts the calculation process when the pack size select value changes
*/
function onPackSelectValueChange() {
    packPrice = parseFloat(this.value);
    calculatePrice(glazePrice, packPrice);
}

/*
    Calculates the price of a given glaze and pack size combination
    Parameters:
        - gl: glaze
        - pa: price adaptation
*/
function calculatePrice(gl, pa) {
    price = ((basePrice + gl) * pa).toFixed(2); //source: https://stackoverflow.com/questions/3163070/javascript-displaying-a-float-to-2-decimal-places
    displayPrice();
}

/*
    Displays the global price variable
*/
function displayPrice() {
    let priceElement = document.querySelector('#price');
    priceElement.innerText = "$ " + price;
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

    const newCartItem = new Roll(
        rollType,
        glazeText,
        packText,
        basePrice
    );

    cart.push(newCartItem);
    console.log(cart);
}

const cart = new Set();

function updateRoll(roll) {
    const rollImageElement = roll.element.querySelector('.item-thumbnail');
    const rollTypeElement = roll.element.querySelector('#roll-type');
    const rollGlazingElement = roll.element.querySelector('#glaze-type');
    const rollPackElement = roll.element.querySelector('#pack-size');
    const rollPriceElement = roll.element.querySelector('.item-price');

    rollImageElement.src = '../assets/products/' + rolls[roll.type]["imageFile"];
    rollImageElement.alt = rolls[roll.type]["alt"];
    rollTypeElement.innerText = roll.type + " Cinnamon Roll";
    rollGlazingElement.innerText = "Glazing: " + roll.glazing;
    rollPackElement.innerText = "Pack Size: " + roll.size;
}

function createRoll(roll) {
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector('.item');

    const btnRemove = roll.element.querySelector(".remove");
    btnRemove.addEventListener('click', () => {
        removeRoll(roll);
    });

    const cartElement = document.querySelector("#item-list");
    cartElement.prepend(roll.element);

    updateRoll(roll);
}

const roll1 = new Roll("Original", "Sugar Milk", 1, 2.49);
const roll2 = new Roll("Walnut", "Vanilla Milk", 12, 3.49);
const roll3 = new Roll("Raisin", "Sugar Milk", 3, 2.99);
const roll4 = new Roll("Apple", "Keep Original", 3, 3.49);

cart.add(roll1);
cart.add(roll2);
cart.add(roll3);
cart.add(roll4);

for (const roll of cart) {
    createRoll(roll);
}