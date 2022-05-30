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

        $(window).resize(function () {
            if ($(this).width() < 850 && count == 0) {

                $('.search-container').addClass('hide');
                menuToggle();
                searchHide();
                count++;
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

    //Close side menu on width < 850px

    $(window).resize(function () {
        if ($(this).width() > 850) {

            closeNav();

        }
    });

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

// Sidenav menu functions to open and close on "3 lines" icon

function openNav() {
    $('#sidenav-menu').css('width', '100%');
}

function closeNav() {
    $('#sidenav-menu').css('width', '0');

}


//Populate sidenav bar menu using a json list

let sidenavDynamic = () => {
    $.getJSON("./menujson.json", function (data) {

        //console.log(data);

        let array = [];
        for (let i = 0; i < data.length; i++) {
            array.push(data[i].opt);
        }

        console.log(array);

        // (B2) CREATE LIST
        var list = document.createElement("ul");
        for (let i of array) {
            let listItem = document.createElement("li");
            let aItem = document.createElement("a");
            aItem.innerHTML = i;
            listItem.appendChild(aItem);
            list.appendChild(listItem);
        }

        // (B3) APPEND LIST TO CONTAINER
        document.getElementById("sidenav-options").appendChild(list);

    })
}






