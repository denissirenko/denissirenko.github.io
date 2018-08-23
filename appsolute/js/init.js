$('.screenshots-slider').slick({
	slidesToShow: 3,
	arrows: false,
	centerMode: true,
  	centerPadding: '146px',
  	responsive: [
	    {
	    	breakpoint: 1200,
	    	settings: {
	    		centerPadding: '0px'
	    	}
	    },	
	    {
	    	breakpoint: 991,
	    	settings: {
	    		slidesToShow: 1,
	    		centerPadding: '0px'
	    	}
	    },   
  	]
});

$('.testimonial-slider').slick({
	slidesToShow: 1,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 5000,
	fade: true,
  	cssEase: 'linear',
	prevArrow: '<div class="slick-prev slick-arrow"><div class="carousel-button"><i class="fas fa-long-arrow-alt-left"></i></div></div>',
	nextArrow: '<div class="slick-next slick-arrow"><div class="carousel-button"><i class="fas fa-long-arrow-alt-right"></i></div></div>'
})

$('.header-nav').slicknav({
	appendTo: '#header .container',
	label: ''
});

// Scroll 

const scrollBtn = $('[data-scroll]'); 

function onClick(e) {
    e.preventDefault(); 
    const target = $(this).attr('data-scroll');
    const dist = $(target).offset().top;
    $('html, body').animate({ scrollTop: dist }, 1000, 'swing'); 
}

scrollBtn.on('click', onClick); 
