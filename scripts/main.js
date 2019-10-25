$(document).ready(function() {
  var $header = $("header");
  var $sticky = $header.before($header.clone().addClass("sticky"));

  $(window).on("scroll", function() {
    var scrollFromTop = $(window).scrollTop();
    $("body").toggleClass("scroll", scrollFromTop > 350);
  });

  $(".grid").masonry({
    itemSelector: ".grid-item",
    columnWidth: 120,
    fitWidth: true
  });

  //slick slider

  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    arrows: true,
    dots: false,
    centerMode: true,
    fade: false,
    mobileFirst: true,
    infinite: true,
    cssEase: "linear",
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',

    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  });

  // $(".slider").slick({
  //   responsive: [
  //     {
  //       breakpoint: 990,
  //       slidesToShow: 2
  //     }
  //   ]
  // });

  //----------------Smooth Scroll---------//
  $('.menu li a[href^="#"]').on("click", function(e) {
    e.preventDefault();

    var target = $(this.hash);
    if (target.length) {
      $("html,body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 60
          },
          1000
        );
    }
  });

  // ------Responsive Menu Start-----//

  var body = $("body");
  var menuTrigger = $(".js-menu-trigger");
  var mainOverlay = $(".js-main-overlay");

  menuTrigger.on("click", function() {
    body.addClass("menu-is-active");
  });

  $(".menu li a").on("click", function() {
    $("body").removeClass("menu-is-active");
  });

  mainOverlay.on("click", function() {
    body.removeClass("menu-is-active");
  });
});
