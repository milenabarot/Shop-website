const clickButton = function (buttonType) {
    console.log(`The ${buttonType} button has been clicked`);
}

/*
const hamburgerMenu = function (event) {
    const blob = event.target;
    console.log(blob);
    if (blob.style.margin === '10px') {
        blob.style.margin = '0px';
    } else {
        blob.style.margin = '10px';
    }


}
*/

const onHamburgerButtonClick = function () {
    const hamburgerMenu = document.querySelector('#hamburger-menu');
    if (hamburgerMenu.style.visibility === 'hidden') {
        hamburgerMenu.style.visibility = 'visible';
    } else {
        hamburgerMenu.style.visibility = 'hidden';
    }
    const hamburgerButton = document.querySelector('#hamburger-button');
    if (hamburgerButton.className === 'hamburger-button') {
        hamburgerButton.className = 'hamburger-button hamburger-is-active';
    } else {
        hamburgerButton.className = 'hamburger-button';
    }
    console.log(hamburgerButton);
}