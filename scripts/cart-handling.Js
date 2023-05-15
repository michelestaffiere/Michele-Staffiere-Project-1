//grabbing elements 
cartContainer = document.querySelector(`.cartContainer`);
cartMenu = document.querySelector(`.cartMenu`);
cartIcon = Array.from(document.querySelectorAll(`.featuredContainer li`));
itemName = Array.from(document.querySelectorAll(`.featuredContainer li h3`));





// event listener that grabs the name of the product cliked
cartIcon.forEach(child => {
    target = child.querySelector(`.addCart`);
    target.addEventListener('click',()=>{
            nameContent = child.querySelector(`h3`).textContent;
            console.log(`${nameContent} clicked`);
            cartItem = document.createElement(`li`);
            cartItem.textContent = nameContent;
            cartMenu.append(cartItem);
            console.log(cartMenu);
        })
});








