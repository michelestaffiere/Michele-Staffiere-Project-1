//grabbing elements 
const cartContainer = document.querySelector(`.cartContainer`);
const cartMenu = document.querySelector(`.cartMenu`);
const cartIcon = Array.from(document.querySelectorAll(`.featuredContainer li`));
const cartButtons = [];
const cartItems = [];

//for each loop  that runs through the array of cart icons ans attatches an event listener  that grabs the name of the product cliked.
// eventListener that appends the item to the cart and gathers all relavant information on the product.
cartIcon.forEach(child => {
  target = child.querySelector(`.addCart`);
  target.addEventListener('click',()=>{
    const h3Content = child.querySelector(`h3`).textContent;
    const itemPrice = parseFloat(child.querySelector(`.price`).textContent.replace(/\$/g, ''));
    const imgDetails = child.querySelector(`img`);
    const itemDetails = {
    item:`${h3Content}`,
    qty:1,
    price:itemPrice,
    img: imgDetails 
    };
  cartArrayCheck(itemDetails);
  });
});
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
  const addBtn = document.createElement(`button`);
  const lessBtn = document.createElement(`button`);
  let productImg = document.createElement(`img`);
  const itemIndex = cartItems.findIndex((cartItem) => cartItem.item === item.item);
  itemIndex !== -1 
    ? (
      cartItems[itemIndex].qty = cartItems[itemIndex].qty + 1,
      cartItems[itemIndex].price = cartItems[itemIndex].price + item.price,
      document.querySelector(`.${item.item.replace(/\s/g, "")}`).children[2].textContent = cartItems[itemIndex].qty
     
    ):(
      cartItems.push(item),
      productName.textContent = item.item,
      productQty.textContent = item.qty,
      liItem.classList.add(item.item.replace(/\s/g, "")),
      productImg.src = item.img.src,  // makes it so it clones the src and not move the image from the featured section into the cart. 
      cartMenu.appendChild(liItem),
      liItem.append(productImg),
      liItem.append(productName),
      liItem.append(productQty),
      liItem.append(addBtn),
      liItem.append(lessBtn),
      // console.log(liItem)
      addBtn.addEventListener(`click`,addBtnEvent )
    );
};

// const addRemoveBtnHandling = (btnPressed) =>{
//   if
// }

const addBtnEvent = (e) => {
  const parentClass = e.explicitOriginalTarget.parentNode.className;  // grabs the class name of the parent Li item so we can use it to check the cartArray
 
  // console.log(parentClass.className);
  // const itemIndex = cartItems.findIndex((cartItem) => cartItem.item === item.item);
  // itemIndex !== -1 
  //   ? (
  //     cartItems[itemIndex].qty = cartItems[itemIndex].qty + 1,
  //     cartItems[itemIndex].price = cartItems[itemIndex].price + item.price,
  //     document.querySelector(`.${item.item.replace(/\s/g, "")}`).children[2].textContent = cartItems[itemIndex].qty
  //   )
  //   : null ; // Empty statement to do nothing
};
