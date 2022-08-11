$(document).ready(function(){
      $(".search").click(function(){
        $(".search-container").toggleClass("add");
      });
    
      $('.carousel2').owlCarousel({
          loop:true,
          margin:10,
          nav:false,
          autoplay:true,
          dots: true,
          smartSpeed:1500,
          autoplayTimeout:3000,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:3
              }
          }
    });
      $('.carousel3').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});
      $('.counter-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
          
          //chnage count up speed here
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});      
    