import carouselHandling,{viewPortHandling} from "./carousel-Category-Banners.js";
let trackNum = 0;
carouselHandling();
viewPortHandling();
leftBtn.addEventListener('click', () =>{carouselHandling(`left`)});
rightBtn.addEventListener('click', () =>{carouselHandling(`right`)});