//Scrolling Button
 
$(function(){
 
	$(document).on( 'scroll', function(){
 
		if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});
});

 
$(function(){
 
	$(document).on( 'scroll', function(){
 
		if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});
 
	$('.scroll-top-wrapper').on('click', scrollToTop);
});
 
function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 1000, 'linear');
}



//Progress Bar

var bar = $('span');
var p = $('p');

var width = bar.attr('style');
width = width.replace("width:", "");
width = width.substr(0, width.length-1);


var interval;
var start = 0; 
var end = parseInt(width);
var current = start;

var countUp = function() {
  current++;
  p.html(current + "%");
  
  if (current === end) {
    clearInterval(interval);
  }
};

interval = setInterval(countUp, (2000 / (end + 0)));


//On Click

function myFunction() {
    var person = prompt("Please enter your name", "Harry Potter");
    
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }
}