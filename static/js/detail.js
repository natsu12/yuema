$(function() {
	var navbar = $('#navbar')[0];
	var wrap = $('.wrap');
	var button = $('#button');
	wrap.click(function() {
		if (navbar.getAttribute("aria-expanded") == 'true') {
			button.click();
		}
	});
});