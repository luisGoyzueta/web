var zero = 0;
var iniPos = 0;
$(document).ready(function(){
    /* efecto scroll menu main */
    $(window).on('scroll', function(){
        $('.navbar').toggleClass('hide', $(window).scrollTop() > zero);
        zero = $(window).scrollTop();
        
        if($(window).scrollTop() > iniPos){
          $('.navbar').addClass('active');
        }else {
          $('.navbar').removeClass('active');
        }
    })

    /* toogle menu main */
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active');
    })
    $('li').click(function(){
      $('nav').toggleClass('active');
  })

    /* slider de clientes */
    $('.owl-carousel').owlCarousel({
        items: 6,
        loop:true,
        margin:10,
        nav: false,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0:{
              items: 1
            },
            600:{
              items: 2
            },
            1000:{
              items: 3
            }
        }
    });

    /* effect type home */
    new TypeIt('#companionMethods', {
      speed: 50,
      waitUntilVisible: true
    })
    .pause(3000)
    .type('<i class="fas fa-check-circle"></i><strong>Dc</strong>')
    .pause(500)
    .delete(2)
    .pause(1000)
    .type('<i class="fas fa-check-circle"></i><strong>Declaraciones</strong> Juradas ante la SUNAT.')
    .break()
    .pause(750)
    .type('<i class="fas fa-check-circle"></i><strong>Facturaci&oacute;n</strong> Electr&oacute;nica.')
    .break()
    .pause(750)
    .type('<i class="fas fa-check-circle"></i><strong>Asesor&iacute;a</strong> y Constultor&iacute;a Tributaria.')
    .break()
    .pause(750)
    .type('<i class="fas fa-check-circle"></i><strong>Planillas Electr&oacute;nicas</strong> de Trabajadores.')
    .break()
    .pause(750)
    .type('<i class="fas fa-check-circle"></i><strong>Constituci&oacute;n</strong> de Empresas.')
})







/*
$(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('nav').removeClass('active');
})
*/