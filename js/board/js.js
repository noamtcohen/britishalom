$(function(){
    $('.myDiv').on('click', handleClick);

    $('.myDiv').click(function(e) {
        e = $(e.toElement);
    if (e.hasClass('fullscreen')) {
        e.off('click', handleClick);
    } else {
        e.on('click', handleClick);
    }
    });

    //handle the 'X' to close
    $('.close-icon').on('click', function(e) {
        e = $(e.toElement).find(".contentContainer");
        e.find('.close-icon').hide();
        //e.find('.contentContainer').html('CLICK!');
        e.removeClass('fullscreen');
    });

    function handleClick($e) {
        $e = $($e.toElement);

        $e.addClass('fullscreen');
        $e.find('.close-icon').show();
        $e.find('.close-icon').on('click', function(e) {
            $e.removeClass('fullscreen');
            $e.find('.close-icon').hide();
        });
        // delay 1s then change the html inside
        $e.find('.contentContainer').delay(1000)
            .queue(function(n) {
            $(this).html($e.find(".contentContainer").html());$e.on('click', handleClick);
            n();
            });

        }
});

