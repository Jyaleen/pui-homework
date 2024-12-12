let modal = null
let modalButton, modalTitle, modalDescription;

// create the help modal
function drawHelp() {
    modal = select('.modal-wrapper')
    modalButton = select('#modal-button')
    modalTitle = select('#modal-title')
    modalDescription = select('#modal-description')
    helpButton = select('#help-button');
    helpButton.elt.style.display = 'flex';

    helpButton.position(40, yDistance * 10);
    helpButton.mousePressed(showModal);

    modalButton.mousePressed(modalButtonClicked)
    updateModal(`Move your mouse around the screen to change the visuals.<br><br>
The x axis controls how dispersed the dots are. <br><br> The y axis controls how dark the dots are. <br><br> Press 1-9 on your keyboard to change the opacity.<br><br>Press space on your keyboard to change between gray and color. <br><br>`)
}

// what happens when the "ok" button in the modal is clicked
function modalButtonClicked() {
    hideModal()
}

// update the modal's description with the given text
function updateModal(description) {
    modalDescription.elt.innerHTML = description;
}

// show the modal
function showModal() {
    modal.elt.style.display = 'flex';
}

// hide the modal
function hideModal() {
    modal.elt.style.display = 'none';
}
