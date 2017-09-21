(function() {

var win = $(window);

win.resize(function() {
    
    var win_w = win.width(),
        win_h = win.height(),
        $bg    = $("#bg");

	console.log('background: ' + win_w+' '+win_h);

	var img_w = 600;
	var img_top = 0;

	if (win_w < 500) {
		$(".rza-name-1").css('font-size', 50);
		$(".rza-name-2").css('font-size', 30);
	} else {
		$(".rza-name-1").css('font-size', 80);
		$(".rza-name-2").css('font-size', 50);
	}	

	var name_left = 100;	
	var name_width = $(".rza-name").width();
	
	if (win_w < 1000) {
		img_top = 10;	
	}		
	if (img_w > win_w) {
		img_w = win_w;			
	}
	
	var img_left = win_w - (img_w + 100);
	if (img_left < 0) {
		img_left = 0;
	}
	
	if (img_top > 0) {
		var tmp = win_w - img_w;
		img_left = tmp / 2;
		
		if (name_width > 0){
			tmp = win_w - name_width;
			if (tmp > 0) {
				name_left = tmp / 2;	
			}
		}
	}		
	
	
	
	var img_bottom = 0;	
	var name_bottom = 100;
	
	$(".headimg").width(img_w);
	$(".headimg").css('left', img_left);	
	if (img_top > 0) {
		$(".headimg").css('bottom', '');
		$(".headimg").css('top', img_top);
	} else {
		$(".headimg").css('bottom', img_bottom);
		$(".headimg").css('top', '');
	}
	
	$(".rza-name").css('left', name_left);
	$(".rza-name").css('bottom', name_bottom);
	
  }).resize();
  
})(jQuery);
