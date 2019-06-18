// ПОЯВЛЕНИЕ БЛОКОВ ПРИ НАВЕДЕНИИ ЭКРАНА
$(window).scroll(function(){
    if ($(this).scrollTop() > 1850) {
        $('.about_block').addClass('about_block_active');
    } else {
        $('.about_block').removeClass('about_block_active');
    }
});
// ПОЯВЛЕНИЕ БЛОКОВ ПРИ НАВЕДЕНИИ ЭКРАНА


// ПЛАВНЫЙ СКРОЛЛ
$(document).ready(function(){
    $('.nav_menu').on("click","a", function(event){
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop:top}, 1500);
    })
})
// ПЛАВНЫЙ СКРОЛЛ

// MENU FIXED
$(window).scroll(function(){
    if ($(this).scrollTop() > 440) {
        $('.nav').addClass('nav__fixed');
    } else {
        $('.nav').removeClass('nav__fixed');
    }
});
// MENU FIXED