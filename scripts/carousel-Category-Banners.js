// Categories carousel

    //setting up variables that will be used.
    const carouselContainer = document.querySelector(`.banners`);
    const carouselItems = Array.from(carouselContainer.children);
    const leftBtn = document.querySelector(`.carousel-left`);
    const rightBtn = document.querySelector(`.carousel-right`);
    let trackNum = 0 
    //.getboundingclientrect gives us the width and height properties.
    const slideWidth = carouselItems[0].getBoundingClientRect().width;
    // creating a variable that matches the breakpoint for mobile   viewport
    const mobileviewPort = window.matchMedia("(max-width: 720px)");
    
    
    
    // creating a callback function to apply classes and remove classes based on the viewport size
    viewPortHandling = () =>{
        if (mobileviewPort.matches){
            carouselContainer.classList.add(`carousel`);
            carouselItems(0).classList.add(`active-item`);
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

// carousel slider for the category banners.
carouselHandling = (direction) =>{
    if (direction === `right`){
        if(carouselItems[trackNum].nextElementSibling !== null){
            trackNum ++;
            carouselItems[trackNum].classList.add(`active-item`);
            carouselItems[trackNum-1].classList.remove(`active-item`);
        } else{
            carouselItems[trackNum].classList.remove(`active-item`);
            trackNum = 0;
            carouselItems[trackNum].classList.add(`active-item`);
        }
    } else{
        if(carouselItems[trackNum].previousElementSibling !== null){
            trackNum --;
            carouselItems[trackNum].classList.add(`active-item`);
            carouselItems[trackNum+1].classList.remove(`active-item`);
        } else{
            carouselItems[trackNum].classList.remove(`active-item`);
            trackNum = carouselItems.length - 1;
            // By initializing trackNum to the last index of carouselItems -1, the code can now handle carousels with any number of items. This is because trackNum will always be set to the correct index of the last item in the array, regardless of how many items are in the carousel.
            // remember arrays are zero indexed, but length will show (currently) a length of 3, but when calling and manipulating data we need to go by zero indexing (0,1,2);  so setting it to be the value of the length minus 1 the active slide will always let the function loop to the last slide if the user reaches the end(start of the array) going left. 
            carouselItems[trackNum].classList.add(`active-item`);
        }
    }
};
leftBtn.addEventListener('click', () =>{carouselHandling(`left`)});
rightBtn.addEventListener('click', () =>{carouselHandling(`right`)});
