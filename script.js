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

// Add shadow to header on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('header').style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
    } else {
        document.querySelector('header').style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});