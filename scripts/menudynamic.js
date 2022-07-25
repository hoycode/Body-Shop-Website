/*Script para fazer o dropdown menu dinâmico */

var sliderImages = [3];
var imgCount = 0;
var menuListCount = 0;

// var borderId = '';
// $(borderId).css('border-bottom', '2px solid #333');
// $(borderId).css('transition', 'none');
// console.log(borderId);

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
        sliderImages = ['../assets/images/menu/image-slider/surf/imgSlider1.jpg', '../assets/images/menu/image-slider/surf/imgSlider2.jpg', '../assets/images/menu/image-slider/surf/imgSlider3.jpg'];
        var checkCase = 'SURF';
        populateMenu(checkCase);
        $('.dropdown-content').empty();
        imgCount = 0;
    });

    /* End of mouseover on "SURF" menu option */

    /* Star of mouseover on "SKATE" menu option */
    $(menuSkateId).mouseover(function () {

        sliderImages = ['../assets/images/menu/image-slider/skate/imgSlider1.jpg', '../assets/images/menu/image-slider/skate/imgSlider2.jpg', '../assets/images/menu/image-slider/skate/imgSlider3.jpg'];
        var checkCase = 'SKATE';
        populateMenu(checkCase);
        $('.dropdown-content').empty();
        imgCount = 0;
    });

    /* End of mouseover on "SKATE" menu option */

    /* Star of mouseover on "MENS" menu option */
    $(menuMensId).mouseover(function () {
        sliderImages = ['../assets/images/menu/image-slider/mens/ImgSlider1.jpg', '../assets/images/menu/image-slider/mens/ImgSlider2.jpg', '../assets/images/menu/image-slider/mens/ImgSlider3.jpg'];
        var checkCase = 'MENS';
        populateMenu(checkCase);
        $('.dropdown-content').empty();
        imgCount = 0;
    });
    /* End of mouseover on "MENS" menu option */

    /* Star of mouseover on "WOMENS" menu option */
    $(menuWomensId).mouseover(function () {
        sliderImages = ['../assets/images/menu/image-slider/womens/ImgSlider1.jpg', '../assets/images/menu/image-slider/womens/ImgSlider2.jpg', '../assets/images/menu/image-slider/womens/ImgSlider3.jpg'];
        var checkCase = 'WOMENS';
        populateMenu(checkCase);
        $('.dropdown-content').empty();
        imgCount = 0;

    });
    /* End of mouseover on "WOMENS" menu option */

    /* Star of mouseover on "KIDS" menu option */
    $(menuKidsId).mouseover(function () {
        sliderImages = ['../assets/images/menu/image-slider/kids/imgSlider1.jpg', '../assets/images/menu/image-slider/kids/imgSlider2.jpg', '../assets/images/menu/image-slider/kids/imgSlider3.jpg'];
        var checkCase = 'KIDS';
        populateMenu(checkCase);
        $('.dropdown-content').empty();
        imgCount = 0;

    });
    /* End of mouseover on "KIDS" menu option */

    /* Star of mouseover on "BRANDS" menu option */
    $(menuBrandsId).mouseover(function () {

    });
    /* End of mouseover on "BRANDS" menu option */

    /* Star of mouseover on "SALES" menu option */
    $(menuSalesId).mouseover(function () {

    });
    /* End of mouseover on "SALES" menu option */

    /* Star of mouseover on "OUR STORES" menu option */
    $(menuStoresId).mouseover(function () {

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
                                                // console.log(key1 + ": " + value1);
                                                // console.log(value.length);
                                                var imagesSurf = ['../assets/images/menu/dropdown-menu/surf/surfboards/surfboards.jpg', '../assets/images/menu/dropdown-menu/surf/wetsuits/wetsuits.jpg', '../assets/images/menu/dropdown-menu/surf/surfgear/surfgear.jpg'];
                                                createElements(imagesSurf, value1);
                                            }

                                            if (key1 == "subcat") {
                                                for (var k in value1) {
                                                    $.each(value1[k], function (key2, value2) {

                                                        if (key2 == "opt") {
                                                            console.log(key2 + ": " + value2)
                                                            createContent(value2);
                                                        }
                                                    })
                                                }
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
                                                var imagesSkate = ['../assets/images/menu/dropdown-menu/skate/skateboards/skateboards.jpeg', '../assets/images/menu/dropdown-menu/skate/hardware/hardware.jpg'];
                                                // console.log(key1 + ": " + value1);
                                                createElements(imagesSkate, value1);
                                                // console.log(value.length);
                                            }

                                            if (key1 == "subcat") {
                                                for (var k in value1) {
                                                    $.each(value1[k], function (key2, value2) {

                                                        if (key2 == "opt") {
                                                            console.log(key2 + ": " + value2)
                                                            createContent(value2);
                                                        }
                                                    })
                                                }
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
                                                var imagesMens = ['../assets/images/menu/dropdown-menu/mens/clothing/clothing.jpg', '../assets/images/menu/dropdown-menu/mens/footwear/footwear.jpg', '../assets/images/menu/dropdown-menu/mens/accessories/accessories.jpg'];
                                                // console.log(key1 + ": " + value1);
                                                createElements(imagesMens, value1);
                                                // console.log(value.length);
                                            }

                                            if (key1 == "subcat") {
                                                for (var k in value1) {
                                                    $.each(value1[k], function (key2, value2) {

                                                        if (key2 == "opt") {
                                                            console.log(key2 + ": " + value2)
                                                            createContent(value2);
                                                        }
                                                    })
                                                }
                                            }
                                        })

                                    }
                                }
                            }

                            break;

                        case 'WOMENS':
                            if (checkCase == myResult[i].opt) {
                                for (var j in value) {
                                    if (key == "cat") {
                                        // console.log(key + ": " + value);

                                        $.each(value[j], function (key1, value1) {
                                            if (key1 == "opt") {
                                                var imagesWomens = ['../assets/images/menu/dropdown-menu/womens/clothing/clothing.jpg', '../assets/images/menu/dropdown-menu/womens/footwear/footwear.jpg', '../assets/images/menu/dropdown-menu/womens/accessories/accessories.jpg'];
                                                // console.log(key1 + ": " + value1);
                                                createElements(imagesWomens, value1);
                                                // console.log(value.length);
                                            }

                                            if (key1 == "subcat") {
                                                for (var k in value1) {
                                                    $.each(value1[k], function (key2, value2) {

                                                        if (key2 == "opt") {
                                                            console.log(key2 + ": " + value2)
                                                            createContent(value2);
                                                        }
                                                    })
                                                }
                                            }
                                        })

                                    }
                                }
                            }

                            break;

                        case 'KIDS':
                            if (checkCase == myResult[i].opt) {
                                for (var j in value) {
                                    if (key == "cat") {
                                        // console.log(key + ": " + value);

                                        $.each(value[j], function (key1, value1) {
                                            if (key1 == "opt") {
                                                var imagesKids = ['../assets/images/menu/dropdown-menu/kids/clothing/clothing.jpg', '../assets/images/menu/dropdown-menu/kids/footwear/footwear.jpg', '../assets/images/menu/dropdown-menu/kids/accessories/accessories.jpg'];
                                                // console.log(key1 + ": " + value1);
                                                createElements(imagesKids, value1);
                                                // console.log(value.length);
                                            }

                                            if (key1 == "subcat") {
                                                for (var k in value1) {
                                                    $.each(value1[k], function (key2, value2) {

                                                        if (key2 == "opt") {
                                                            console.log(key2 + ": " + value2)
                                                            createContent(value2);
                                                        }
                                                    })
                                                }
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

/* Start of the createElements function (generate the tags for the dropdown content) */

var createElements = function (imageArray, value1) {

    var menuList = document.createElement('div');
    menuList.classList = 'menu-list';
    // $(menuList).attr('id', 'menuList' + menuListCount++); //Gives an id based on menuListCount


    var aItem = document.createElement('a');
    aItem.classList = 'header-list';

    var list = document.createElement('ul');

    $(aItem).text(value1);

    $('.dropdown-content').append(menuList);
    $(menuList).append(aItem);
    $(imageSlider).append(imgTagSlider);
    $('.dropdown-content').append(imageSlider);

    var imgElement = document.createElement('img');
    $(imgElement).attr('id', 'imageMenu' + imgCount++);
    $(menuList).append(imgElement);
    // console.log(imgCount);

    if (imageArray.length == 3) {
        $("#imageMenu0").attr('src', imageArray[0]);
        $("#imageMenu1").attr('src', imageArray[1]);
        $("#imageMenu2").attr('src', imageArray[2]);
    } else {
        $("#imageMenu0").attr('src', imageArray[0]);
        $("#imageMenu1").attr('src', imageArray[1]);
    }

    $(menuList).append(list);


}

var createContent = function (value2) {

    var liItem = document.createElement('li');
    var aItemSub = document.createElement('a');
    var spanItem = document.createElement('span');

    $('.menu-list ul').append(liItem);
    $(liItem).append(aItemSub);
    $(aItemSub).append(spanItem);
    $(spanItem).text(value2);

}


/* End of the createElements function (generate the tags for the dropdown content) */


/* Start of the slide show on dropdown menu */

var imageSlider = document.createElement('div');
var imgTagSlider = document.createElement('img');
imageSlider.classList = 'image-slider';
$(imgTagSlider).attr('name', 'slide');

var i = 0;
var time = 1000;

var changeImg = function () {

    document.slide.src = sliderImages[i];

    if (i < sliderImages.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);

}

/* End of the slide show on dropdown menu */



