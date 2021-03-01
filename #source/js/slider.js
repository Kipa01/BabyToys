$('.intro-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    dots: true,
    prevArrow: '.intro-slider__prev',
    nextArrow: '.intro-slider__next',
    autoplay: true,
    autoplaySpeed: 2000
});

$('.products-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    responsive: [
    {
      breakpoint: 1141,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        dotsClass: 'hits__dots',
        arrows: true,
        prevArrow: '<button class="hits-slider__prev" aria-label="Previous" type="button" style=""><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-left" class="svg-inline--fa fa-caret-left fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"></path></svg></button>',
        nextArrow: '<button class="hits-slider__next" aria-label="Next" type="button" style=""><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" class="svg-inline--fa fa-caret-right fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg></button>',
        }
      },
      {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        dotsClass: 'hits__dots',
        arrows: true,
        prevArrow: '<button class="hits-slider__prev" aria-label="Previous" type="button" style=""><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-left" class="svg-inline--fa fa-caret-left fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"></path></svg></button>',
        nextArrow: '<button class="hits-slider__next" aria-label="Next" type="button" style=""><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" class="svg-inline--fa fa-caret-right fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg></button>',
        }
      },
      {
      breakpoint: 551,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        dotsClass: 'hits__dots',
        arrows: true,
        prevArrow: '<button class="hits-slider__prev" aria-label="Previous" type="button" style=""><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-left" class="svg-inline--fa fa-caret-left fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"></path></svg></button>',
        nextArrow: '<button class="hits-slider__next" aria-label="Next" type="button" style=""><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" class="svg-inline--fa fa-caret-right fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg></button>',
        }
      }
    ]
});

$('.category-slider__content').slick({
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    appendDots: '.category-slider__dots',
    customPaging: function(slider, i) {
      return '<div class="category-slider__dot"></div>';
    },
    responsive: [
    {
      breakpoint: 1141,
        settings: {
          slidesToShow: 4,
        }
      },
      {
      breakpoint: 769,
        settings: {
          slidesToShow: 2,        
        }
      },
      {
      breakpoint: 451,
        settings: {
          slidesToShow: 1,        
        }
      },
    ]
});

$('.stocks-slider').slick({
    slidesToShow: 1,
    dots: true,
    arrows: true,
    prevArrow: '<button class="stocks-slider__prev" aria-label="Previous" type="button" style=""><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-left" class="svg-inline--fa fa-caret-left fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"></path></svg></button>',
    nextArrow: '<button class="stocks-slider__next" aria-label="Next" type="button" style=""><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" class="svg-inline--fa fa-caret-right fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg></button>',
});