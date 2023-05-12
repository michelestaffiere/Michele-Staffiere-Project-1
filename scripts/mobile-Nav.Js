// TODO
// when a nav item is clicked get rid of the nav item.

// add an event listener to the cart icons on the products

// when the cart icon next to a prodcut is clicked add a icon to the cart that shows how many items are in the cart.

// add a cart icon to the mobile menu.


// Hamburger navigation 
const mobileMenu = document.querySelector(`.hamburger`);
const navMenu = document.getElementById(`inner-nav-menu`);
const menuItems = navMenu.children;

let menuToggle = () =>{
    mobileMenu.classList.toggle(`is-active`); // Animates the burger icon
    navMenu.classList.toggle(`show-Menu`); // Displays the menu when burger icon is clicked.
}
mobileMenu.addEventListener(`click`, menuToggle)
for (let i = 0; i < menuItems.length; i++){
    menuItems[i].addEventListener(`click`,menuToggle )  // Adds event listeners to menu items so the menu can close when an menu item is clicked.
}

// Categories carousel

//setting up variables that will be used.
const carouselContainer = document.querySelector(`.banners`);
const carouselItems = Array.from(carouselContainer.children);

// creating a variable that matches the breakpoint for mobile   viewport
const mobileviewPort = window.matchMedia("(max-width: 720px)");


// creating a callback function to apply classes and remove classes based on the viewport size
viewPortHandling = () =>{
    if (mobileviewPort.matches){
        carouselContainer.classList.add(`carousel`);
        carouselItems.forEach((child) =>{
        child.classList.add(`carousel-item`);
        })
    } else{
        carouselContainer.classList.remove(`carousel`);
        carouselItems.forEach((child) =>{
        child.classList.remove(`carousel-item`);
        })
    };
};

// adding an event listener to the window and having it trigger the viewPortHandling function when the viewport matches the breakpoint query in scss.
window.addEventListener(`resize`,viewPortHandling);



