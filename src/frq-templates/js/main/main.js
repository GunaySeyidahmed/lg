$( document ).ready(function() {
   /*search*/





    $('.search__btn').click(function (e) {
            var searchInput=$('.search input');
            var searchForm=$('.search__form');
            e.preventDefault();
            e.stopPropagation();
            if(searchInput.val().length === 0){
                searchInput.toggleClass('search__open');
            }
            if(searchInput.hasClass('search__open')){
                if(searchInput.val().length !=0){
                    searchForm.submit();
                }
            }

        });


    // $('.search__btn').click(function (e) {
    //     e.stopPropagation();
    // });

    $(document).on('click', function (event) {
        var searchInput=$('.search input');
        if (!$(event.target).closest('.search input').length) {
            searchInput.val('');
            searchInput.removeClass('search__open');
        }
    });


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


});