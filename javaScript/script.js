'use strict';

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll
('.bestseller-image,.mens-image p,.mens-image .button,.womens-image p,.womens-image .button')
.forEach(el => {
    observer.observe(el);
});
