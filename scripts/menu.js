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
        $('.bag-container').toggleClass('hide');
    })

    //Seach Icon click

    $('#search-icon').click(function () {
        menuToggle();
        searchShow();
        $('.bag-container').addClass('hide');

        let count = 0;

        $(window).resize(function() {
            if ($(this).width() < 850 && count == 0) {
          
              $('.search-container').addClass('hide');
              menuToggle();
              searchHide();
              count ++;
            }
          });

    })

    //Close Icon click

    $('.link-close').click(function () {
        menuToggle();
        searchHide();

    })

    $('.overlay').click(() => {
        menuToggle();
        searchHide();

    })

})


//Functions

const menuToggle = () => {
    $('.menu-item').toggleClass('hide');
    $('.menu-icons').toggleClass('hide')
}

const searchHide = () => {
    $('.search-container').addClass('hide');
    $('.overlay').addClass('hide');
    $('body').removeClass('no-scrollbar');
    $('.container-header').removeClass('bgc');
}

const searchShow = () => {
    $('.search-container').removeClass('hide');
    $('.overlay').removeClass('hide');
    $('body').addClass('no-scrollbar');
    $('.container-header').addClass('bgc');
}









