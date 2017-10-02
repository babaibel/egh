var $W = $(window),
	$D = $(document),
	$H = $('html'),
	$B = $('body');
	// swidth=(window.innerWidth-$(window).width());

// $(function() {

// 	$('.js-popup-modal').magnificPopup({
// 		type: 'inline',
// 		preloader: false,
// 		focus: '#username',
// 		showCloseBtn: false,
// 		mainClass: 'popup-modal-overlay'
// 		// callbacks: {
// 		// 	open: function() { $('.header-wr').css('padding-right', swidth + "px"); }, 
// 		// 	close: function() { $('.header-wr').css('padding-right', 0); },
// 		// }
// 	});

// 	$(document).on('click', '.popup-modal-dismiss', function (e) {
// 		e.preventDefault();
// 		$.magnificPopup.close();
// 	});

// 	$('#select-beast').selectize({
// 	    create: true,
// 	    sortField: 'text'
// 	});
// });

// $(function() {

// 	$('.js-form').submit(function () {
// 		var $form = $(this),
// 			title = $form.data('title'),
// 			text = $form.data('text'),
// 			$popup = $('#after-modal'),
// 			$popupTitle = $popup.find('.js-popup-title'),
// 			$popupText= $popup.find('.js-popup-text');

// 		//проверка на успешную отправку

// 		$popupTitle.text(title);
// 		$popupText.text(text);

// 		$.magnificPopup.close();
// 		$.magnificPopup.open({
// 			showCloseBtn: false,
// 			// callbacks: {
// 			// 	open: function() { $('.header-wr').css('padding-right', swidth + "px"); }, 
// 			// 	close: function() { $('.header-wr').css('padding-right', 0); },
// 			// },
// 			items: {
// 				src: '#after-modal'
// 			},
// 			type: 'inline'
// 			}, 
// 		0);
// 		return false;
// 	});

// });

// $(function() {

// 	var $tab = $('.js-tab');

// 	if(!$tab.length) return;

// 	var $tabBtns = $tab.find('.js-btns > div'),
// 		$tabTabs = $tab.find('.js-tabs > div');

// 	function tab(numb) {
// 		$tabTabs.removeClass('active')
// 			.eq(numb).addClass('active');

// 		$tabBtns.removeClass('active')
// 			.eq(numb).addClass('active');
// 	}

// 	$tabBtns.bind('click', function () {
// 		var index = $(this).index();
// 		tab(index);
// 	});

// });

$(function() {

	var $faqBtn = $('.js-faq-btn');
	if(!$faqBtn.length) return;

	$faqBtn.click(function(){
		$(this).next().slideToggle();
	});
});