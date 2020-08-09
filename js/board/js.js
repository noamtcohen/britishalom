$(init);

function init(){
    $(".myDiv").off("click");
    $('.myDiv').on('click', handleClick);

    $('.close-icon').removeClass('fullscreen');

    $('.myDiv').click(function(e) {
        e = $(e.toElement);
        if (e.hasClass('fullscreen')) {
            e.off('click', handleClick);
        } else {
            e.on('click', handleClick);
        }
    });
}

function handleClick($e) {
    $e = $($e.toElement);
    $e.show();
    $e.addClass('fullscreen');
    $e.find('.close-icon').show();
    $e.find('.close-icon').on('click', function(e) {
        $e.removeClass('fullscreen');
        $e.find('.close-icon').hide();
        setTimeout(init,2000);
    });
}                          
