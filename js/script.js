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

