const slides = document.getElementsByClassName("carousel-item")

let currentSlide = 0
const numberOfSliedes = slides.length

document.getElementById("carousel-button-prev").addEventListener("click", moveToPreviousSlide)
document.getElementById("carousel-button-next").addEventListener("click", moveToNextSlide)


function moveToNextSlide(){
    slides[currentSlide].classList.remove("carousel-item-visible")
    if(currentSlide === numberOfSliedes - 1){
        currentSlide = 0
    }
    else{
        currentSlide++;
    }
    slides[currentSlide].classList.add("carousel-item-visible")
}

function moveToPreviousSlide(){
    slides[currentSlide].classList.remove("carousel-item-visible")
    if(currentSlide === 0){
        currentSlide = numberOfSliedes - 1
    }
    else{
        currentSlide--;
    }
    
    slides[currentSlide].classList.add("carousel-item-visible")
    
}