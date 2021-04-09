$(function(){
  $(".shop-filters__btn").on("click", function () {
    $(".shop-left-sidebar").slideToggle()
  });

  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });

  $(".related__inner").slick({
    infinite:false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow:2,
        }
      }
    ],
    // responsive: [
    //   {
    //     breakpoint: 441,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ]
  });

  $(".product-page__tab-link").on("click", function(a){
    a.preventDefault();
    $(".product-page__tab-link").removeClass("product-page__tab-link--active");
    $(this).addClass("product-page__tab-link--active");
    $(".product-page__tab__content").removeClass("product-page__tab__content--active");
    $($(this).attr("href")).addClass("product-page__tab__content--active");
  });

  $(".product-page__slider-main").slick({
    asNavFor: ".product-page__slider-sub",
    draggable: false,
    arrows: false,
    fade: true,
  });

  $(".product-page__slider-sub").slick({
    asNavFor: ".product-page__slider-main",
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });

  $(".product-page__input").styler({
  });

    $(".shop__filter__price__range-slider").ionRangeSlider({
        type: "double",
        step:"0.01",
        onChange: function (data) {
           $(".shop__filter__price__number__from").text(data.from);
           $(".shop__filter__price__number__to").text(data.to);
        },
    });

    $(".star-rate").rateYo({
        starWidth: "10px",
        starHeight:"10px",
        ratedFill: "#ffcc00",
        readOnly: true,
      });
      $(".product-page__star-rate").rateYo({
        starWidth: "15px",
        starHeight:"15px",
        ratedFill: "#ffcc00",
        readOnly: true,
      });
      $(".shop-content__page-2__item__star-rate").rateYo({
        starWidth: "20px",
        starHeight:"20px",
        ratedFill: "#ffcc00",
        readOnly: true
      });

    $('.top-slider__wrapper').slick({
        arrows:false,
        dots:true,
        slidesToShow:1,
        slidesToScroll:1,
        fade:true,
    });
  // var mixitup = require('mixitup');
  
    var mixerOne = mixitup('.filters__btn');
    var mixerOne = mixitup('.products-top__inner');
    var mixerTwo = mixitup('.design__inner');
    var mixerTwo = mixitup('.filters__btn');
});