$(document).ready(function () {
  $('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
});


$(document).on("scroll", function () {
  if ($(document).scrollTop() > 100) {
    $("#banner").addClass("shrink");
    $("#banner").addClass("pos-fixed");
    $("#logoId").fadeIn();
    $("#sticky-search-box").fadeIn();
  } else {
    $("#banner").removeClass("shrink");
    $("#banner").removeClass("pos-fixed");
    $("#logoId").fadeOut();
    $("#sticky-search-box").fadeOut();

  }
});


$(document).ready(function () {
  $(".col-toggle").click(function () {
    $(".colors-main-box").slideToggle();
  });

});

$(document).ready(function () {
  $(".pat-toggle").click(function () {
    $(".pat-main-box").slideToggle();
  });

});


$(document).ready(function () {
  $(".pri-toggle").click(function () {
    $(".pri-main-box").slideToggle();
  });

});