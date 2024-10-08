/*
    The glaze options and their price adaptations
*/
let allGlaze = [
    {
        glazing: 'Keep original',
        priceAdaptation: 0,
    },
    {
        glazing: 'Sugar milk',
        priceAdaptation: 0,
    },
    {
        glazing: 'Vanilla milk',
        priceAdaptation: 0.5,
    },
    {
        glazing: 'Double chocolate',
        priceAdaptation: 1.5,
    }
];

/*
    The pack size options and their price adaptations
*/
let allPack = [
    {
        packSize: 1,
        priceAdaptation: 1,
    },
    {
        packSize: 3,
        priceAdaptation: 3,
    },
    {
        packSize: 6,
        priceAdaptation: 5,
    },
    {
        packSize: 12,
        priceAdaptation: 10,
    }
];

var glazeSelect = document.querySelector("#glazingOptions");

for (let i = 0; i < allGlaze.length; i++) {
    let option = allGlaze[i];
    let element = document.createElement("option");
    element.text = option.glazing;
    element.value = option.priceAdaptation;
    glazeSelect.add(element);
}

var packSelect = document.querySelector("#packOptions");

for (let i = 0; i < allPack.length; i++) {
    let option = allPack[i];
    let element = document.createElement("option");
    element.text = option.packSize;
    element.value = option.priceAdaptation;
    packSelect.add(element);
}

let basePrice = 2.49;
let price = basePrice;
let glazePrice = allGlaze[0].priceAdaptation;
let packPrice = allPack[0].priceAdaptation;

glazeSelect.addEventListener('change', onGlazeSelectValueChange);
packSelect.addEventListener('change', onPackSelectValueChange);

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