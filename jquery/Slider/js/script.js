
$(document).ready(function(){
	var index = 6;
	var currentImage = 0;

	var changeImage = function (id) {
		
		if(this.id == "prev-slide") {
			if(currentImage > 0) {
				currentImage--;
			} else {
				currentImage = 6;
			}
		} else if (this.id == "next-slide") {
			if(currentImage < index) {
				currentImage++;
			} else {
				currentImage = 0;
			}
		}
		//clearInterval(auto);
		showImage(currentImage);
		auto = setInterval(auto);
	}
	
	var showImage = function (track) {
		for (var i = 0; i <= 6; i++) {
			if(i == track) {
				$('.imageSlide'+":"+"eq("+i+")").addClass('current').show();
				$('.track'+":"+"eq("+i+")").addClass('tracked');
			} else {
				$('.imageSlide'+":"+"eq("+i+")").removeClass('current');
				$('.track'+":"+"eq("+i+")").removeClass('tracked');
			}
		}
	}

	$('#prev-slide, #next-slide').bind('click', changeImage);
	var auto = setInterval(function () {
		if(currentImage < index) {
			currentImage++;
		} else {
			currentImage = 0;
		}
		showImage(currentImage);
	}, 3000);
});