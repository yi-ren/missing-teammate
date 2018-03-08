// JavaScript Document
$(document).ready(function(){
	
	$('.carousel-control.right').html('<img src="../../img/control/right.png">');
	$('.carousel-control.left').html('<img src="../../img/control/left.png">');
	
	$('#follow-andrew').qtip({
    content: {
        attr: 'alt'
    },
	style: {
		classes: 'qtip-bootstrap'
		},
		position: {
			target: 'mouse', // Track the mouse as the positioning target
				 adjust: { x: 10, y: 10 } // Offset it slightly from under the mouse
		}
});
	
		$('area[alt]').qtip({
    content: {
        attr: 'alt'
    },
	style: {
		classes: 'qtip-bootstrap'
		},
		position: {
			target: 'mouse', // Track the mouse as the positioning target
				 adjust: { x: 10, y: 10 } // Offset it slightly from under the mouse
		}
});

$('area[alt][href$="html"]').qtip({
    content: {
        attr: 'alt'
    },
	style: {
		classes: 'qtip-jtools'
		},
		position: {
			target: 'mouse', // Track the mouse as the positioning target
				 adjust: { x: 10, y: 10 } // Offset it slightly from under the mouse
		}
});


	$('.left.carousel-control').qtip({
		content: {
			text: "What's on the left?"
		},
		position: {
			target: 'mouse', // Track the mouse as the positioning target
				 adjust: { x: 10, y: 10 } // Offset it slightly from under the mouse
		},
		style: {
		classes: 'qtip-jtools'
		}
	});
	
	$('.right.carousel-control').qtip({
		content: {
			text: "What's on the right?"
		},
		position: {
			target: 'mouse', // Track the mouse as the positioning target
				 adjust: { x: 10, y: 10 } // Offset it slightly from under the mouse
		},
		style: {
		classes: 'qtip-jtools'
		}
	});

    sessvars.yi1apt=sessvars.yi1apt||0;
	sessvars.yi1bar=sessvars.yi1bar||0;
	sessvars.yi1cafe=sessvars.yi1cafe||0;
	if(sessvars.yi1apt+sessvars.yi1bar+sessvars.yi1cafe==3){
		if($('iframe').length == 0){
			$('.yi-1').siblings('a').find('.case-solved').removeClass("hidden");
		}else{
		$('.yi-1').siblings('a').find('.case-solved').removeClass("hidden",10000);
		}
	};
		
		
	sessvars.yi2apt=sessvars.yi2apt||0;
	sessvars.yi2park=sessvars.yi2park||0;
	sessvars.yi2cafe=sessvars.yi2cafe||0;
	if(sessvars.yi2apt+sessvars.yi2park+sessvars.yi2cafe==3){
		if($('iframe').length == 0){
			$('.yi-2').siblings('a').find('.case-solved').removeClass("hidden");
		}else{
			$('.yi-2').siblings('a').find('.case-solved').removeClass("hidden",10000);
		}
	};
		
	sessvars.yi3apt=sessvars.yi3apt||0;
	sessvars.yi3bar1=sessvars.yi3bar1||0;
	sessvars.yi3bar2=sessvars.yi3bar2||0;
	sessvars.yi3park=sessvars.yi3park||0;
	if(sessvars.yi3apt+sessvars.yi3bar1+sessvars.yi3bar2+sessvars.yi3park==4){
		if($('iframe').length == 0){
			$('.yi-3').siblings('a').find('.case-solved').removeClass("hidden");
		}else{
			$('.yi-3').siblings('a').find('.case-solved').removeClass("hidden",10000);
		}
	};
	
	sessvars.yi4bar=sessvars.yi4bar||0;
	sessvars.yi4park=sessvars.yi4park||0;
	sessvars.yi4cafe=sessvars.yi4cafe||0;
	if(sessvars.yi4bar+sessvars.yi4park+sessvars.yi4cafe==3){
		if($('iframe').length == 0){
			$('.yi-4').siblings('a').find('.case-solved').removeClass("hidden");
		}else{
			$('.yi-4').siblings('a').find('.case-solved').removeClass("hidden",10000);
		}
	};
		
	sessvars.isa1apt=sessvars.isa1apt||0;
	sessvars.isa1bar=sessvars.isa1bar||0;
	sessvars.isa1cafe=sessvars.isa1cafe||0;
	if(sessvars.isa1apt+sessvars.isa1bar+sessvars.isa1cafe==3){
		if($('iframe').length == 0){
			$('.Isa-1').siblings('a').find('.case-solved').removeClass("hidden");
		}else{
			$('.Isa-1').siblings('a').find('.case-solved').removeClass("hidden",10000);
		}
	};
	
	sessvars.isa2park=sessvars.isa2park||0;
	sessvars.isa2bar1=sessvars.isa2bar1||0;
	sessvars.isa2bar2=sessvars.isa2bar2||0;
	sessvars.isa2cafe=sessvars.isa2cafe||0;
	if(sessvars.isa2park+sessvars.isa2bar1+sessvars.isa2bar2+sessvars.isa2cafe==4){
		if($('iframe').length == 0){
			$('.Isa-2').siblings('a').find('.case-solved').removeClass("hidden");
		}else{
			$('.Isa-2').siblings('a').find('.case-solved').removeClass("hidden",10000);
		}
	};
	
	sessvars.isa3apt=sessvars.isa3apt||0;
	sessvars.isa3bar=sessvars.isa3bar||0;
	sessvars.isa3park=sessvars.isa3park||0;
	if(sessvars.isa3apt+sessvars.isa3bar+sessvars.isa3park==3){
		if($('iframe').length == 0){
			$('.Isa-3').siblings('a').find('.case-solved').removeClass("hidden");
		}else{
			$('.Isa-3').siblings('a').find('.case-solved').removeClass("hidden",10000);
		}
	};
	
	sessvars.isa4apt=sessvars.isa4apt||0;
	sessvars.isa4cafe=sessvars.isa4cafe||0;
	sessvars.isa4park=sessvars.isa4park||0;
	if(sessvars.isa4apt+sessvars.isa4cafe+sessvars.isa4park==3){
		if($('iframe').length == 0){
			$('.Isa-4').siblings('a').find('.case-solved').removeClass("hidden");
		}else{
			$('.Isa-4').siblings('a').find('.case-solved').removeClass("hidden",10000);
		}
	};
	
	sessvars.iris1bar=sessvars.iris1bar||0;
	sessvars.iris1park=sessvars.iris1park||0;
	sessvars.iris1apt=sessvars.iris1apt||0;
	if(sessvars.iris1bar+sessvars.iris1park+sessvars.iris1apt==3){
		if($('iframe').length == 0){
			$('.Iris-1').siblings('a').find('.case-solved').removeClass("hidden");
		}else{
			$('.Iris-1').siblings('a').find('.case-solved').removeClass("hidden",10000);
		}
	};
	
	sessvars.iris2bar=sessvars.iris2bar||0;
	sessvars.iris2cafe=sessvars.iris2cafe||0;
	sessvars.iris2apt=sessvars.iris2apt||0;
	if(sessvars.iris2bar+sessvars.iris2cafe+sessvars.iris2apt==3){
		if($('iframe').length == 0){
			$('.Iris-2').siblings('a').find('.case-solved').removeClass("hidden");
		}else{
			$('.Iris-2').siblings('a').find('.case-solved').removeClass("hidden",10000);
		}
	};

	sessvars.iris3apt=sessvars.iris3apt||0;
	sessvars.iris3cafe1=sessvars.iris3cafe1||0;
	sessvars.iris3cafe2=sessvars.iris3cafe2||0;
	sessvars.iris3cafe3=sessvars.iris3cafe3||0;
	sessvars.iris3park=sessvars.iris3park||0;
	if(sessvars.iris3apt+sessvars.iris3cafe1+sessvars.iris3cafe2+sessvars.iris3cafe3+sessvars.iris3park==5){
		if($('iframe').length == 0){
			$('.Iris-3').siblings('a').find('.case-solved').removeClass("hidden");
		}else{
			$('.Iris-3').siblings('a').find('.case-solved').removeClass("hidden",10000);
		}
	};
	
	sessvars.iris4bar1=sessvars.iris4bar1||0;
	sessvars.iris4bar2=sessvars.iris4bar2||0;
	sessvars.iris4cafe=sessvars.iris4cafe||0;
	sessvars.iris4park=sessvars.iris4park||0;
	if(sessvars.iris4bar1+sessvars.iris4bar2+sessvars.iris4cafe+sessvars.iris4park==4){
		if($('iframe').length == 0){
			$('.Iris-4').siblings('a').find('.case-solved').removeClass("hidden");
		}else{
			$('.Iris-4').siblings('a').find('.case-solved').removeClass("hidden",10000);
		}
	};
	
	sessvars.jl1apt1=sessvars.jl1apt1||0;
	sessvars.jl1apt2=sessvars.jl1apt2||0;
	sessvars.jl1bar1=sessvars.jl1bar1||0;
	sessvars.jl1bar2=sessvars.jl1bar2||0;
	sessvars.jl1cafe1=sessvars.jl1cafe1||0;
	sessvars.jl1cafe2=sessvars.jl1cafe2||0;
	if(sessvars.jl1apt1+sessvars.jl1apt2+sessvars.jl1bar1+sessvars.jl1bar2+sessvars.jl1cafe1+sessvars.jl1cafe2==6){
		if($('iframe').length == 0){
			$('.JL-1').siblings('a').find('.case-solved').removeClass("hidden");
		}else{
			$('.JL-1').siblings('a').find('.case-solved').removeClass("hidden",10000);
		}
	};
	
	sessvars.jl2apt1=sessvars.jl2apt1||0;
	sessvars.jl2apt2=sessvars.jl2apt2||0;
	sessvars.jl2park=sessvars.jl2park||0;
	sessvars.jl2cafe=sessvars.jl2cafe||0;
	if(sessvars.jl2apt1+sessvars.jl2apt2+sessvars.jl2park+sessvars.jl2cafe==4){
		if($('iframe').length == 0){
			$('.JL-2').siblings('a').find('.case-solved').removeClass("hidden");
		}else{
			$('.JL-2').siblings('a').find('.case-solved').removeClass("hidden",10000);
		}
	};
	
	sessvars.jl3park=sessvars.jl3park||0;
	sessvars.jl3bar1=sessvars.jl3bar1||0;
	sessvars.jl3bar2=sessvars.jl3bar2||0;
	sessvars.jl3cafe=sessvars.jl3cafe||0;
	if(sessvars.jl3park+sessvars.jl3bar1+sessvars.jl3bar2+sessvars.jl3cafe==4){
		if($('iframe').length == 0){
			$('.JL-3').siblings('a').find('.case-solved').removeClass("hidden");
		}else{
			$('.JL-3').siblings('a').find('.case-solved').removeClass("hidden",10000);
		}
	};
	
	sessvars.jl4park=sessvars.jl4park||0;
	sessvars.jl4bar=sessvars.jl4bar||0;
	sessvars.jl4apt=sessvars.jl4apt||0;
	if(sessvars.jl4park+sessvars.jl4bar+sessvars.jl4apt==3){
		if($('iframe').length == 0){
			$('.JL-4').siblings('a').find('.case-solved').removeClass("hidden");
		}else{
			$('.JL-4').siblings('a').find('.case-solved').removeClass("hidden",10000);
		}
	};
	
	
});

