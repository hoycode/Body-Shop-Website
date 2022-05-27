/*window.onload = function loadMenu() {

    var menu = document.getElementById('menu-options');
    var menus = json.menus;
    for (let i = 0; i < menus.length; i++) {
        let aTag = document.createElement('a');
        aTag.innerHTML = menus[i].title;
        menu.appendChild(aTag);
        console.log(menus[i]);
    }
} */

// Hide menu on scroll down
// Show menu on scroll up

let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight = $('.container-header').outerHeight();

$(window).scroll(function () {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    let st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.container-header').removeClass('nav-down').addClass('nav-up');
        $('.bag-container').hide();
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('.container-header').removeClass('nav-up').addClass('nav-down');
            $('.bag-container').hide();
        }
    }

    lastScrollTop = st;
}

$(document).ready(() => {

    //Show or hide bag menu on bag-icon click (menu)

    $('#bag-icon').click(() => {
        let bag = $('.bag-container');
        if (bag.css('display') == 'block') {
            bag.css('display', 'none');
        } else {
            bag.css('display', 'block');
        }
    })

    //Seach Icon click

    $('#search-icon').click(function () {
        menuToggle();
        $('.search-container').removeClass('hide');
        $('body').addClass('no-scrollbar');
    })

    //Close Icon click

    $('.link-close').click(function () {
        menuToggle();
        $('.search-container').addClass('hide');
        $('body').removeClass('no-scrollbar');

    })

    $('.overlay').click(() => {
        menuToggle();
        $('.search-container').addClass('hide');
        $('.container-header').css('background-color', 'white')
        $('body').removeClass('no-scrollbar');


    })

    //Window width function

     if ($(window).width() < 850) {
         alert('Less than 960');
     }
     else {
         alert('More than 960');
     }
})


//Functions

menuToggle = () => {
    $('.menu-item').toggleClass('hide');
    $('.menu-icons').toggleClass('hide')
    $('.container-header').css('background-color', 'rgba(0, 0, 0, 0.8)')
    overlayEffect();
}


overlayEffect = () => {
    let overlay = $('.overlay');
    if (overlay.css('display') == 'block') {
        overlay.css('display', 'none');

    } else {
        overlay.css('display', 'block');
        $('.bag-container').css('display', 'none');
    }
}










