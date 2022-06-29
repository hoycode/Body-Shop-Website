/*Script para fazer o dropdown menu dinâmico */

$(document).ready(function () {

    dynamicDropdown();
    changeImg();
})

/* Start of dynamic menu on dropdown */

var dynamicDropdown = function () {

    /* Start of variable declaration */

    var menuSurfId = '#menu-surf';
    var menuSkateId = '#menu-skate'
    var menuMensId = '#menu-mens';
    var menuWomensId = '#menu-womens';
    var menuKidsId = '#menu-kids';
    var menuBrandsId = '#menu-brands';
    var menuSalesId = '#menu-sales';
    var menuStoresId = '#menu-stores';

    /* End of variable declaration */

    /* Star of mouseover on "SURF" menu option */
    $(menuSurfId).mouseover(function () {
        var checkCase = 'SURF';
        populateMenu(checkCase);
        $('.dropdown-content').empty();
    });
    /* End of mouseover on "SURF" menu option */

    /* Star of mouseover on "SKATE" menu option */
    $(menuSkateId).mouseover(function () {
        // var images_skateboard = ['../assets/images/menu/dropdown-menu/skate/skateboards/skateboards.jpeg', '../assets/images/menu/dropdown-menu/skate/skateboards/skateboards_2.jpg'];
        // imgElement.src = images_skateboard[0];
        var checkCase = 'SKATE';
        populateMenu(checkCase);
        $('.dropdown-content').empty();

    });
    /* End of mouseover on "SKATE" menu option */

    /* Star of mouseover on "MENS" menu option */
    $(menuMensId).mouseover(function () {
        var checkCase = 'MENS';
        populateMenu(checkCase);
        $('.dropdown-content').empty();
    });
    /* End of mouseover on "MENS" menu option */

    /* Star of mouseover on "WOMENS" menu option */
    $(menuWomensId).mouseover(function () {
        $('.dropdown-content').append(menuList);
        $(aItem).text('CLOTHING');
        $(menuList).append(aItem);
    });
    /* End of mouseover on "WOMENS" menu option */

    /* Star of mouseover on "KIDS" menu option */
    $(menuKidsId).mouseover(function () {
        $('.dropdown-content').append(menuList);
        $(aItem).text('CLOTHING');
        $(menuList).append(aItem);
    });
    /* End of mouseover on "KIDS" menu option */

    /* Star of mouseover on "BRANDS" menu option */
    $(menuBrandsId).mouseover(function () {
        $('.dropdown-content').append(menuList);
        $(aItem).text('BRANDS');
        $(menuList).append(aItem);
    });
    /* End of mouseover on "BRANDS" menu option */

    /* Star of mouseover on "SALES" menu option */
    $(menuSalesId).mouseover(function () {
        $('.dropdown-content').append(menuList);
        $(aItem).text('SALES');
        $(menuList).append(aItem);
    });
    /* End of mouseover on "SALES" menu option */

    /* Star of mouseover on "OUR STORES" menu option */
    $(menuStoresId).mouseover(function () {
        $('.dropdown-content').append(menuList);
        $(aItem).text('OUR STORES');
        $(menuList).append(aItem);
    });
    /* End of mouseover on "OUR STORES" menu option */


}

/* End of dynamic menu on dropdown */

var populateMenu = function (checkCase) {

    $.getJSON("../data/menujson.json", function (data) {

        var myResult = data;

        for (var i in myResult) {
            if (myResult[i] instanceof Object) {
                $.each(myResult[i], function (key, value) {
                    // console.log(key + ": " + value);
                    switch (myResult[i].opt) {
                        case 'SURF':
                            if (checkCase == myResult[i].opt) {
                                for (var j in value) {
                                    if (key == "cat") {
                                        // console.log(key + ": " + value);

                                        $.each(value[j], function (key1, value1) {
                                            if (key1 == "opt") {
                                                console.log(key1 + ": " + value1);
                                                createElements(value1);
                                                // console.log(value.length);
                                            }
                                        })

                                    }
                                }
                            }

                            break;

                        case 'SKATE':
                            if (checkCase == myResult[i].opt) {
                                for (var j in value) {
                                    if (key == "cat") {
                                        // console.log(key + ": " + value);

                                        $.each(value[j], function (key1, value1) {
                                            if (key1 == "opt") {
                                                console.log(key1 + ": " + value1);
                                                createElements(value1);
                                                // console.log(value.length);
                                            }
                                        })

                                    }
                                }
                            }

                            break;

                        case 'MENS':
                            if (checkCase == myResult[i].opt) {
                                for (var j in value) {
                                    if (key == "cat") {
                                        // console.log(key + ": " + value);

                                        $.each(value[j], function (key1, value1) {
                                            if (key1 == "opt") {
                                                console.log(key1 + ": " + value1);
                                                createElements(value1);
                                                // console.log(value.length);
                                            }
                                        })

                                    }
                                }
                            }

                            break;
                    }

                })

            }
        }
    })
}

var createElements = function (value1) {

    var images_surfboards = ['../assets/images/menu/dropdown-menu/surf/surfboards/surfboards.jpg', '../assets/images/menu/dropdown-menu/surf/surfboards/surfboards_2.jpg'];
    var images_wetsuits = ['../assets/images/menu/dropdown-menu/surf/wetsuits/wetsuits.jpg', '../assets/images/menu/dropdown-menu/surf/wetsuits/wetsuits_2.jpg'];

    var menuList = document.createElement('div');
    menuList.classList = 'menu-list';

    var aItem = document.createElement('a');
    aItem.classList = 'header-list';

    var imgElement = document.createElement('img');
    var list = document.createElement('ul');
    var liItem = document.createElement('li');

    // console.log(i);

    // $('img')[i].id = 'imageMenu' + i;

    $(aItem).text(value1);

    $('.dropdown-content').append(menuList);
    $(menuList).append(aItem);
    $(menuList).append(imgElement);
    $(menuList).append(list);
    $(list).append(liItem);

    // $("#imageMenu0").attr('src', images_surfboards[0]);
    // $("#imageMenu1").attr('src', images_surfboards[1]);
    // $("#imageMenu2").attr('src', images_surfboards[0]);

    $(imageSlider).append(imgTagSlider);
    $('.dropdown-content').append(imageSlider);
    
}

/* Start of the slide show on dropdown menu */


var imageSlider = document.createElement('div');
var imgTagSlider = document.createElement('img');
imageSlider.classList = 'image-slider';
$(imgTagSlider).attr('name', 'slide');

var i = 0;
var images = ['../assets/images/menu/imgSlider1.jpg', '../assets/images/menu/imgSlider2.jpg', '../assets/images/menu/imgSlider3.jpeg'];
var time = 1000;

var changeImg = function () {

    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);

}

/* End of the slide show on dropdown menu */