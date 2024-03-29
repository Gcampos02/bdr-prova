jQuery(function () {
  structure.init();
});

var structure = {
  init: function () { }
};

var home = {
  init: function () {
    this.slickHeader();
    this.toggleHeader();
    this.mascaras();
    this.scrollTo();
    this.buttonTop();
  },

  slickHeader: function () {
    $('.slick-header').slick({
      lazyLoad: 'ondemand',
      infinite: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
    });

    $('.slick-section').slick({
      lazyLoad: 'ondemand',
      infinite: true,
      dots: false,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


  },

  toggleHeader: function () {
    $('.header-toggle').on('click', function () {
      $(this).find('i').toggleClass('header-toggle__arrow-down header-toggle__arrow-up');
      $(this).next('.content-toggle').slideToggle(600);
      $(this).toggleClass('header-toggle-active', 'slow');
    });
  },

  mascaras: function () {
    $('.phone_with_ddd').mask('(00) 0 0000-0000');
  },

  scrollTo: function () {
    $('.scrollTo').click(function () {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 500);
      return false;
    });
  },

}