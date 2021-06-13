
$('a.modal-btn').on('click',function(e){
    e.preventDefault();
    let destination = $(this).attr('href');
    $(destination).fadeIn(700).animate();
});

$('a.modal-btn').click(function(){
    let destination = $(this).attr('href');

    let close = destination + ' .popup__close';
    $(close).click(function(){
    $(destination).fadeOut(700);
    });
    let popup = destination + ' .popup__overlay';
    $(popup).click(function(){
        $(destination).fadeOut(700);
});
});


if($(window).width() < 865){
    $('#burger').on('click',function(e){
        e.preventDefault();
        $('.ul__navbar_centerContent').toggleClass('show');
    });

$('.header .navbar ul.ul__navbar_centerContent a').on('click',function(e){
    e.preventDefault();
    $('.header .navbar ul.ul__navbar_centerContent').toggleClass('show');
});

};

$(document).ready(function() {
    $("a.scrollto").click(function() {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 800);
      return false;
    });
  });

  $('.scroll_top').click(function(){
    $('html, body').animate({scrollTop: 0}, 1000);
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            $('.scroll_top').addClass('active');
        }
        else{
            $('.scroll_top').removeClass('active');
        }
    });



