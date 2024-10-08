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
const cart = [];

/*
    The glaze options and their price adaptations
*/
const allGlaze = {
    'Keep original': 0,
    'Sugar milk': 0,
    'Vanilla milk': 0.5,
    'Double chocolate': 1.5,
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

var glazeSelect = document.querySelector("#glazingOptions");

for (const glaze in allGlaze) {
    let element = document.createElement("option");
    element.text = glaze;
    element.value = allGlaze[glaze];
    glazeSelect.add(element);
}

var packSelect = document.querySelector("#packOptions");

for (const pack in allPack) {
    let element = document.createElement("option");
    element.text = pack;
    element.value = allPack[pack];
    packSelect.add(element);
}

let basePrice = selectedRoll.basePrice;
let price = basePrice;
let glazePrice = allGlaze[0];
let packPrice = allPack[0];


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
    packPrice = this.value;
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