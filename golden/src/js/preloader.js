document.body.onload = function() {
    setTimeout(function() {
        var preloader = document.getElementById('page_preloader');
        if( !preloader.classList.contains('preloader_done'))
        {
            preloader.classList.add('preloader_done')
        }
    }, 700)
}