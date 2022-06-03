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
        if ($('.sidenav-menu').width() > 850) {
            closeNav();
        }
    });

    // $('.country').click(() => {
    //     closeNavCountry();
    // })
})


//Functions

const menuToggle = () => {
    $('.menu-item').toggleClass('hide');
    $('.menu-icons').toggleClass('hide')
}

const searchHide = () => {
    $('.search-container').addClass('hide');
    $('.overlay').addClass('hide');
    $('body').removeClass('hide-scrollbar');
    $('.container-header').removeClass('bgc');
}

const searchShow = () => {
    $('.search-container').removeClass('hide');
    $('.overlay').removeClass('hide');
    $('body').addClass('hide-scrollbar');
    $('.container-header').addClass('bgc');
}

// Sidenav menu functions to open and close on "3 lines" icon

function openNav() {
    $('.sidenav-menu').css('width', '100%');
    $('body').addClass('hide-scrollbar');
}

function closeNav() {
    $('.sidenav-menu').css('width', '0');
    $('body').removeClass('hide-scrollbar');

}

//Sidenav menu for countries

function openNavCountry() {
    $('.sidenav-country').css('width', '100%');
    $('body').addClass('hide-scrollbar');
}

function closeNavCountry() {
    $('.sidenav-country').css('width', '0');
    $('body').removeClass('hide-scrollbar');

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
        $("#sidenav-options").append(list);

    })
}

//Populate nav bar menu using a json list

let navDynamic = () => {
    $.getJSON("./menujson.json", function (data) {

        //console.log(data);

        let array = [];
        for (let i = 0; i < data.length; i++) {
            array.push(data[i].opt);
        }

        console.log(array);

        // (B2) CREATE LIST

        var list = document.createElement("ul");
        $(list).css('list-style', 'none');
        for (let i of array) {
            let listItem = document.createElement("li");
            let aItem = document.createElement("a");
            aItem.classList.add('menu-item');
            aItem.innerHTML = i;
            listItem.appendChild(aItem);
            list.appendChild(listItem);
        }

        // (B3) APPEND LIST TO CONTAINER
        $("#menu-options").append(list);

    })

}

//Populate countries menu using a json list

let countryDynamic = () => {
    $.getJSON("./eucountries.json", function (data) {

        //console.log(data);

        let arrayCountries = [];
        for (let i = 0; i < data.length; i++) {

            arrayCountries.push([data[i].name, data[i].language]);
        }

        console.log(arrayCountries);

        // (B2) CREATE LIST
        var list = document.createElement("ul");

        for (let i = 0; i < arrayCountries.length; i++) {
            let listItem = document.createElement("li");
            
                    let aItem = document.createElement("a");
                    let pItem = document.createElement("p");
                    // let sItem = document.createElement("span");

                    aItem.innerHTML = arrayCountries[i][0];
                    pItem.innerHTML = arrayCountries[i][1];

                    //aItem.classList.add('country');
                    aItem.setAttribute('href', data[i].href);
                    // sItem.classList.add('fi');
                    // sItem.classList.add('fi-gr');


                    listItem.appendChild(aItem);
                    listItem.appendChild(pItem);
                    // listItem.appendChild(sItem);
                    list.appendChild(listItem);

            
        }

        // (B3) APPEND LIST TO DIV
        $('.countries-list').append(list);

    })
}


//Get country by IP

/* Add "https://api.ipify.org?format=json" statement
           this will communicate with the ipify servers in
           order to retrieve the IP address $.getJSON will
           load JSON-encoded data from the server using a
           GET HTTP request */

// $.getJSON("https://api.ipify.org?format=json", function (data) {

//     // Setting text of element <p> with id 'ip-text'
//     if (data.ip === '85.246.152.88') {
//         $("#ip-text").html('Portugal');
//     } else
//         $("#ip-text").text('England');
// })

$.getJSON("https://api64.ipify.org?format=json", function (json) {

    var ip = json.ip;
    var api_key = "at_474dIdFdbKouxBRhIED0n3meavWIl";
    //let ptCount = 0;
    $(function () {
        $.ajax({
            url: "https://geo.ipify.org/api/v2/country?apiKey=at_474dIdFdbKouxBRhIED0n3meavWIl",
            data: {
                apiKey: api_key,
                ipAddress: ip
            },
            success: function (data) {
                $.getJSON("./countries.json", function (countries) {
                    for (let i = 0; i < countries.length; i++) {
                        if (countries[i].code === data.location.country) {
                            $("#ip-text").append(countries[i].name);
                            // ptCount ++;
                            // let ipTest = document.createElement("p");
                            // ipTest.innerHTML = ptCount;
                            //document.getElementById("ptCount").appendChild(ipTest);
                        }
                    }
                })

            }
        });
    });

})






