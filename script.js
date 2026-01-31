// Mobile menu toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu after clicking a link
        if (document.querySelector('nav ul').classList.contains('show')) {
            document.querySelector('nav ul').classList.remove('show');
        }
    });
});

// Initialize Clients Swiper
const clientsSwiper = new Swiper('.clients-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.clients-swiper .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.clients-swiper .swiper-button-next',
        prevEl: '.clients-swiper .swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

// Initialize Projects Swiper
const projectsSwiper = new Swiper('.projects-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.projects-swiper .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.projects-swiper .swiper-button-next',
        prevEl: '.projects-swiper .swiper-button-prev',
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }
});



