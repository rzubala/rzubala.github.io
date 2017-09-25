(function() {

 	var win = $(window);
	win.resize(function() {
   	initElements(win);
  	}).resize();
 
})(jQuery);

function initElements(win) {
	var win_w = win.width(),
   		win_h = win.height();

	var set_height = false;
	
	var img_h = 814;
	var img_w = 862;

	var logo_width = 175;
	var img_top = 0;
	var logo_visible = true;

	var name_to_default = true;

	if (win_w < 500) {
		$(".rza-name-1").css('font-size', 50);
		$(".rza-name-2").css('font-size', 30);
		$(".rza-name-3").css('font-size', 20);
		$(".rza-name-2-bracket").css('font-size', 30);
		$(".rza-name-2-bracket").css('top', 0);
		
		name_to_default = false;
	}

	var name_bottom = 100;
	
	if (win_h < 400) {
		$(".rza-name-1").css('font-size', 30);
		$(".rza-name-2").css('font-size', 20);
		$(".rza-name-3").css('font-size', 20);
		$(".rza-name-2-bracket").css('font-size', 20);
		$(".rza-name-2-bracket").css('top', 0);
		name_bottom = 50;
		
		name_to_default = false;		
	}	else if (win_h < 600) {
		$(".rza-name-1").css('font-size', 35);
		$(".rza-name-2").css('font-size', 25);
		$(".rza-name-3").css('font-size', 25);
		$(".rza-name-2-bracket").css('font-size', 30);
		$(".rza-name-2-bracket").css('top', 0);
		name_bottom = 60;
		
		name_to_default = false;
	}	else if (win_h < 800) {
		$(".rza-name-1").css('font-size', 40);
		$(".rza-name-2").css('font-size', 30);
		$(".rza-name-3").css('font-size', 30);
		$(".rza-name-2-bracket").css('font-size', 50);
		$(".rza-name-2-bracket").css('top', 5);
		name_bottom = 70;
		
		name_to_default = false;		
	}
		
	if (name_to_default) {
		$(".rza-name-1").css('font-size', 80);
		$(".rza-name-2").css('font-size', 50);
		$(".rza-name-3").css('font-size', 30);
		$(".rza-name-2-bracket").css('font-size', 80);
		$(".rza-name-2-bracket").css('top', 10);
	}	

	var logo_left = 150;
	var logo_top = 150;
	var name_left = 100;	
	var name_width = $(".rza-name").width();
	
	if (img_h > win_h) {
		img_h = win_h - 10;
		set_height = true;
		$(".headimg").css('width', 'auto');
		$(".headimg").height(img_h);
		img_w = img_h * 862 / 814;
	} else {
		$(".headimg").width(img_w);
		$(".headimg").css('height', 'auto');
	}
		
	if (img_w > win_w) {
		img_w = win_w - 40;			
		$(".headimg").width(img_w);
		$(".headimg").css('height', 'auto');
	}
	
	var skip_left = false;
	var img_left = win_w - (img_w + 100);
	if (img_left < 0) {
		img_left = 0;
	} else if (img_left == win_w - 100) {
		skip_left = true;	
	}
	
	if (win_h < 530) {
		logo_visible = false;
	} else if (win_h < 700) {
		logo_top = 10;
	}
	
	if (win_w < 1000) {
		img_top = 10;	

		var tmp = win_w - img_w;
		img_left = tmp / 2;
		
		if (name_width > 0){
			tmp = win_w - name_width;
			if (tmp > 0) {
				name_left = tmp / 2;	
			}
		}
		
		logo_visible = false;
		logo_width = 0;
	}		
		
	var img_bottom = 0;
	
	if (skip_left) {
		$(".headimg").css('left', 'auto');
		$(".headimg").css('right', 100);
	} else {
		$(".headimg").css('left', img_left);
		$(".headimg").css('right', 'auto');
	}
		
	if (img_top > 0) {
		$(".headimg").css('bottom', '');
		$(".headimg").css('top', img_top);
	} else {
		$(".headimg").css('bottom', img_bottom);
		$(".headimg").css('top', '');
	}
	
	$(".rza-name").css('left', name_left);
	$(".rza-name").css('bottom', name_bottom);
	
	$(".logoimg").css('left', logo_left);
	$(".logoimg").css('top', logo_top);
	$(".logoimg").width(logo_width);

	if (logo_visible) {
		$(".logoimg").css('visibility', '');
	} else {
		$(".logoimg").css('visibility', 'hidden');
	}

}