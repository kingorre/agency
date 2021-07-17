$(function () {
  $('.top-slider__wrapper').slick({
    prevArrow: '<button class="top-slider__arrow top-slider__arrow--prev"><span class="sr-only">move to previous slide</span><svg><use xlink:href="images/sprites/sprite.svg#slider-left-arrow"></use></svg></button>',
    nextArrow: '<button class="top-slider__arrow top-slider__arrow--next"><span class="sr-only">Move to next slide</span><svg><use xlink:href="images/sprites/sprite.svg#slider-right-arrow"></use></svg></button>',
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('[data-fancybox="gallery"]').fancybox();

  'use strict'

  document.addEventListener("click", documentActions);

	function documentActions(e) {
		const targetElement = e.target;
    let burger = document.querySelector(".burger");
    let menuBody = document.querySelector(".menu");
		if (targetElement.classList.contains('burger')) {
			burger.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		} else {
      burger.classList.remove("_active");
			menuBody.classList.remove("_active");
    }
  }

  $('.menu__link, .logo').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top - 85;

      $('body,html').animate({ scrollTop: top }, 1000);
  });

  const headerElement = document.querySelector('.header');

  const callback = function (entries, observer) {
    if (entries[0].isIntersecting) {
      headerElement.classList.remove('_scroll');
    } else {
      headerElement.classList.add('_scroll');
    }
  };
  const headerObserver = new IntersectionObserver(callback);
  headerObserver.observe(headerElement);



  const animElements = document.querySelectorAll('.anim');
  const heightDelay = 100;
  const windowHeight = document.documentElement.clientHeight;

  let elemPositions = [];
  if (animElements.length > 0) {
    animElements.forEach(el => {
      elemPositions.push(el.getBoundingClientRect().top + pageYOffset);
    el.classList.add('_animate-off');
    });
  }

  window.addEventListener("scroll", changeClass);

  function changeClass() {
    let imgIndex = elemPositions.findIndex(
        item => pageYOffset > item - windowHeight + heightDelay
    );
    if (imgIndex >= 0) {
        animElements[imgIndex].classList.add('_animate-on');
    }
    delete elemPositions[imgIndex];
  }
})
