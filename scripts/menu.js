// Hide menu on scroll down
// Show menu on scroll up

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.container-header').outerHeight();

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
    var st = $(this).scrollTop();

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

//When the page is loaded, execute all the code (functions) inside

$(document).ready(function () {

    //Show or hide bag menu on bag-icon click (menu)

    $('#bag-icon').click(function () {
        $('.bag-container').toggleClass('hide');
    })

    //Shows the search-bar on the search-icon click (menu)

    $('#search-icon').click(function () {
        menuToggle();
        searchShow();
        $('.bag-container').addClass('hide');

        var count = 0;

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

    $('.overlay').click(function () {
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

const menuToggle = function () {
    $('.menu-item').toggleClass('hide');
    $('.menu-icons').toggleClass('hide')
}

const searchHide = function () {
    $('.search-container').addClass('hide');
    $('.overlay').addClass('hide');
    $('body').removeClass('hide-scrollbar');
    $('.container-header').removeClass('bgc');
}

const searchShow = function () {
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

var sidenavDynamic = function () {
    $.getJSON("../data/menujson.json", function (data) {

        // var array = [];
        // for (var i = 0; i < data.length; i++) {
        //     array.push(data[i].opt);
        // }

        // console.log(array);

        // var list = document.createElement("ul");
        // for (var i of array) {
        // var listItem = document.createElement("li");
        // var aItem = document.createElement("a");
        // aItem.innerHTML = i;
        // listItem.appendChild(aItem);
        // list.appendChild(listItem);
        // }

        // $("#sidenav-options").append(list);

        var list = document.createElement("ul");

        var myResult = data;

        for (var i in myResult) {
            if (myResult[i] instanceof Object) {

                //console.log(myResult[i]);

                $.each(myResult[i], function (key, value) {
                    //console.log(key + ": " + value);
                    if (key == "opt") {
                        var listItem = document.createElement("li");
                        var aItem = document.createElement("a");
                        aItem.innerHTML = value;
                        listItem.appendChild(aItem);
                        list.appendChild(listItem);
                    }
                });
            }
        }

        $("#sidenav-options").append(list);

    })
}

//Populate nav bar menu using a json list - AINDA NÃO FUNCIONA

var navDynamic = function () {
    $.getJSON("../data/menujson.json", function (data) {

        //console.log(data);

        var array = [];
        for (var i = 0; i < data.length; i++) {
            array.push(data[i].opt);
        }

        console.log(array);

        var list = document.createElement("ul");

        $(list).css('list-style', 'none');
        for (var i of array) {
            var listItem = document.createElement("li");
            var aItem = document.createElement("a");
            aItem.classList.add('menu-item');
            aItem.innerHTML = i;
            listItem.appendChild(aItem);
            list.appendChild(listItem);
        }

        $("#menu-options").append(list);
    })

}

//Populate countries menu using a json list

var countryDynamic = function () {
    $.getJSON("../data/eucountries.json", function (data) {

        //console.log(data);

        var arrayCountries = [];
        for (var i = 0; i < data.length; i++) {

            arrayCountries.push([data[i].name, data[i].language]);
        }

        var createList = function (i, arrayCountries, list) {

            var listItem = document.createElement("li");

            var aItem = document.createElement("a");
            var pItem = document.createElement("p");
            // var sItem = document.createElement("span");

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

        console.log(arrayCountries);

        var listCountryOne = document.createElement("ul");
        for (var i = 0; i < 11; i++) {
            createList(i, arrayCountries, listCountryOne);
        }

        var listCountryTwo = document.createElement("ul");
        for (var i = 11; i < 22; i++) {
            createList(i, arrayCountries, listCountryTwo);
        }

        var listCountryThree = document.createElement("ul");
        for (var i = 22; i < 33; i++) {
            createList(i, arrayCountries, listCountryThree);
        }

        var listCountryFour = document.createElement("ul");
        for (var i = 33; i < 43; i++) {
            createList(i, arrayCountries, listCountryFour);
        }

        $('.countries-list').append(listCountryOne);
        $('.countries-list').append(listCountryTwo);
        $('.countries-list').append(listCountryThree);
        $('.countries-list').append(listCountryFour);



    })
}

// const bagDynamicList = () => {

//     $.getJSON("../data/bag.json", function (data) {
//         var arrayBagOptions = [];

//         for (var i = 0; i < data.length; i++) {

//             arrayBagOptions.push(data[i].option);
//         }
//         console.log(arrayBagOptions);

//         var list = document.createElement("ul");

//         for (var i = 0; i < arrayBagOptions.length; i++) {

//             var listItem = document.createElement("li");
//             var aItem = document.createElement("a");

//             switch (i) {
//                 case 0:
//                     $('bag-options a').attr('id', 'menu-bag-icon');
//                     break;
//                 case 1:
//                     $('bag-options a').attr('id', 'menu-saved-icon');
//                     break;
//             }

//             listItem.appendChild(aItem);
//             list.appendChild(listItem);
//         }

//         $(".bag-options").append(list);
//     })

// }


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
    //var ptCount = 0;
    $(function () {
        $.ajax({
            url: "https://geo.ipify.org/api/v2/country?apiKey=at_474dIdFdbKouxBRhIED0n3meavWIl",
            data: {
                apiKey: api_key,
                ipAddress: ip
            },
            success: function (data) {
                $.getJSON("../data/countries.json", function (countries) {
                    for (var i = 0; i < countries.length; i++) {
                        if (countries[i].code === data.location.country) {
                            $("#ip-text").append(countries[i].name);
                            // ptCount ++;
                            // var ipTest = document.createElement("p");
                            // ipTest.innerHTML = ptCount;
                            //document.getElementById("ptCount").appendChild(ipTest);
                        }
                    }
                })

            }
        });
    });

})






