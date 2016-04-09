var flagUsername = false;
var flagPassword = false;
var flagEmail = false;

/**
*The checkUsername() function is check valid username.
*
*/
function checkUsername() {
	var username = document.getElementById("username");
	var check_username = document.getElementById("check-username");
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
		username.style.background = "#FFF";
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
	} else if (!checkValidate(password.value)) {
		check_password.innerHTML = "*Password wrong format."
	} else {
		flagPassword = true;
		check_password.innerHTML = "";
		password.style.background = "#FFF";
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
		check_email.innerHTML = "*Email wrong format (Example: nopainnogain@gmail.com)";
	} else {
		flagEmail = true;
		check_email.innerHTML = "";
		email.style.background = "#FFF";
	}
}

/**
* The isNull() function is check field input empty or not empty.
*
*/
function isNull(text) {
	if (text == "" || text == null) {
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
*The checkValidate() function is check valid input text(ex: at least one special characters).
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
	if (flagUsername && flagPassword && flagEmail) {
		console.log("flagUsername: " + flagUsername);
		console.log("flagPassword: " + flagPassword);
		console.log("flagEmail: " + flagEmail);
		callAjax("test.php");
		console.log("DONE!");
	} else {
		checkUsername();
		checkPassword();
		checkEmail();
	}
}

/**
*The callAjax() function is sends request to server through AJAX technology.
*
*/
function callAjax(url) {
	httpRequest = new XMLHttpRequest();
	if (!httpRequest) {
		window.alert("Can't initiate XMLHttpRequest");
		return false;
	}
	httpRequest.open("GET", url, true);
	httpRequest.onreadystatechange = notify;
	httpRequest.send(null);
	console.log("Works!");
}

/**
*The notify() fucntion is a "callback". It's work after request success.
*
*/
function notify() {
	if (httpRequest.readyState == 4 && httpRequest.status == 200) { // value 'status' equal 200 means request successfully.
		var username = document.getElementById("username");
		var result = document.getElementById("result");
		console.log("responseText=" + httpRequest.responseText);
		if (httpRequest.responseText == "true") {
			result.innerHTML = "*Username is exist! Please enter another username.";
		} else {
			if (username.value != "") {
				result.innerHTML = "Account " + username.value + " created successfully!";	
			}
		}
	}
} 

/**
*The onReset() function is reset fields and flags.
*
*/
function onReset() {
	document.getElementById('username').value = "";
	document.getElementById('password').value = "";
	document.getElementById('email').value = "";
	document.getElementById('result').innerHTML = "";
	flagUsername = false;
	flagPassword = false;
	flagEmail = false;
}