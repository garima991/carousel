const carousel = document.querySelector(".carousel");
const slideContainer = document.querySelector(".slide-wrapper");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const progressBar = document.querySelector("#progress");

let currSlide = 0;
let totalSlides = 10;
let slides = 0;
let intervalDuration = 4000;
let progressPercentage = 0;
let progressTime;


function pushSlide (){
    for(let i = 0; i <= totalSlides; i++){
        let slide = document.createElement("div");
        slide.classList.add("slide");
        const image = document.createElement("img");
        image.src = `https://picsum.photos/seed/slide${i+6}/1080/720`;
        slide.setAttribute("style", "border-radius : 20px");
        slide.append(image);
        carousel.append(slide);
    }
    slides = document.querySelectorAll(".slide");
    console.log(slides);
}

function setSlides(){
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currSlide) * 100}%)`;
    });
}

function prevSlide(){
    currSlide = (currSlide - 1 + totalSlides) % totalSlides;
    resetProgress();
    setSlides();
}

function nextSlide(){
    currSlide = (currSlide + 1) % totalSlides;
    resetProgress();
    setSlides();
}

function setProgress(){
    progressPercentage++;
    if (progressPercentage >= 100) {
        progressPercentage = 0; 
        nextSlide(); 
    }
    progressBar.style.width = `${progressPercentage}%`;
}

function resetProgress(){
    progressPercentage = 0; 
    progressTime = setInterval(setProgress, intervalDuration / 100);
}

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);

function main(){
    pushSlide();
    setSlides();
    resetProgress();
}

main();