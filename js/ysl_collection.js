$(document).ready(function(){
    colSlider();
});

function colSlider(){
    var settings={
      pagerType:'short',
      pagerShortSeparator:'/',
      speed: 500,
      adaptiveHeight: true,
      adaptiveHeightSpeed: 500,
      shrinkItems: true,
      easing: 'ease-in-out',
      captions: false,
      slideWidth: 440,
      minSlides: 1,
      maxSlides: 3,
      slideMargin: 40
    };
    var slider=$(".colSlider").bxSlider(settings);
    $(window).resize(function(){
      if(window.matchMedia("(min-width: 1280px)").matches) {
        settings.maxSlides = 3;
        slider.reloadSlider(settings);
      }else if(window.matchMedia("(min-width: 768px)").matches){
        settings.maxSlides = 2;
        slider.reloadSlider(settings);
      }else{
        settings.maxSlides = 1;
        slider.reloadSlider(settings);
      }
    });
  }