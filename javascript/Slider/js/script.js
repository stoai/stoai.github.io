/**
* The moveElement() function includes 4 parameters
*
*
*/

function moveElement(elementID, final_x, final_y, interval) {
	var elem = document.getElementById(elementID);
	if (elem.movement) {
		clearTimeout(elem.movement);
	}

	// Determine position
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);

	// After move to position then stop.
	if (xpos == final_x && ypos == final_y) {
		return true;
	}

	// Compute movement position after each time stop.
	if (xpos < final_x) {
		var dist = Math.ceil((final_x - xpos) / 10);
		xpos = xpos + dist;
	}

	if (xpos > final_x) {
		var dist = Math.ceil((xpos - final_x) / 10);
		xpos = xpos - dist;
	}

	if (ypos < final_y) {
		var dist = Math.ceil((final_y - ypos) / 10);
		ypos = ypos + dist;
	}

	if (ypos > final_y) {
		var dist = Math.ceil((ypos - final_y) / 10);
		ypos = ypos - dist;
	}

	// Move elenment.
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";

	// Invoked move function after moved 1px
	var repeat = "moveElement('" + elementID + "'," + final_x + ", " + final_y + ", " + interval + ")";
	elem.movement = setTimeout(repeat, interval);
	track();
}

/*==================== End moveElement() function ====================*/

/**
* The previous() function is...
*
*
*/
function previous() {
	if (move < 0) {
		move += box_width;
	}
	moveElement('slider', move, 0, 10);
	track();
}

/*==================== End previous() function ====================*/

/**
* The next() function is...
*
*
*/
function next() {
	move = (move <= endpos) ? 0 : (move - box_width);
	moveElement('slider', move, 0, 10);
	track();
}

/*==================== End next() function ====================*/

function track() {
	var items = document.getElementsByClassName("item");	
	for (var i = 0; i < items.length; i++) {
		if (i == move) {
			items[move].style.background = "red";
			break;
		}else {
			items[move].style.background = "green";
		}
	}
}

/*==================== End track() function ====================*/

/**
* The slider() function is...
*
*
*/
function slider() {
	if (!document.getElementById) {
		return false;
	}

	var slider = document.getElementById('slider');
	var wrap_slider = document.getElementById('wrap-slider');

	// Set type for slider when it isn't set.
	if (!slider.style.position) {
		slider.style.position = "absolute";
	}

	if (!slider.style.left) {
		slider.style.left = "0px";
	}

	if (!slider.style.top) {
		slider.style.top = "0px";
	}

	// Setting parameters for slider
	var box_arr = slider.childNodes;
	var box_quantity = 0;
	for (var i = 0; i < box_arr.length; i++) {
		if (box_arr[i].className == 'slide-box') {
			box_quantity++;
			box_width = box_arr[i].offsetWidth;
			box_height = box_arr[i].offsetHeight;
		}
	}

	wrap_slider.style.height = box_height + "px";
	wrap_slider.style.width = box_width + "px";
	slider.style.width = (box_width * box_quantity) + "px";
	move = 0;
	endpos = -(box_width * 6);

	// Automatically run slider
	var idSet = setInterval('next()', 3000);

	// next_slide , prev_slide
	var next_slide = document.getElementById("next-slide");
	var prev_slide = document.getElementById("prev-slide");

	next_slide.onclick = function() {
		next();
		clearInterval(idSet);
		idSet = setInterval('next()', 3000);
	}

	prev_slide.onclick = function() {
		previous();
		clearInterval(idSet);
		idSet = setInterval('next()', 3000);
	}
}

/*==================== End slider() function ====================*/

window.onload = function() {
	slider();
}
