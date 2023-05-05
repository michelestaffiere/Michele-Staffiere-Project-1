// TODO

// make the mobile hamburger menu icon be sticky -DONE

// grab the hamburger icon and make a variable that points to it - DONE
// add an event listener to the icon and ttrack when it gets clicked - DONE
// when the hamburger icon gets clicked show the mobile nav menu - DONE

//when the hamburger icon gets clicked have it change / animate to a X button
// when the x button gets clicked close the mobile nav menu. - DONE

// when a nav item is clicked get rid of the nav item.

// add an event listener to the cart icons on the products

// when the cart icon next to a prodcut is clicked add a icon to the cart that shows how many items are in the cart.

// add a cart icon to the mobile menu.



//Variables for grabbinga and changing nav styles / view
const hamburgerButton = document.getElementById(`menu`)
const openMenu = document.getElementById(`openMenu`);
const closeMenu = document.getElementById(`closeMenu`);
const navMenu = document.getElementById(`inner-nav-menu`);

// function to hide and show everything on click.
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
});


// Variables for adding & removing from cart.


