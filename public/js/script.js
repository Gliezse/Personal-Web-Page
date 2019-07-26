function menuToggle(){
    if($('#menu').css('right') == '0px'){
        $('#menu').css({'right':'-100%'})
    }else{
        $('#menu').css({'right':'0'})
    }    
}

function goTo( where ){

    $('section').addClass('d-none')

    $(`#${where}`).removeClass('d-none')

    $('.menu-opt').removeClass('curr-page')

    $(`.${where}-opt`).addClass('curr-page')

    $('#menu').css({'right':'-100%'})
}