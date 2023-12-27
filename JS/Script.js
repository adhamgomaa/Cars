// loading page
var loading = document.getElementById('loading');

function load(){
    loading.style.display= "none";
}

// backgroundColor => header
var header = document.querySelector('.header');
var logo = document.querySelector('.header-container .header-logo h1');
var list = document.querySelectorAll('.header-list ul a');

document.addEventListener('scroll',() => {
    var scroll_position = window.scrollY;
    for(let i = 0; i < list.length; i++) {
        if (scroll_position > 30) {
            header.style.backgroundColor = '#155472';
            logo.style.color = '#FFF';
            list[i].style.color = "#FFF";
        } else {
            header.style.backgroundColor = '#FFF';
            logo.style.color = '#000';
            list[i].style.color = '#000';
        }
    }
});

// slider image for home
let arrows = document.querySelectorAll(".slider-image .arrow");
let slider = document.querySelector(".slider-image .slider");
let images = document.querySelectorAll(".slider-image .slider .image");
let imageWidth = document.querySelector(".slider-image .slider .image").offsetWidth;

arrows.forEach(e => {
    e.addEventListener("click", () => {
        slider.scrollLeft += e.id === "left" ? -imageWidth : imageWidth;
    })
    setInterval(() => {
        if (slider.scrollLeft === -(slider.offsetWidth * (images.length - 1))) {
            slider.scrollLeft = 0;
        } else {
            slider.scrollLeft += -imageWidth;
        }
    }, 10000)
})

// slider for new car
let arrowBtn = document.querySelectorAll(".new-car .content i");
let mainCar = document.querySelector(".new-car .content .main-car");
let width = mainCar.querySelector(".new-car .content .main-car .slider-car .car").offsetWidth;

arrowBtn.forEach((e) => {
    e.addEventListener("click", () => {
        mainCar.scrollLeft += e.id === "left" ? -width : width;
    });
});




