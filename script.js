var isclosed = false

$(window).scroll(function(){
    if($(window).scrollTop() + $(document).scrollTop()>=$(document).height()/5 && !isclosed)
        $("#newsletter").slideDown(600, function () {
            $('#newsletter').css('display', 'block');
        });
});

function closePopup(){
isclosed = true;
    $('#newsletter').slideUp(600, function () {
        $('#newsletter').css('display', 'none');
    });
}