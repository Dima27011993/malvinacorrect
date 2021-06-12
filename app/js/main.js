
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

$('#burger').on('click',function(e){
    e.preventDefault();
    $('.ul__navbar_centerContent').toggleClass('show');
});


