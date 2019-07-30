function menuToggle(){
    if($('#menu').css('right') == '0px'){
        $('#menu').css({'right':'-120%'})
    }else{
        $('#menu').css({'right':'0'})
    }    
}

function goTo( where ){

    $('section').addClass('d-none')

    $(`#${where}`).removeClass('d-none')

    $('.menu-opt').removeClass('curr-page')

    $(`.${where}-opt`).addClass('curr-page')

    $('#menu').css({'right':'-120%'})
}

let navItems = document.querySelectorAll('nav ul li a')
let sections = document.querySelectorAll('section')
/*
window.onscroll = function () {
    let fromTop = window.pageYOffset
    
    if (fromTop >= $('nav').offset().top) {
        $('nav').addClass('sticky-top')
    } else {
        $('nav').removeClass('sticky-top')
    }

    navItems.forEach(link => {
        let section = document.querySelector(link.hash)
        
        if (
            section.offsetTop <= fromTop+200 &&
            section.offsetTop + section.offsetHeight > fromTop
        ){
            link.parentElement.classList.add('active')
        }else{
            link.parentElement.classList.remove('active')
        }
    })
}*/

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - $('nav').css('height').slice(0,-2)
        }, 1000)
      }
    }
  });

$('nav').focus(function(){
    alert('focused')
})