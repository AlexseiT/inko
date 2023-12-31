import Header from './modules/Header.js';
const isMobile = document.documentElement.clientWidth < 768;
const isTablet = document.documentElement.clientWidth < 1140;

function isWebp() {
    // Проверка поддержки webp
    const testWebp = (callback) => {
        const webP = new Image();

        webP.onload = webP.onerror = () => callback(webP.height === 2);
        webP.src =
        'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    };

    // Добавление класса _webp или _no-webp для HTML
    testWebp((support) => {
        const className = support ? 'webp' : 'no-webp';
        document.querySelector('html').classList.add(className);
        console.log(support ? 'webp поддерживается' : 'webp не поддерживается');
    });
}

function initHeader() {
    const headerNode = document.querySelector('header');
    if(headerNode) {
        return new Header(headerNode);
    }
}

isWebp();

function initBurgerTint()
{
    const burger_button = document.querySelector(".burger")

    burger_button.addEventListener("click", (event) => {
        const tint = document.querySelector(".burger__tint");
        tint.classList.toggle("burger__tint_show");
        burger_button.classList.toggle("burger__active");
    });

}
function initSliderDirectionMain(){
    const swiper = new Swiper(".direction__swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: true,
        navigation: {
            nextEl: ".direction-button-next",
            prevEl: ".direction-button-prev",
        },
        breakpoints:
        {
            1200: {
            slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            }
        }
        });
}
function initSliderAboutMain(){
    const swiper = new Swiper(".about-block__swiper", {
        slidesPerView: 1,
        //spaceBetween: 30,
        centeredSlides: true,
        loopPreventsSliding: true,
        loop: true,
        navigation: {
            nextEl: ".about-block-button-next",
            prevEl: ".about-block-button-prev",
        },
        breakpoints:
        {
            768: {
            slidesPerView: 3
            },
        },
        effect: "creative",
        loopedSlides: 3,
        creativeEffect: {
            limitProgress: 3,
            prev: {
                translate: ["-100%", 0, 0],
                opacity: 0.7,
                scale: .75
            },
            next: {
                translate: ["100%", 0, 0],
                opacity: 0.7,
                scale: .75
            }
        }
        });
}
function initSliderOurLifeMain(){
    const swiper = new Swiper(".our-life__swiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        navigation: {
            nextEl: ".our-life-button-next",
            prevEl: ".our-life-button-prev",
        }
        });
}
function initSliderCertificate(){
    const swiper = new Swiper(".certificate__swiper", {
        slidesPerView: 1,
        breakpoints:
        {
            768: {
            slidesPerView: 6
            },
        },
        spaceBetween: 50,
        navigation: {
            nextEl: ".certificate-button-next",
            prevEl: ".certificate-button-prev",
        }
        });
}   
function initSliderDiploma(){
    const swiper = new Swiper(".diploma__swiper", {
        slidesPerView: 3,
        loop: true,
        breakpoints:
        {
            768: {
                spaceBetween: 80
            },
        },
        autoplay: {
            delay: 2000,
          },
        spaceBetween: 30
        });
}
function initButtonDirection(){
    
    const button = document.querySelector(".destinations__scroll-button")
    if (button){
        const cards = document.querySelector(".destinations__cards");
        button.addEventListener("click", (event) => {
            cards.classList.toggle("destinations__cards_active");
            button.classList.toggle("destinations__scroll-button_active");
        });
    }
}

function initTeamSwiper() {
    const swiper = new Swiper(".team-gallery__swiper", {
        slidesPerView: 1,
        navigation: {
            nextEl: ".team-gallery__button-next",
            prevEl: ".team-gallery__button-prev",
        }
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    const header = initHeader();
    initBurgerTint();
    initSliderDirectionMain();
    initSliderAboutMain();
    initSliderOurLifeMain();
    initSliderCertificate();
    initButtonDirection();
    initTeamSwiper();
    initSliderDiploma();
})