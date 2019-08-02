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
            $(".navbar").css('background-color', '#FFBB00');
            $(".navbar").css('transition', '500ms ease');
            $(".nav-link").css('color', 'black');
            $(".navbar-brand").css('color', 'black');
          } 
          else {
            $('.navbar-default').css('background-color', 'transparent');
            $('.nav-link').css('color', 'white');
            $('.navbar-brand').css('color', 'white');
          }
    });
  }
});