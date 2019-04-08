$(document).ready(function() {
	var nextSlide = $("#slides img:first-child");
	var nextCaption;
	var nextSlideSource;
	var counter = 0;

	// the function for running the slide show

    var runSlideShow = function() {   
       	$("#caption").fadeOut(1000);
       	$("#slide").fadeOut(1000,
       		function () {
       	     	if (nextSlide.next().length == 0) {
					nextSlide = $("#slides img:first-child");
				}
				else {
					nextSlide = nextSlide.next();
				}
				nextSlideSource = nextSlide.attr("src");
				nextCaption = nextSlide.attr("alt");
				$("#slide").attr("src", nextSlideSource).fadeIn(1000);					
				$("#caption").text(nextCaption).fadeIn(1000);
			}
		)
	}
	
	// start the slide show
	var timer = setInterval(runSlideShow, 3000);
	
	
	$("#play").click(function(){
		counter++;
		if(counter%2 != 0){

			clearInterval(timer);
			$("#play").attr("value", "Play");

			if(nextSlide.attr("src") == "images/casting1.jpg"){
			$("#prev").prop("disabled",true);}
			else{
			$("#prev").prop("disabled",false);
			}
			
			if(nextSlide == $("#slides img:last-child")){
			$("#next").prop("disabled",true);
		    	}
		   	 else{
			$("#next").prop("disabled",false);
		    	}
			
		}
		else{
			timer = setInterval(runSlideShow, 3000);
			$("#prev").prop("disabled",true);
			$("#next").prop("disabled",true);
			$("#play").attr("value", "Pause");
		}

	})
	$("#prev").click(function(){
		$("#caption").fadeOut(1000);
       		$("#slide").fadeOut(1000,
		
       		function () {
       	     	if (nextSlide.prev().length == 0) {
					$("#prev").prop("disabled",true);
				}
				else {
					$("#next").prop("disabled",false);
					nextSlide = nextSlide.prev();
				}
				
				nextSlideSource = nextSlide.attr("src");
				nextCaption = nextSlide.attr("alt");
				$("#slide").attr("src", nextSlideSource).fadeIn(1000);					
				$("#caption").text(nextCaption).fadeIn(1000);
			})
	})
	$("#next").click(function(){ 	
		$("#caption").fadeOut(1000);
       	$("#slide").fadeOut(1000,
       		function () {
       	     	if (nextSlide.next().length == 0) {
					$("#next").prop("disabled",true);
				}
				else {
					$("#prev").prop("disabled",false);
					nextSlide = nextSlide.next();
				}
				
				nextSlideSource = nextSlide.attr("src");
				nextCaption = nextSlide.attr("alt");
				$("#slide").attr("src", nextSlideSource).fadeIn(1000);					
				$("#caption").text(nextCaption).fadeIn(1000);
			})
	})
	
})