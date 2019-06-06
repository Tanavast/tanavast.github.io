$('.registration-btn').click(function(){
    $('.registration').addClass('registration_active');
    $('.bg_popup').fadeIn();

    $('.bg_popup').click(function(){
        $('.registration').removeClass('registration_active');
        $('.bg_popup').fadeOut();
    })
});

$('.registration_close_btn').click(function(){
    $('.registration').removeClass('registration_active');
    $('.bg_popup').fadeOut();
});


// ALREADY REGISTERED

$('.already_registered').click(function(){
    $('.registration').removeClass('registration_active');
    $('.bg_popup').fadeOut();
    $('.menu').addClass('menu_active');
    $('.menu-btn_icon').addClass('menu-btn_icon__rotate');
})

// ALREADY REGISTERED