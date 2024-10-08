
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");
const selectedRoll = rolls[rollType];

/*
    Populate the elements on the page with the specific cinnamon roll selection info
*/
const headerElement = document.querySelector('#roll-header-text');
headerElement.innerText = rollType + ' Cinnamon Roll';

const rollImage = document.querySelector('#roll-detail-img');
rollImage.src = "../assets/products/" + selectedRoll.imageFile;

const rollPrice = document.querySelector('#roll-price');
rollPrice.innerText = "$ " + selectedRoll["basePrice"];
