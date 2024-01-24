// $(function() {
//   AOS.init();
// });

//$(window).on('load', function() {
 // AOS.refresh();
//});

AOS.init({
  duration: 800,
  easing: 'slide',
  once: true
 });

         $(".owl-carousel").owlCarousel({
           margin: 20,
           loop: true,
           autoplay: true,
           items: 3 ,
           autoplayTimeout: 2000,
           autoplayHoverPause: true,
           
         });

$('input.value:first-child').val("$" + 0 + "-");
         $('input.value:nth-child(2)').val("$" + 500 );

         $('#slider-range').slider({
              min: 0,
              max: 500,
              step: 1,
              values: [ 0  , 500],
              range: true,
              slide: function(event, ui) {
                $.each(ui.values, function(i, v) {
                  if( i == 0 )  {
                  $('input.value').eq(i).val("$" + v + "-");
                } else {
                  $('input.value').eq(i).val("$" + v);
                }
                });
    }
  });

         $('input.value').change(function() {
    var $this = $(this);
    $('#slider-range').slider('values', $this.attr('data-index'), $this.val());
  });



