//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
 
$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
	        
	        'position': 'relative',
	        
      });
			next_fs.css({'left': left, 'opacity': opacity,'display': 'block'});
		}, 
		duration: 300, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeOutCubic'
	});
});
 
$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
		
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left,

		});
			previous_fs.css({'opacity': opacity,'display': 'block'});
		}, 
		duration: 300, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeOutCubic'
	});
});
 
$(".submit").click(function(){
	return false;
});


$('.panel-action1').click(function(){
  $(".PanelMenu1").toggleClass('is-active');
})
$('.panel-action2').click(function(){
  $(".PanelMenu2").toggleClass('is-active');
})
$('.PanelMenu3').click(function(){
  $(".is-").toggleClass('is-active3');
})
$('.panel-action4').click(function(){
  $(".PanelMenu4").toggleClass('is-active');
})
$('.panel-action5').click(function(){
  $(".PanelMenu5").toggleClass('is-active');
})
$('.panel-action6').click(function(){
  $(".PanelMenu6").toggleClass('is-active');
})

//POSICION DE LA CASA

$('.po-1').click(function(){
  $(".Position1").toggleClass('is-active');
})
$('.po-2').click(function(){
  $(".Position2").toggleClass('is-active');
})
$('.po-3').click(function(){
  $(".Position3").toggleClass('is-active');
})
$('.po-4').click(function(){
  $(".Position4").toggleClass('is-active');
})

//DURACION CONTRATO 

$('.con-1').click(function(){
  $(".Contrato1").toggleClass('is-active');
})
$('.con-2').click(function(){
  $(".Contrato2").toggleClass('is-active');
})
$('.con-3').click(function(){
  $(".Contrato3").toggleClass('is-active');
})
$('.con-4').click(function(){
  $(".Contrato4").toggleClass('is-active');
})




//CLASIFICADO

$('.cla-1').click(function(){
  $(".Clasificado1").toggleClass('is-active-cla');
})
$('.cla-2').click(function(){
  $(".Clasificado2").toggleClass('is-active-cla');
})