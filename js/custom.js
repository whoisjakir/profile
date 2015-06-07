$(window).load(function() { 

/* PAGE LOADER */	

			$('#status').fadeOut(); // will first fade out the loading animation
			$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
			$('body').delay(350).css({'overflow':'visible'});
		});

/* Drop Down Menu Fade Effect */	

$('.nav-toggle').hover(function() {
	'use strict';
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(230);
    }, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(230)
 });

/* Mobile Menu Button */	
/*
$('.mini-nav-button').click(function() {
  event.preventDefault();
    $(".nav-menu").slideToggle("8000");
 });
*/
$(".mini-nav-button").on('click', function(){ 
       $(".nav-menu").slideToggle("8000");    
});

$('.nav a').click(function () {
	if ($(window).width() < 970) {
    	$(".nav-menu").slideToggle("1500")}
	
});


/* NAVIGATION TOP STICKY SCRIPT ACTIVATION */
            $(window).bind('scroll', function () {
                var navHeight = $(window).height() - 560;
                if ($(window).scrollTop() > navHeight) {
                    $('#navbar').addClass('affix');
                    $('#logo').removeClass('logo')
                    $('#logo').addClass('affix-logo')
					
                }
                else {
                    $('#navbar').removeClass('affix');
                    $('#logo').addClass('logo')
                    $('#logo').removeClass('affix-logo')
                }
            });


/* CURRENT CLASS NAVIGATION */

            $(document).ready(function () {
                $('.nav').onePageNav();
                
               

                $('.scrol').click(function (e) {
                    var id = $(this).attr("href");
                    $.scrollTo(id, 800);
                    e.preventDefault();
                });
                
            });


/*
            $('.nav').bind('click', function (event) {
                var $anchor = $(this);
                var headerH = $('.nav, .btn-home').outerHeight();
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
                }, 1200, 'easeInOutExpo');
                event.preventDefault();
            });
      */
 /* COUNT TO */     
function count($this){
		var current = parseInt($this.html(), 10);
		current = current + 1; /* Where 30 is increment */
	
		$this.html(++current);
		if(current > $this.data('count')){
			$this.html($this.data('count'));
		} else {    
			setTimeout(function(){count($this)}, 30);
		}
	}        
	
	$(".stat-count").each(function() {
	  $(this).data('count', parseInt($(this).html(), 10));
	  $(this).html('0');
	  count($(this));
	});
           

if ($(".counter").is(":visible")) {
    $('.count').addClass("stat-count");
}
else {
    $('.count').removeClass("stat-count");
}



var isMobile = false;

/* ----------------------- Mobile Detection ----------------------------- */

            if (navigator.userAgent.match(/Android/i) || 
                navigator.userAgent.match(/webOS/i) ||
                navigator.userAgent.match(/iPhone/i) || 
                navigator.userAgent.match(/iPad/i)|| 
                navigator.userAgent.match(/iPod/i) || 
                navigator.userAgent.match(/BlackBerry/i)) {                 
                isMobile = true;            
            }
/* ----------------------- Content Animation ----------------------- */


            if (isMobile == false) {
                $('*[data-animated]').addClass('animated');
            }
            

            function animated_contents() {
                $(".animated:appeared").each(function (i) {
                    var $this    = $(this),
                        animated = $(this).data('animated');

                    setTimeout(function () {
                        $this.addClass(animated);
                    }, 100 * i);

                    $('.progress-bar .bar').each(function (i) {
                        var pogresBar = $this.data('width');
                        $this.css({'width' : pogresBar});
                    });
                });
            }
            
            animated_contents();
            $(window).scroll(function () {
                animated_contents();
            });
 

 // MAGNIFICENT POPUP

      $(document).ready(function() {

        "use strict";

          $('.image-modal').magnificPopup({

          type:'inline',
          fixedContentPos: false,
          removalDelay: 100,
          closeBtnInside: true,
          preloader: false,
          mainClass: 'mfp-fade'

          });

          $(document).on('click', '.popup-modal-dismiss', function (e) {
          e.preventDefault();
          $.magnificPopup.close();
          });


        $('.image-popup-no-margins').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          closeBtnInside: false,
          fixedContentPos: true,
          mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
          image: {
            verticalFit: true
          },
          zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
          }
        });

        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,

          fixedContentPos: false
        });

      });


// MIXITUP GRID
  $(function(){  
    "use strict";
    $('#portfolio-items').mixItUp(); 
      });


//Clients carousel
  $("#clients-carousel").owlCarousel({
    items : 4,
    itemsDesktop : [1000,4],
    itemsDesktopSmall : [900,3],
    itemsTablet: [600,2],
    itemsMobile : false,
    pagination: false,
    autoPlay: 9000,
  });

//Testimonials carousel
  $("#testimonials-carousel").owlCarousel({
    singleItem: true,
  });
  
  
  
  
//Circle

$(function() {

	$('#diagram-id-1').circleDiagram({
		"percent": "50%",
		"size": "100",
		"lineHeight": "70",
		"borderWidth": "15",
		"bgFill": "#cacaca",
		"frFill": "#12BAAD",
		"textSize": "20",
		"textColor": "#585858"
	});

	$('#diagram-id-2').circleDiagram({
		"percent": "70%",
		"size": "100",
		"lineHeight": "70",
		"borderWidth": "15",
		"bgFill": "#cacaca",
		"frFill": "#12BAAD",
		"textSize": "20",
		"textColor": "#585858"
	});
	
	$('#diagram-id-3').circleDiagram({
		"percent": "80%",
		"size": "100",
		"lineHeight": "70",
		"borderWidth": "15",
		"bgFill": "#cacaca",
		"frFill": "#12BAAD",
		"textSize": "20",
		"textColor": "#585858"
	});
	
	$('#diagram-id-4').circleDiagram({
		"percent": "100%",
		"size": "100",
		"lineHeight": "70",
		"borderWidth": "15",
		"bgFill": "#cacaca",
		"frFill": "#12BAAD",
		"textSize": "20",
		"textColor": "#585858"
	});
});  