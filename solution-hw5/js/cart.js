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
    cartPriceElement.innerText = "$ " + total.toFixed(2);

}

/*
    Removes the given roll from the DOM and deletes it from the cart, refreshing the total price
*/
function removeRoll(roll) {
    roll.element.remove();
    cart.delete(roll);
    getTotalPrice();
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