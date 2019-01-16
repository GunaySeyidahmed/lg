$( document ).ready(function() {
   /*search*/

    $('.search__btn').click(function (e) {
            var searchInput=$('.search input');
            var searchForm=$('.search__form');
            e.preventDefault();
            e.stopPropagation();
            searchInput.focus();
            if(searchInput.val().length === 0){
                searchInput.toggleClass('search__open');
            }
            if(searchInput.hasClass('search__open')){
                if(searchInput.val().length !=0){
                    searchForm.submit();
                }
            }

        });

    $('.hamburger').click(function () {
        $(this).toggleClass('.hamburger hamburger--arrow is-active');
        $('.menu .menu__list').toggleClass('menu__responsive-nav');
    });

    $(document).on('click', function (event) {
        var searchInput=$('.search input');
        if (!$(event.target).closest('.search input').length) {
            searchInput.val('');
            searchInput.removeClass('search__open');
        }
    });

/*dropdown*/

    $('.menu .menu__list ul.navbar-nav .nav-item.menu__dropdown').hover(function() {
        $(this).find('.menu__dropdownContent').css('display','block');
    }, function() {
        $(this).find('.menu__dropdownContent').css('display','none');
    });

    /*carousel*/

    $('.header__slider .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:6,
                autoplay: ($('.header__slider .item').length > 5),
                mouseDrag: ($('.header__slider .item').length > 5),
            }
        }
    })
    $('.education__slider.owl-carousel').owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3,
                autoplay: ($('.education__slider .item').length < 3),
                mouseDrag: ($('.education__slider .item').length < 3),
            }
        }
    })

    $('.slider.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        items:1,
        navText: [
            "<i class='material-icons'>&#xe314</i>",
            "<i class='material-icons'>&#xe315</i>"
        ],
        responsive: {
            600:{
                nav: false
            },
            992:{
                nav:true
            }
        }
    })
    $('.mission__slider.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4,
                autoplay: ($('.header__slider .item').length < 4),
                mouseDrag: ($('.header__slider .item').length < 4),
            }
        }
    })

    $('.statistics__slider.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4,
                autoplay: ($('.statistics__slider .statistics__item').length > 4),
                mouseDrag: ($('.statistics__slider .item').length > 4),
            }
        }
    })

    $('.statistics__count').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text()}).animate({
                countNum: countTo
            },

            {

                duration: 3000,
                easing:'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                }

            });



    });


    if ($(".instagram .instagram__gallery").length>0) {
        var $insta = $(".instagram .instagram__gallery .instagram__link");
        var insta_len = $insta.length;
        //console.log(insta_len)
        var instaHeight = $('.instagram .instagram__gallery').height();

        for (var i = 0; i < insta_len - 1; i++) {

            var insta_t = $insta.eq(i).children('img').height() + $insta.eq(i + 1).children('img').height();
            //console.log($insta.eq(i).children('img').height())

            if (insta_t >= instaHeight || $(window).width() < 768) {
                $insta.eq(i).wrap('<div class="item"></div>')
            } else if (insta_t < instaHeight) {
                $insta.slice(i, i + 2).wrapAll('<div class="item"></div>');
                i++
            }
        }
    }
        $(".instagram .instagram__gallery .instagram__link>img").css('width' , '100%');

    $('.instagram__gallery-default.owl-carousel').owlCarousel({
        stagePadding: 75,
        margin: 30,
        nav: true,
        loop: true,
        dot: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

});