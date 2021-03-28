$(function(){

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
    var mixer = mixitup('.filters__btn');
    var mixer = mixitup('.products-top__inner');
    var mixer = mixitup('.design__inner');
    var mixer = mixitup('.filters__btn');
});