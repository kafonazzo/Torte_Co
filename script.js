// =====================
// NAVBAR SCROLL E MENU
// =====================
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
let lastScrollTop = 0;

if (navbar) {
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 50) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollTop = Math.max(scrollTop, 0);
    });
}

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}

// ========================
// CAROSELLO SEMPLICE SENZA DUPLICAZIONI
// ========================
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const slideItems = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const dotsContainer = document.querySelector(".dots");

    let currentIndex = 0;

    // Crea i dots
    slideItems.forEach((_, index) => {
        const dot = document.createElement("span");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dots span");

    function updateCarousel() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slideItems.length) % slideItems.length;
        updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slideItems.length;
        updateCarousel();
    });

    // Cambio automatico ogni 4 secondi
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideItems.length;
        updateCarousel();
    }, 4000);
});
// =====================
// ANIMAZIONE ON SCROLL
// =====================
const animatedElements = document.querySelectorAll(".section-title, .section-text, .gallery-item");

function animateOnScroll() {
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.style.animation = "fadeInUp 1s ease forwards";
        }
    });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

// =====================
// CLASSE LOADED AL BODY
// =====================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});