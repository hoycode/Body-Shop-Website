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

// Open-close responsive menu

function responsiveMenu() {
    let responsive = document.getElementById('menu');

    if (responsive.className === 'container-header') {
        responsive.addClass('.responsive');
    } else {
        responsive.className = 'container-header';
    }
}

//Background curtain (black) on search

function curtainSearch() {

    let searchElement = document.getElementById('search-bar');

    if (document.activeElement == searchElement) {
        document.getElementById('curtain').style.display = 'block';
    }
    window.onscroll = function () { window.scrollTo(0, 0); };

}


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

//Function to open the bag / shopping cart

function openBag() {
    let bag = document.getElementById('bag');

    if (bag.style.display == 'block') {
        bag.style.display = 'none';
    } else {
        bag.style.display = 'block';

    }
}

// Show / Hide menu items on search click

$(document).ready(function(){
    $('#search').click(function(){
        $('.menu-item').toggleClass('hide-item')
        /*$('.menu-icon').toggleClass('hide-item') */
    })
})






