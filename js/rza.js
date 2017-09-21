(function() {

var win = $(window);

win.resize(function() {
    
    var win_w = win.width(),
        win_h = win.height(),
        $bg    = $("#bg");

	console.log('background: ' + win_w+' '+win_h);
	/*
	$(".header").removeClass("header_mobile");
	if (win_w < 600) {
		$(".header").addClass("header_mobile");
	}
	*/

	var img_w = 600;
	var img_top = 0;
	if (img_w > win_w + 10) {
		img_w = win_w;
		img_top = 10;	
	}
	var img_left = win_w - (img_w + 100);
	if (img_left < 0) {
		img_left = 0;
	}
	var img_bottom = 0;
	
	$(".headimg").width(img_w);
	if (img_top > 0) {
		$(".headimg").css('bottom', '');
		$(".headimg").css('top', img_top);
	} else {
		$(".headimg").css('bottom', img_bottom);
		$(".headimg").css('top', '');
	}
	
	$(".headimg").css('left', img_left);

	$(".headimg").css('z-index', 1);
	$(".rza-construction").css('z-index', 100);
  }).resize();
  
})(jQuery);
