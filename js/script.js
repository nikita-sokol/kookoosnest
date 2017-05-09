$(document).ready(function(){
	
	// slider-01 - Swiper
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 0,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true
    });
	  
	// slideshow-cottages
	$('.slideshow-pic').click(function(){

		var
			item = $(this).closest('.slideshow-item'),
			container = $(this).closest('.slideshow'),
			display = container.find('.slideshow-display'),
			path = item.find('img').attr('src'),
			duration = 300;	

		
		if (!item.hasClass('slideshow-item-active')) {
			item.addClass('slideshow-item-active').siblings().removeClass('slideshow-item-active');
			
			display.find('img').fadeOut(duration,function(){
			$(this).attr('src',path).fadeIn(duration);
			});
			display.attr('href',path);
			
		}
	});

	// dates cottage
	$('.datep').datepicker({
        numberOfMonths: [1,3]
	});

	// dates booking
	$('#inline').datepicker({
        numberOfMonths: [1,3]
	});

	// slideshow-gallery swiper
    var swiper = new Swiper('.g-swiper-container', {
        nextButton: '.g-swiper-button-next',
        prevButton: '.g-swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 0,
       // autoplay: 2500,
        autoplayDisableOnInteraction: false,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true
    });

    // slideshow-gallery slideshow-cottages
	$('.g-slideshow-pic').click(function(){

		var
			item = $(this).closest('.slideshow-item'),
			container = $(this).closest('.slideshow'),
			display = container.find('.slideshow-display'),
			path = item.find('img').attr('src'),
			duration = 300;	

		
		if (!item.hasClass('slideshow-item-active')) {
			item.addClass('slideshow-item-active').siblings().removeClass('slideshow-item-active');
			
			display.find('img').fadeOut(duration,function(){
			$(this).attr('src',path).fadeIn(duration);
			});
			display.attr('href',path);
		}
	});

	//fancybox
	 $(".fancybox").fancybox({
	 	'infobar':true,
	 	'buttons':false
	 });


	 //maps - scrolloff
	$('#map1').addClass('scrolloff');
    $('#overlay').on('click', function () {
        $('#map1').removeClass('scrolloff'); 
    });
    $("#map1").mouseleave(function () {
        $('#map1').addClass('scrolloff'); 
    });


});

