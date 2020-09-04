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
    console.log(hamburgerMenu.classList);
    hamburgerMenu.classList.toggle("hamburger-menu-is-active");

    // Above toggle code replaces below if statement 
    // if (hamburgerMenu.className === 'hamburger-menu') {
    //     hamburgerMenu.className = 'hamburger-menu hamburger-menu-is-active';
    // } else {
    //     hamburgerMenu.className = 'hamburger-menu';
    // }

    const hamburgerButton = document.querySelector('#hamburger-button');
    console.log(hamburgerButton.classList);
    hamburgerButton.classList.toggle("hamburger-is-active");


    // Above toggle code replaces below if statement 
    // if (hamburgerButton.className === 'hamburger-button') {
    //     hamburgerButton.className = 'hamburger-button hamburger-is-active';
    // } else {
    //     hamburgerButton.className = 'hamburger-button';
    // }
    // console.log(hamburgerButton);
}

const blob = () => {
    console.log('mel');
}
const otherBlob = function () {
    console.log('joe');
}
const onLogoClick = (findMyBlob, findMyotherBlob) => {
    console.log('bear');
    findMyBlob();
    findMyotherBlob();
}

// modal button 
const onFormSubmit = () => {
    const modal = document.querySelector('#modal');
    modal.classList.add('modal-enter');
    setTimeout(() => {
        modal.classList.add('modal-exit');
    }, 1500)
    setTimeout(() => {
        modal.classList.remove('modal-enter', 'modal-exit');
    }, 2200)
}