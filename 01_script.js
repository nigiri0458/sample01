$(function() {
    $('.bars').click(function() {
        if($('.bars').hasClass('open')){
            $(this).removeClass('open');
            $('.smart-menu').hide(500);
        }else{
            $(this).addClass('open');
            $(('.smart-menu')).show(500);
            $('.sub-menu').hide();
        }
    });

    $('.text1-menu').click(function() {
        if($(this).hasClass('text1-open')){
            $(this).removeClass('text1-open');
            $('.sub-menu').hide(500);
        }else{
            $(this).addClass('text1-open');
            $('.sub-menu').show(500);
        }
    });

    $('.top-container').hover(
        function() {
            $('.top-container h1').css('font-size', '60px').css('opacity', '1').css('transition', 'all 0.05s').css('transform', 'translateY(-40px)');
        },
        function() {

        }
    );
});
