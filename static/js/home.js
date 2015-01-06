$(function() {
	var handlebar = $('#handlebar');
	var main = $('.main');
	var leftside = $('.leftside');
	var flag = true;
	main.css('height', screen.availHeight);
	leftside.css('height', screen.availHeight);
	handlebar.click(function() {
		if (flag) {
			main.addClass('slideToRight');
			leftside.css('z-index', '0');

			flag = false;
		} else {
			main.removeClass('slideToRight');
			leftside.css('z-index', '-1');
			flag = true;
		}
		
	});
});