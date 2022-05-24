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

// Hide Header on on scroll down

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
        $('.bag').hide();
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('.container-header').removeClass('nav-up').addClass('nav-down');
            $('.bag').hide();
        }
    }

    lastScrollTop = st;
}

$(document).ready(() => {

    //Show or hide bag menu on bag-icon click (menu)

    $('#bag-icon').click(() => {
        let bag = $('#bag');
        if (bag.css('display') == 'block') {
            bag.css('display', 'none');
        } else {
            bag.css('display', 'block');
        }
    })
    
    //Seach Icon click

    $('#search-icon').click(function () {
        menuToggle();
    })

    //Close Icon click

    $('.link-close').click(function () {
        menuToggle();
        closeSearchContainer();
        $('.container-header').css('background-color', 'white')

    })

    $('.overlay').click(() => {
        menuToggle();
        closeSearchContainer();
        $('.container-header').css('background-color', 'white')

    })
})


//Functions

menuToggle = () =>{
    $('.menu-item').toggleClass('hide-item');
    $('.search-container').toggleClass('active');
    $('.menu-icon').toggleClass('hide-item')
    $('.search-container').css('display', 'block');
    $('.container-header').css('background-color', 'rgba(0, 0, 0, 0.8)')
    overlayEffect();
}


overlayEffect = () => {
    let overlay = $('.overlay');
    if (overlay.css('display') == 'block') {
        overlay.css('display', 'none');
    
    } else {
        overlay.css('display', 'block');
        $('#bag').css('display', 'none');
    }
}

closeSearchContainer = () => {
    $('.search-container').css('display', 'none');
}








