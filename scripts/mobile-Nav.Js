// TODO

// make the mobile hamburger menu icon be sticky

// grab the hamburger icon and make a variable that points to it
// add an event listener to the icon and ttrack when it gets clicked
// when the hamburger icon gets clicked show the mobile nav menu

//when the hamburger icon gets clicked have it change / animate to a X button
// when the x button gets clicked close the mobile nav menu.

const hamburgerButton = document.getElementById(`menu`)
const openMenu = document.getElementById(`openMenu`);
const closeMenu = document.getElementById(`closeMenu`);
const navMenu = document.getElementById(`inner-nav-menu`);
// console.log(openMenu,closeMenu,navMenu)

hamburgerButton.addEventListener(`click`,(e)=>{
    if(navMenu.classList.contains(`show-Menu`)){
        navMenu.classList.remove(`show-Menu`);
        closeMenu.style.display =  `none`;
        openMenu.style.display = `block`;
    } else{
        navMenu.classList.add(`show-Menu`);
        closeMenu.style.display =  `block`;
        openMenu.style.display = `none`;
    }
})


