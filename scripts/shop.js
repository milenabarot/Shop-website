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
//header scroll functionality

const firstContainer = document.querySelector('#first-container');
const firstContainerBottomPosition = firstContainer.getBoundingClientRect().bottom;

document.addEventListener("scroll", () => {
    const header = document.querySelector('#header');
    const logo = document.querySelector('#logo');
    const hamburgerMenuScroll = document.querySelector('#hamburger-menu');

    if (window.scrollY > firstContainerBottomPosition - header.offsetHeight) {
        header.classList.add('header-on-scroll');
        logo.classList.add('logo-on-scroll');
        hamburgerMenuScroll.classList.add('hamburger-menu-is-active-on-scroll');
    } else {
        header.classList.remove('header-on-scroll');
        logo.classList.remove('logo-on-scroll');
        hamburgerMenuScroll.classList.remove('hamburger-menu-is-active-on-scroll');
    }

})


//hamburger menu

const onHamburgerButtonClick = function () {
    const hamburgerMenu = document.querySelector('#hamburger-menu');
    hamburgerMenu.classList.toggle("hamburger-menu-is-active");

    // Above toggle code replaces below if statement 
    // if (hamburgerMenu.className === 'hamburger-menu') {
    //     hamburgerMenu.className = 'hamburger-menu hamburger-menu-is-active';
    // } else {
    //     hamburgerMenu.className = 'hamburger-menu';
    // }

    const hamburgerButton = document.querySelector('#hamburger-button');
    hamburgerButton.classList.toggle("hamburger-is-active");


    // Above toggle code replaces below if statement 
    // if (hamburgerButton.className === 'hamburger-button') {
    //     hamburgerButton.className = 'hamburger-button hamburger-is-active';
    // } else {
    //     hamburgerButton.className = 'hamburger-button';
    // }
    // console.log(hamburgerButton);
}


// search bar dropdown menu

const onSearchButtonClick = function () {
    const searchBar = document.querySelector('#dropdown-search');
    searchBar.classList.toggle("dropdown-search-active");
}


const searchResults = ['Bread', 'Pastries', 'Made to Order', 'Occasions', 'Sourdough', 'Contact Form', 'History'];


const getSearchResults = function (event = { target: {value: ''}}) {
    const searchQuery = event.target.value;
    const searchList = document.querySelector('#search-list');
    let filteredResults = [];

    if (searchQuery === '') {
        filteredResults = searchResults;
    } else {
        filteredResults = searchResults.filter(searchResult => {
            return searchResult.toLowerCase().includes(searchQuery.toLowerCase())
        })
    }
        

    const htmlstring = filteredResults.map(result => {
        return `
        <li class="search-result">${result}</li>
        `
    })
        .join('');
    
    searchList.innerHTML = htmlstring;
}

getSearchResults();






// modal button 
const onFormSubmit = () => {
    document.querySelector("#form").reset();
    document.querySelector('.submit-button').disabled = true;
    const modal = document.querySelector('#modal');
    modal.classList.add('modal-enter');
    setTimeout(() => {
        modal.classList.add('modal-exit');
    }, 1500)
    setTimeout(() => {
        modal.classList.remove('modal-enter', 'modal-exit');
    }, 2200)

}

// form validation


const inputFullName = document.getElementById('fullname')
const inputEmail = document.getElementById('email')
const inputChat = document.getElementById('chat')
const emailError = document.querySelector('.error');

let isInputFullNameValid = inputFullName.value ? true : false;
let isInputEmailValid = inputEmail.value ? true : false;
let isInputChatValid = inputChat.value ? true : false;

const isButtonDisabled = () => {
    const submitButton = document.querySelector('.submit-button');
    if (isInputFullNameValid && isInputEmailValid && isInputChatValid) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }

}

inputFullName.addEventListener('input', (event) => {
    if (event.target.value === '') {
        isInputFullNameValid = false;
    } else {
        isInputFullNameValid = true;
    }
    isButtonDisabled();
})

inputEmail.addEventListener('input', (event) => {
    if (event.target.value === '' || inputEmail.validity.typeMismatch) {
        isInputEmailValid = false;
    } else {
        isInputEmailValid = true;
    }
    isButtonDisabled();

    if (inputEmail.validity.valid) {
        emailError.textContent = '';

    } else {
        if (inputEmail.validity.valueMissing) {
            emailError.textContent = 'You need to enter an e-mail address.';
        } else if (inputEmail.validity.typeMismatch) {
            emailError.textContent = 'Entered value needs to be an e-mail address.';
        }
    }
})

inputChat.addEventListener('input', (event) => {
    if (event.target.value === '') {
        isInputChatValid = false;
    } else {
        isInputChatValid = true;
    }
    isButtonDisabled();

})





// Add to Basket button
let basketCount = 0;
const onAddToBasketClick = function () {
    const basketButton = document.querySelector('#basket-button');
    console.log(basketButton);
    basketCount++
    basketButton.innerHTML = basketCount;
    basketButton.classList.add("basket-icon-is-active");
    setTimeout(() => {
        basketButton.classList.remove("basket-icon-is-active");
    }, 5000);


};