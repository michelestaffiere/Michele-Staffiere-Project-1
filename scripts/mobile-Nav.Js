// TODO
// when a nav item is clicked get rid of the nav item.

// add an event listener to the cart icons on the products

// when the cart icon next to a prodcut is clicked add a icon to the cart that shows how many items are in the cart.

// add a cart icon to the mobile menu.
const mobileMenu = document.querySelector(`.hamburger`);
const navMenu = document.getElementById(`inner-nav-menu`);
const menuItems = navMenu.children;

let menuToggle = () =>{
    mobileMenu.classList.toggle(`is-active`);
    navMenu.classList.toggle(`show-Menu`);
}
mobileMenu.addEventListener(`click`, menuToggle)
for (let i = 0; i < menuItems.length; i++){
    menuItems[i].addEventListener(`click`,menuToggle )
}