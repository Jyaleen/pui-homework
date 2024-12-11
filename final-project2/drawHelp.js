let modal = null
let modalButton, modalTitle, modalDescription;

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

function modalButtonClicked() {
    hideModal()
}

function updateModal(description) {
    modalDescription.elt.innerHTML = description;
}

function showModal() {
    modal.elt.style.display = 'flex';
}

function hideModal() {
    modal.elt.style.display = 'none';
}
