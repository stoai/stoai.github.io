flagUsername = false;
flagPassword = false;
flagEmail = false;
flagBirthday = false;

/**
*The checkUsername() function is check valid username.
*
*/
function checkUsername() {
	var username = document.getElementById("username");
	var check_username = document.getElementById("check-username");
	
	if (isNull(username.value)) {
		username.style.background = "#FDEDEC";
		check_username.innerHTML = "*Username not empty!"
	} else if (!checkLength(username.value)) {
		check_username.innerHTML = "*Username length min 8 letter.";
	} else if (!checkValidate(username.value)) {
		check_username.innerHTML = "*Username wrong format.";
	} else {
		flagUsername = true;
		check_username.innerHTML = "";
	}
}

/**
*The checkPassword() function is check valid password.
*
*/

function checkPassword() {
	var password = document.getElementById("password");
	var check_password = document.getElementById("check-password");
	
	if (isNull(password.value)) {
		password.style.background = "#FDEDEC";
		check_password.innerHTML = "*Password not empty!"
	} else if (!checkLength(password.value)) {
			check_password.innerHTML = "*Password length min 8 letter.";
	} else if (checkValidate(password.value)) {
		check_password.innerHTML = "*Password wrong format."
	} else {
		flagPassword = true;
		check_password.innerHTML = "";
	}
}

/**
*The checkEmail() function is check valid email.
*
*/
function checkEmail() {
	var email = document.getElementById("email");
	var check_email = document.getElementById("check-email");
	
	if (isNull(email.value)) {
		email.style.background = "#FDEDEC";
		check_email.innerHTML = "*Email not empty!"
	} else if (!checkValidateEmail(email.value)) {
		check_email.innerHTML = "*Email wrong format";
	} else {
		flagEmail = true;
		check_email.innerHTML = "";
	}
}

/**
*The checkBirthday() function is check valid birthday(not empty).
*
*/
function checkBirthday() {
	var birthday = document.getElementById("birthday");
	var check_birthday = document.getElementById("check-birthday");
	if (isNull(birthday.value)) {
		birthday.style.background = "#FDEDEC";
		check_birthday.innerHTML ="*Date of birth not empty!"
	} else {
		flagBirthday = true;
		check_birthday.innerHTML = "";
	}
}


/**
* The isNull() function is check field input empty or not empty.
*
*/
function isNull(text) {
	if (text == null || text == "") {
		return true;
	}
	return false;
}

/**
*The checkValidateEmail() function is check valid email.
*
*/
function checkValidateEmail(email) {
	var regex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
	return regex.test(email);
}

/**
* The checkLength() function is check length of text (length min 8 letters)
*
*/
function checkLength(text) {
	if (text.length < 8) {
		return false;
	}
	return true;
}

/**
*The checkValidate() function is check valid input text(ex:includes special digits).
*
*/

function checkValidate(text) {
	var regex = /^([0-9a-zA-Z])+$/;
	return regex.test(text);
}

/**
*The submitAjax() function is check valid fields and invoked callAjax() function.
*
*/
function submitAjax() {
	if ((flagUsername && flagPassword) && (flagEmail && flagBirthday)) {
		console.log("hey");
		callAjax("test.php");
		
	}
}

/**
*The callAjax() function is sends request to server through AJAX technology.
*
*/
function callAjax(url) {
	/*httpRequest = new XMLHttpRequest();
	if (!httpRequest) {
		window.alert("Can't initiate XMLHttpRequest");
		return false;
	}
	//url += "?username" + document.getElementById("username").value;
	httpRequest.open("GET", url, true);
	httpRequest.onreadystatechange = notify;
	httpRequest.send(null);*/
}
/**
*The notify() fucntion is a "callback". It's work after request success.
*
*/
function notify() {

	/*if (httpRequest.readyState == 4 && httpRequest.status == 200) { // value 'status' equal 200 means request successfully.
		var result = document.getElementById("result");
		if (httpRequest.responseText == "true") {
			result.innerHTML = "*Username is exist! Please enter another username.";
			result.style.color = "#E74C3C";
		} else {
			results.innerHTML = "Created successfully!";
			results.style.color = "#1ABC9C";
		}
	}
	window.alert("Error request:" + httpRequest.status);*/
}
