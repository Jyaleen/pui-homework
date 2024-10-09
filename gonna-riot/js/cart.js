function createRoll(roll) {
    // make a clone of the notecard template
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);

    // connect this clone to our notecard.element
    // from this point we only need to refer to notecard.element
    roll.element = clone.querySelector('.item');

    const btnRemove = roll.element.querySelector('.remove');
    console.log(btnRemove);
    btnRemove.addEventListener('click', () => {
        deleteNote(notecard);
    });

    // add the notecard clone to the DOM
    // find the notecard parent (#notecard-list) and add our notecard as its child
    const cartElement = document.querySelector('#item-list');
    cartElement.appendChild(roll.element);

    // populate the notecard clone with the actual notecard content
    updateRoll(roll);
}

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
    rollPriceElement.innerText = "$ " + rollPrice;

    getTotalPrice();
}

function getPrice(roll) {
    const glazePrice = allGlaze[roll.glazing];
    const packPrice = allPack[roll.size];
    let price = ((roll.basePrice + glazePrice) * packPrice).toFixed(2); //source: https://stackoverflow.com/questions/3163070/javascript-displaying-a-float-to-2-decimal-places
    return price;
}

function getTotalPrice() {
    let total = 0;
    for (const roll of cart) {
        total = total + getPrice(roll);
    }

    displayTotalPrice(total)
}

function displayTotalPrice(total) {
    const cartPriceElement = document.querySelector("#total-price");
    cartPriceElement.innerText = "$ " + total.toFixed(2);
}

function removeRoll(roll) {
    roll.element.remove();
    cart.delete(roll);
    getTotalPrice();
}

const roll1 = new Roll("Original", "Sugar Milk", 1, 2.49);
const roll2 = new Roll("Walnut", "Vanilla Milk", 12, 3.49);
const roll3 = new Roll("Raisin", "Sugar Milk", 3, 2.99);
const roll4 = new Roll("Apple", "Keep Original", 3, 3.49);

