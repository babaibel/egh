var $W = $(window),
	$D = $(document),
	$H = $('html'),
	$B = $('body');
	swidth=(window.innerWidth-$(window).width());

$(function() {

	$('.js-popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		showCloseBtn: false,
		mainClass: 'popup-modal-overlay',
		callbacks: {
			open: function() { $('.header-wr').css('padding-right', swidth + "px"); }, 
			close: function() { $('.header-wr').css('padding-right', 0); },
		}
	});

	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

$(function() {

	$('.js-form').submit(function () {
		var $form = $(this),
			$popup = $('#after-modal');

		$.magnificPopup.close();
		$.magnificPopup.open({
			showCloseBtn: false,
			callbacks: {
				open: function() { $('.header-wr').css('padding-right', swidth + "px"); }, 
				close: function() { $('.header-wr').css('padding-right', 0); },
			},
			items: {
				src: '#after-modal'
			},
			type: 'inline'
			}, 
		0);
		return false;
	});

});

$(function() {

	var $faqBtn = $('.js-faq-btn');
	if(!$faqBtn.length) return;

	$faqBtn.click(function(){
		$(this).next().slideToggle();
	});
});

// timer
$(function() {

	function getTimeRemaining(endtime) {
	  var t = Date.parse(endtime) - Date.parse(new Date());
	  var seconds = Math.floor((t / 1000) % 60);
	  var minutes = Math.floor((t / 1000 / 60) % 60);
	  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	  var days = Math.floor(t / (1000 * 60 * 60 * 24));
	  return {
	    'total': t,
	    'days': days,
	    'hours': hours,
	    'minutes': minutes,
	    'seconds': seconds
	  };
	}

	function initializeClock(id, endtime) {
	  var clock = document.getElementById(id);
	  var daysSpan = clock.querySelector('.days');
	  var hoursSpan = clock.querySelector('.hours');
	  var minutesSpan = clock.querySelector('.minutes');
	  var secondsSpan = clock.querySelector('.seconds');

	  function updateClock() {
	    var t = getTimeRemaining(endtime);

	    daysSpan.innerHTML = t.days;
	    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
	    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
	    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

	    if (t.total <= 0) {
	      clearInterval(timeinterval);
	    }
	  }

	  updateClock();
	  var timeinterval = setInterval(updateClock, 1000);
	}

	var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
	initializeClock('clockdiv', deadline);
});
// END timer

$(function() {

	var fixed_offset = $('.header-wr').height();

	$(window).resize(function(){
		fixed_offset = $('.header-wr').height();
	});

	$(".header-menu").on("click",".header-menu__item a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		$('.header').removeClass('_open');
		$('.js-mob-menu-btn').removeClass('_open');

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top - fixed_offset}, 1500);
	});
});

$(function() {

	$(".js-mob-menu-btn").click(function () {
		$(this).parent().toggleClass('_open');
		$(this).toggleClass('_open');
	});
	
});
