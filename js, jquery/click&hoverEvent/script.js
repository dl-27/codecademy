$(document).ready(function(){
    $(document).on('click', 'div', function(){
        $('div').fadeOut('fast');
        });
    $(document).on('hover', 'div', function(){
        $('div').addClass('red');
        });
    });