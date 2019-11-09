$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
        items:5
        }
    }
});

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
    }
  });
});

$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    if (startchange.length){
      $(document).scroll(function() { 
        scroll_start = $(this).scrollTop();
          if(scroll_start > offset.top) {
            $('.navbar').css('opacity', '1');
            $('.navbar').css('background-color', '#FFBB00');;
            $('.navbar').css('transition', '.5s ease-in-out')

          } 
          else{
            $('.navbar').css('opacity', '0');
          }
          
    });
  }
});

