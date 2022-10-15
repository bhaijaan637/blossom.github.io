
$(document).ready(function(){

  $('.top-search a').on('click', function(e) {
       e.preventDefault();
       });
  
  $('.top-search a').click(function(){
    $('.search').toggleClass('show-input');
  });

  $(window).width(function(){
      if ($(window).outerWidth() <= 991) {
       $('.has-child a').on('click', function(e) {
       e.preventDefault();
       });
      }
    });

  $('.has-child a').click(function(){
    $(this).siblings('.menu-container').addClass('open');
    });
  $('.menu-links .bck-1').click(function(){
    $('.menu-container').removeClass('open');
  });

  $('.nav-item a').click(function(){
    $(this).siblings('.sub-menu').addClass('open-again');
    });
  $('.sub-menu .bck-2').click(function(){
    $('.sub-menu').removeClass('open-again');
  });

  $('.nav-item a').click(function(){
    $(this).siblings('.inner-sub-menu').addClass('open-again');
  });
  $('.inner-sub-menu .bck-3').click(function(){
    $('.inner-sub-menu').removeClass('open-again');
  });
  $(window).on('scroll' , function(){
      if($(window).scrollTop() > 10){
       $('.search').removeClass('show-input');
      }
    });
});