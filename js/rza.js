(function() {

 	var win = $(window);
	win.resize(function() {
   	initElements(win);
  	}).resize();
 
})(jQuery);

function centerModal() {
    $(this).css('display', 'block');
    var $dialog = $(this).find(".modal-dialog");
    var offset = ($(window).height() - $dialog.height()) / 2;
    // Center modal vertically in window
    $dialog.css("margin-top", offset);
}

$('.modal').on('show.bs.modal', centerModal);
$(window).on("resize", function () {
    $('.modal:visible').each(centerModal);
});

function initElements(win) {
	var win_w = win.width(),
   		win_h = win.height();

	var img_h = 703;
	var img_w = 812;
	var ratio = img_w/img_h;

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
