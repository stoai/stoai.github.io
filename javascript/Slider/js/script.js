index = 7;
currentImage = 1;
/**
*The prevImage() function is move to previous image.
*
*/
function prevImage() {
	if (currentImage > 1) {
		currentImage--;
	} else {
		currentImage = 7;
	}
	clearInterval(auto);
	showImage(currentImage);
	auto = setInterval('nextImage()', 3000);
}

/**
*The nextImage() function is move to next image.
*
*/
function nextImage() {
	if (currentImage < index) {
		currentImage++;
	} else {
		currentImage = 1;
	}
	clearInterval(auto);
	showImage(currentImage);
	auto = setInterval('nextImage()', 3000);
}

/**
*The autoSlider() function is move to next image automatically.
*
*/
function autoSlider() {
	auto = setInterval('nextImage()', 3000);
}

/**
*The onTrack() function is tracked image.
*
*/
function onTrack(ob){
	var track = ob.id;
	currentImage = track.substr(5,1);
	showImage(currentImage);
} 

/**
*The showImage() function is show image in slider.
*
*/
function showImage(track) {
	for(i = 1; i <= 7; i++) {
		if (i == track) {
			document.getElementById("item" + i).style.display = "block";
			document.getElementById("index" + i).style.background = "red";
		} else {
			document.getElementById("item" + i).style.display = "none";
			document.getElementById("index" + i).style.background = "green";
		}
	}
}

/**
*Invoked autoSlider() function when load page.
*
*/
window.onload = autoSlider();
