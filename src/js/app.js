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
function initButtonGalleryOpen(){
    
    const button = document.querySelector(".gallery__next")
    if (button){
        const cards = document.querySelector(".gallery__block");
        button.addEventListener("click", (event) => {
            cards.classList.toggle("gallery__block_active");
            button.classList.toggle("gallery__next_active");
        });
    }
}
function initSliderReviews(){
    const swiper = new Swiper(".reviews__swiper", {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 50,
        breakpoints:
        {
            1200: {
            slidesPerView: 3
            },
            769: {
                slidesPerView: 2
                },
        },
        navigation: {
            nextEl: ".reviews__button_next",
            prevEl: ".reviews__button_prev",
        }
        });
}
function initCloseButtons(){
    const elements = document.querySelectorAll(".fslightbox-absoluted.fslightbox-full-dimension.fslightbox-flex-centered");
    elements.forEach(element => 
        element.querySelector("div").insertAdjacentHTML('afterBegin', '<div class="fslightbox-toolbar"><div class="fslightbox-toolbar-button fslightbox-flex-centered" title="Enter fullscreen"><svg width="20px" height="20px" viewBox="0 0 18 18"><path class="fslightbox-svg-path" d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"></path></svg></div><div class="fslightbox-toolbar-button fslightbox-flex-centered" title="Close"><svg width="20px" height="20px" viewBox="0 0 24 24"><path class="fslightbox-svg-path" d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path></svg></div></div>')
    );
}
function BindPopup(){
    Fancybox.bind('[data-fancybox]', {
        // Custom options for all galleries
      });    
}

function initDropDownPopup(){
    const dropdown_button = document.querySelector('.popup-sign-up__button_first')
    const dropdown_shevron = document.querySelector('.popup-sign-up__arrow')
    if (dropdown_button)
    {
        dropdown_button.addEventListener('click', (event) => {
            let dropdown_menu = document.querySelector('.popup-sign-up__dropdown-menu')
            dropdown_menu.classList.toggle('popup-sign-up__dropdown-menu_active')
            dropdown_shevron.classList.toggle('popup-sign-up__arrow_active')
            dropdown_button.classList.toggle('popup-sign-up__button_active')
        })
        const dropdown_elements = document.querySelectorAll('.popup-sign-up__dropdown-element')
        const dropdown_input = document.querySelector('.popup-sign-up__input-hidden')
        dropdown_elements.forEach((element) => {
            element.addEventListener('click', (event) => {
                let text = element.textContent
                let button_text = document.querySelector('.popup-sign-up__button_text')
                button_text.innerHTML = text
                dropdown_input.setAttribute("value", text);

                let dropdown_menu = document.querySelector('.popup-sign-up__dropdown-menu')
                dropdown_menu.classList.toggle('popup-sign-up__dropdown-menu_active')
                dropdown_shevron.classList.toggle('popup-sign-up__arrow_active')
                dropdown_button.classList.toggle('popup-sign-up__button_active')
            })
        })
    }
}
function initAgreeCheckForm(){

    const check = document.querySelector('.agree__check')
    if(check){
        let fed__button = document.querySelector('.fed__button');
        fed__button.classList.add("fed__button_disable");
        check.addEventListener('click', (event) => {
            fed__button.classList.toggle("fed__button_disable");
        })
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    const header = initHeader();
    initDropDownPopup();
    initBurgerTint();
    initSliderDirectionMain();
    initSliderAboutMain();
    initSliderOurLifeMain();
    initSliderCertificate();
    initButtonDirection();
    initTeamSwiper();
    initSliderDiploma();
    initButtonGalleryOpen();
    initSliderReviews();
    BindPopup();
    initAgreeCheckForm();
})