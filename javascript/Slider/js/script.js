count = 7;
currentItem = 1;
/**
*
*
*/
function prevAction() {
	if (currentItem > 1) {
		currentItem--;
	} else {
		currentItem = 7;
	}
	showSlide(currentItem);
}

/**
*
*
*/
function nextAction() {
	if (currentItem < count) {
		currentItem++;
	} else {
		currentItem = 1;
	}
	showSlide(currentItem);
}

/**
*
*
*/
function onClickIndex(a){
	var str = a.id;
	currentItem = str.substr(5,1);
	showSlide(currentItem);
} 

/**
*
*
*/
function showSlide(index) {
	for(i = 1; i <= 7; i++) {
		if (i == index) {
			document.getElementById("item" + i).style.display = "block";
			document.getElementById("index" + i).style.background = "red";
		} else {
			document.getElementById("item" + i).style.display = "none";
			document.getElementById("index" + i).style.background = "green";
		}
		
	}
}
