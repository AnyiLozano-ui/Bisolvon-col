$(document).ready(() => {
    console.log()
    $('#next-page-1').on('click', () => {
        $('body').animate({
            scrollTop: $('#page-2').offset().top
        }, 1000)
    })
})