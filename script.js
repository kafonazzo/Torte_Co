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

// =====================
// CAROSELLO AUTOMATICO
// =====================
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const slideInterval = 4000;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

if (slides.length > 0) {
    showSlide(currentSlide);
    setInterval(nextSlide, slideInterval);
}

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