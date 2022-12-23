const menuBtn       = document.getElementById('menu-btn');
const menu          = document.getElementById('menu');
const menuLinks     = document.querySelectorAll('.menu-item');
const body          = document.querySelector('body');
// const formBtn       = document.getElementById('form-submit');
// const form          = document.getElementById('estimate-form');
// const formContainer = document.getElementById('form-container');

// Portfolio filter functionality
$(document).ready(function () {
    $('.data-btn').click(function () {
        const value = $(this).attr('data-filter');
        if (value === 'all-projects') {
            $('.portfolio-item').show('500');
        } else {
            $('.portfolio-item').not('.' + value).hide('500');
            $('.portfolio-item').filter('.' + value).show('500');
        }
    });

    $('.data-btn').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
});

// Open and close menu
menuBtn.addEventListener('click', function () {
    if (menu.classList.contains('open-menu')) {
        menu.classList.remove('open-menu');
        body.classList.remove('stop-scrolling');
        menuBtn.classList.remove('active-menu');
    } else {
        menu.classList.add('open-menu');
        menuBtn.classList.add('active-menu');
        body.classList.add('stop-scrolling');
    };
});

// Close menu on link click
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        menu.classList.remove('open-menu');
        body.classList.remove('stop-scrolling');
        menuBtn.classList.remove('active-menu');
    });
});

// Hide form on submit and insert thank you note
// formBtn.addEventListener('click', function () {
//     formContainer.classList.add('hide-form');
// });

// Scroll Reveal
ScrollReveal().reveal('#responsive-img',
    { 
        duration: 2000,
        origin: 'left',
        distance: '100px',
        // delay: 200,
        mobile: true,
        reset: true
    });
ScrollReveal().reveal('#responsive-content',
    { 
        duration: 2000,
        origin: 'right',
        distance: '100px',
        // delay: 200,
        mobile: true,
        reset: true
    });
ScrollReveal().reveal('#modern-content',
    { 
        duration: 2000,
        origin: 'left',
        distance: '100px',
        // delay: 200,
        mobile: true,
        reset: true
    });
ScrollReveal().reveal('#modern-img',
    { 
        duration: 2000,
        origin: 'right',
        distance: '100px',
        // delay: 200,
        mobile: true,
        reset: true
    });
ScrollReveal().reveal('#results-content',
    { 
        duration: 2000,
        origin: 'right',
        distance: '100px',
        // delay: 200,
        mobile: true,
        reset: true
    });
ScrollReveal().reveal('#results-img',
    { 
        duration: 2000,
        origin: 'left',
        distance: '100px',
        // delay: 200,
        mobile: true,
        reset: true
    });
ScrollReveal().reveal('#start',
    { 
        duration: 2000,
        origin: 'bottom',
        distance: '100px',
        // delay: 200,
        mobile: true,
        reset: true
    });
