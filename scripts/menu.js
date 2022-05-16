// Open-close responsive menu

function ResponsiveMenu() {
    let responsive = document.getElementById("menu");
    if (responsive.className === "container-header") {
        responsive.className += "responsive";
    } else {
        responsive.className = "container-header";
    }
}

//Image opacity when search is on focus

function CurtainSearch() {

    let searchElement = document.getElementById("search-bar");

    if (document.activeElement == searchElement) {
        document.getElementById("curtain").hidden = false;       
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
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('.container-header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}





