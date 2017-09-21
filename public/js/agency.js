// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // When site is launched allows a flash fade effect on header
$(window).on("load",function() {
  $(document).ready(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fadeInLoadPic").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(700,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

// Loads the header text on page load//
$(window).on("load",function() {
  $(document).ready(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fadeInLoad").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(4000,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});


// fade out on scroll
$(window).scroll(function() {
  $("header").css({
    'opacity': 1 - (($(this).scrollTop()) / 600)
  });
});

    // Scroll Down bumb motion
    $('.ScrollDown').hover(function() {
    $(this).stop().animate({
        top: 15
    }, 900, "easeOutBounce");
    }, function() {
    $(this).stop().animate({
        top: 0
    }, 900, "easeOutBounce");
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });


    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Reveals selected divs on scroll down
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.8,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 500,
        delay: 20
    });
    sr.reveal('.sr-services', {
        duration: 1000,
        scale: 0.9,
        distance: '0px'
    }, 300);


})(jQuery); // End of use strict
