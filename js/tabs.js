$(document).ready(function(){	
	
	$('.mx-tab > span').click(function(){
				
		if(!$(this).parent().hasClass('mx-active')){
			$('.mx-tab').removeClass('mx-active');
			$('.mx-tab').css('height', '56px');
			$(this).parent().addClass('mx-active');
			$(this).parent().animate({'height': '256px'}, 500);
		}
		else if($(this).parent().hasClass('mx-active')){
			$(this).parent().removeClass('mx-active');
			$(this).parent().animate({'height': '56px'}, 500);
		}
	});
	
})
