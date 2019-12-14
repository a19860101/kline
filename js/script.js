$(function(){
    $('#scroll_down').click(function(){
        var target = $(this).data('target');
        // console.log(target);
        var o = $(target).offset().top;
        // console.log(o);
        $('html,body').animate({
            scrollTop:o
        },1000)
        return false;
    })
    $('nav a').click(function(){
        var t = $(this).data('target');
        var o = $(t).offset().top;
        $('html,body').animate({
            scrollTop:o
        },1000)
        return false;
    })


})