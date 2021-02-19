let header = document.getElementById('header');
const unibellDiv = document.getElementById('info-unibell-div');
const marcasDiv = document.getElementById('marcas-div');

eventFunction();

function eventFunction() {
    window.addEventListener('scroll', scrollHeader);
}

function scrollHeader() {
    console.log("inicio");
    console.log("scroll :" + scrollY())
    if (scrollY() > 90) {
        header.classList.add("headercolor");
    } else {
        header.classList.remove("headercolor")
    }
}


function nosotrosScroll() {
    setScrollY(unibellDiv.offsetTop);
}

function marcasScroll() {
    setScrollY(marcasDiv.offsetTop);
}


function scrollY() {
    return document.documentElement.scrollTop;
}

function setScrollY(distancia) {
    document.documentElement.scrollTop = distancia - 80;
}



/* SWIPER */
var mySwiper = new Swiper('#mask-swiper-container', {
    speed: 400,
    spaceBetween: 0,
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 2200,
        disableOnInteraction: false,
    },
    loopedSlides: 3,


    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.mask-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '#mask-button-next',
        prevEl: '#mask-button-prev',
    },
})



/* SWIPER */
var mySwiper = new Swiper('#marcas-swiper-container', {
    speed: 400,
    spaceBetween: 32,
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loopedSlides: 5,


    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.marcas-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '#marcas-button-next',
        prevEl: '#marcas-button-prev',
    },
})