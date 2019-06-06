$('.menu-btn').on('click', function(e){
    e.preventDefault();
    $('.menu').toggleClass('menu_active');
    $('.menu-btn_icon').toggleClass('menu-btn_icon__rotate');
})