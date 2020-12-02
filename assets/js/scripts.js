$(document).ready(function(){
	var next = "<i class='fas fa-caret-left'></i>";
	var prev = "<i class='fas fa-caret-right'></i>";
	$('.famous-qoute').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:false,
		navText:[
    	next,
    	prev
    	]
	});

	$('.popup').magnificPopup({
		type:'iframe',
		iframe: {
		  	markup: '<div class="mfp-iframe-scaler">'+
		            '<div class="mfp-close"></div>'+
		            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
		          '</div>', 

		  	patterns: {
		    youtube: {
		    	index: 'youtube.com/',

		      	id: 'v=', 

		      	src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
		    },
		    vimeo: {
		      	index: 'vimeo.com/',
		      	id: '/',
		      	src: '//player.vimeo.com/video/%id%?autoplay=1'
		    },
		    gmaps: {
		      	index: '//maps.google.',
		      	src: '%id%&output=embed'
		    }

		  },

		  srcAction: 'iframe_src',
		}
	});

$('.menu-icon').click(function(){
	$('.menu').slideToggle(1000);
	return false;
})

});