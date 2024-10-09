let glazeSelect = document.querySelector("#glazingOptions");

for (const glaze in allGlaze) {
    console.log(glaze);
    let element = document.createElement("option");
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