// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function () {
    $("body").queryLoader2({
    	barColor: "#f04e23",
	    backgroundColor: "#1c252c",
	    percentage: false,
	    barHeight: 1,
	    minimumTime: 200,
	    fadeOutTime: 1000
    });
});

(function() {
	$('.tcon').on('click',function() {
		$('#offcanvas-menu').toggleClass('show');
		$('#wrapper').toggleClass('out');
	});

	$('.newsltter-btn').on('click',function(e) {
		e.preventDefault();
		$(this).fadeOut('fast', function() {
			$('.newsletter-input').fadeIn('fast').find('input').focus();
		});
	});

})();

