//header scroll functionality

const firstContainer = document.querySelector("#first-container");
const firstContainerBottomPosition = firstContainer.getBoundingClientRect()
  .bottom;

document.addEventListener("scroll", () => {
  const header = document.querySelector("#header");
  const logo = document.querySelector("#logo");
  const hamburgerMenuScroll = document.querySelector("#hamburger-menu");

  if (window.scrollY > firstContainerBottomPosition - header.offsetHeight) {
    header.classList.add("header-on-scroll");
    logo.classList.add("logo-on-scroll");
    hamburgerMenuScroll.classList.add("hamburger-menu-is-active-on-scroll");
  } else {
    header.classList.remove("header-on-scroll");
    logo.classList.remove("logo-on-scroll");
    hamburgerMenuScroll.classList.remove("hamburger-menu-is-active-on-scroll");
  }
});

//hamburger menu

const onHamburgerButtonClick = function () {
  const hamburgerMenu = document.querySelector("#hamburger-menu");
  hamburgerMenu.classList.toggle("hamburger-menu-is-active");

  const hamburgerButton = document.querySelector("#hamburger-button");
  hamburgerButton.classList.toggle("hamburger-is-active");
};

// search bar dropdown menu

const onSearchButtonClick = function () {
  const searchBar = document.querySelector("#dropdown-search");
  searchBar.classList.toggle("dropdown-search-active");
};

const searchResults = [
  "Bread",
  "Pastries",
  "Made to Order",
  "Occasions",
  "Sourdough",
  "Contact Form",
  "History",
];

//function that targets inside of input field value

const getSearchResults = function (event) {
  const searchValue = event.target.value;
  const searchList = document.querySelector("#search-list");
  searchList.innerHTML = "";
  let filteredResults = [];

  // creating a filtered results array based on what is typed in input field and whether string is included in any of search results array
  filteredResults = searchResults.filter((result) => {
    if (result.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });

  // putting the filtered results array into the DOM via a new li element, which is added into the ul #search-list

  filteredResults.forEach((result) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = result;
    listItem.classList = "search-result";
    searchList.appendChild(listItem);
  });
  // error message
  if (filteredResults.length === 0) {
    const error = document.createElement("p");
    error.innerHTML = "No results!";
    searchList.appendChild(error);
  }
};

// modal button
const onFormSubmit = () => {
  document.querySelector("#form").reset();
  document.querySelector(".submit-button").disabled = true;
  const modal = document.querySelector("#modal");
  modal.classList.add("modal-enter");
  setTimeout(() => {
    modal.classList.add("modal-exit");
  }, 1500);
  setTimeout(() => {
    modal.classList.remove("modal-enter", "modal-exit");
  }, 2200);
};

// form validation

const inputFullName = document.getElementById("fullname");
const inputEmail = document.getElementById("email");
const inputChat = document.getElementById("chat");
const emailError = document.querySelector(".error");

let isInputFullNameValid = inputFullName.value ? true : false;
let isInputEmailValid = inputEmail.value ? true : false;
let isInputChatValid = inputChat.value ? true : false;

const isButtonDisabled = () => {
  const submitButton = document.querySelector(".submit-button");
  if (isInputFullNameValid && isInputEmailValid && isInputChatValid) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};

inputFullName.addEventListener("input", (event) => {
  if (event.target.value === "") {
    isInputFullNameValid = false;
  } else {
    isInputFullNameValid = true;
  }
  isButtonDisabled();
});

inputEmail.addEventListener("input", (event) => {
  if (event.target.value === "" || inputEmail.validity.typeMismatch) {
    isInputEmailValid = false;
  } else {
    isInputEmailValid = true;
  }
  isButtonDisabled();

  if (inputEmail.validity.valid) {
    emailError.textContent = "";
  } else {
    if (inputEmail.validity.valueMissing) {
      emailError.textContent = "You need to enter an e-mail address.";
    } else if (inputEmail.validity.typeMismatch) {
      emailError.textContent = "Entered value needs to be an e-mail address.";
    }
  }
});

inputChat.addEventListener("input", (event) => {
  if (event.target.value === "") {
    isInputChatValid = false;
  } else {
    isInputChatValid = true;
  }
  isButtonDisabled();
});

// Add to Basket button
let basketCount = 0;
const onAddToBasketClick = function () {
  const basketButton = document.querySelector("#basket-button");
  const basket = document.querySelector("#basket");
  basketCount++;
  basketButton.innerHTML = basketCount;
  basketButton.classList.add("basket-icon-is-active");
  basket.classList.add("basket-lightup");
  setTimeout(() => {
    basketButton.classList.remove("basket-icon-is-active");
    basket.classList.remove("basket-lightup");
  }, 5000);
};
