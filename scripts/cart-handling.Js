//grabbing elements 
const cartContainer = document.querySelector(`.cartContainer`);
const cartMenu = document.querySelector(`.cartMenu`);
const cartIcon = Array.from(document.querySelectorAll(`.featuredContainer li`));
const cartItems = [];

// callback that checks if an item is already in the cart or not 

// Checks the cartItems array using findIndex, 
// if any item in the array has matching .item property then condition is met
// returns index value of the matching object , if no match returns -1
// ternary operand
// setting the condition to check for first, if the itemIndex does not = -1 then update the qty by one. 
// if itemIndex === -1 then push the item to the cart array. 


const cartArrayCheck = (item) => {
    const liItem = document.createElement(`li`);
    const productName = document.createElement(`p`);
    const productQty = document.createElement(`p`);
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.item === item.item);
        itemIndex !== -1 
        ? (
            cartItems[itemIndex].qty = cartItems[itemIndex].qty + 1,
            cartItems[itemIndex].price = cartItems[itemIndex].price + item.price,
            document.querySelector(`.${item.item.replace(/\s/g, "")}`).textContent = cartItems[itemIndex].qty,
            console.log(`test flag`)
          ):(
            cartItems.push(item),
            productName.textContent = item.item,
            productQty.textContent = item.qty,
            productQty.classList.add(item.item.replace(/\s/g, "")),
            cartMenu.appendChild(liItem),
            liItem.append(productName),
            liItem.append(productQty)
          );
  };
  
  // for each loop  that runs through the array of cart icons ans attatches an event listener
  // that grabs the name of the product cliked
  cartIcon.forEach(child => {
      target = child.querySelector(`.addCart`);
      // eventListener that appends the item to the cart and gathers all relavant information on the product.
      target.addEventListener('click',()=>{
          const h3Content = child.querySelector(`h3`).textContent;
          const itemPrice = parseFloat(child.querySelector(`.price`).textContent.replace(/\$/g, ''));
          const itemDetails = {
              item:`${h3Content}`,
              qty:1,
              price:itemPrice
            };
            // cartItem.textContent = itemDetails.item;
            cartArrayCheck(itemDetails);
        });
    });
    
    
    
    
    // const cartMenuCheck = (item) => {
    //     const itemName = 
    // };
    










