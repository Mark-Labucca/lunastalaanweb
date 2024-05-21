'use strict';

document.addEventListener('scroll', function () {
    var scrolled = window.pageYOffset;
    var parallax = document.querySelector('.hero-background');
    if (parallax) {
        parallax.style.transform = 'translateY(' + scrolled * 0.5 + 'px)'; // Adjust the multiplier for more or less parallax effect
    }
});
