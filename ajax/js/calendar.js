 days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
 months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
 months_length = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
 
 DAY = new Date();
 MONTH = DAY.getMonth();
 YEAR = DAY.getYear() + 1900;

/**
* The initTable() function creates a table (frame) to show calendar.
*
*/
function initCalendar() {
	document.write("<div id = 'main' style = 'display:none; margin-left: 60px'>");
	document.write("<table border = '2'>");
	document.write("<tr>");
	//
	document.write("<td><a href='#' onclick= 'prevYear();'>&larr;</a></td>");
	document.write("<td><button type = 'button' onclick = 'prevMonth();'>Prev</button</td>");
	document.write("<td id = 'id_month' colspan = '2'></td>");
	document.write("<td id = 'id_year' colspan = '1'></td>");
	document.write("<td><button type = 'button' onclick = 'nextMonth();'>Next</button</td>");
	//
	document.write("<td><a href='#' onclick= 'nextYear();'>&rarr;</a></td>");
	document.write("</tr>");
	setWeekDay();
	createDateTable();
	document.write("</table>");
	document.write("</div>")
	setDateContent(MONTH, YEAR);
}

/**
* The setMonthList() function is set dropdown-list of months.
*
*/
function setMonthList() {
	var res = "<select id = 'selected_month' onchange = 'setMonth();' >";
	for (i = 0;  i < months.length;  i++) {
		if (i == MONTH) {
			res  += "<option selected = 'selected' value ="+ i +">" + months[i] +"</option>";
		}else {
			res  += "<option value ="+ i +">"+ months[i] +"</option>";
		}
	}
	res += "</select>";
	return res;
}

/**
* The setYearList() function is set dropdown-list of years.
*
*/
function setYearList() {
	var res = "<select id = 'selected_year' onchange = 'setYear();' >";
	for (i = 1950; i <=  2097; i++) {
		if (YEAR == i) {
			res  += "<option selected = 'selected' value =" + i +">" + i +"</option>";
		}else {
			res  += "<option value =" + i +">" + i +"</option>";
		}
	}
	res += "</select>";
	return res;

}

/**
* The setWeekDay() function is prints weekday from Sunday(0) to Saturday(6).
*
*/
function setWeekDay() {
	document.write("<tr>");
	for (i = 0; i < days.length; i++) {
		document.write("<th class = 'day'>");
		document.write(days[i]);
		document.write("</th>");
	}
	document.write("</tr>");
}

/**
* The createDateTable() function is prints a table includes 5 rows and 6 columns to holds dates in month.
*
*/
function createDateTable() {
	var index = 0;
	for (i = 0; i < 6; i++) {
		document.write("<tr>");
		for (j = 0; j < 7; j++) {
			document.write("<td><a href ='#' id ='cell" + index +"' onclick = 'onClickDate(this)'></a></td>");
			index++;
		}
		document.write("</tr>");
	}
}
/**
* The setDateContent() function is full-filled dates in month and show currently date (red).
*
*/
function setDateContent(MONTH, YEAR) {
	document.getElementById("id_month").innerHTML = setMonthList();
	document.getElementById("id_year").innerHTML = setYearList();

	var first_date = new Date(YEAR, MONTH, 1);
	var of_day = first_date.getDay();
	var mon_length = months_length[MONTH];
	var check = false;
	var start = 1;

	var today = new Date();
	var currentDay = today.getDate();
	var currentYear = today.getYear() + 1900;
	var currentMonth = today.getMonth();

	for (i = 0; i < 42; i++) {
		if (i == of_day) {
			check = true;
		}
		if (check == true && start <=  mon_length) {
			if (currentDay == start && currentMonth == MONTH && currentYear == YEAR) {
				document.getElementById("cell" + i).innerHTML = start;
				document.getElementById("cell" + i).style.color = "red";
			}else {
				document.getElementById("cell" + i).innerHTML = start;
				document.getElementById("cell" + i).style.color = "#2582BE";
			}
			start++;
		}else {
			document.getElementById("cell" + i).innerHTML = "";
		}
	}
}

/**
* The setYear() function is set selected year and display corresponding dates in month, selected year.
*
*/
function setYear() {
	var element = document.getElementById("selected_year");
	YEAR = element.options[element.selectedIndex].value;
	setDateContent(MONTH, YEAR);
}

/**
* The setMonth() function is set selected month and display dates in selected month.
*
*/
function setMonth() {
	var element = document.getElementById("selected_month");
	MONTH = element.options[element.selectedIndex].value;
	setDateContent(MONTH, YEAR);
}

/**
* The nextMonth() function is move to next month.
*
*/
function nextMonth() {
	if (MONTH >= 0 && MONTH < 11) {
		MONTH++;
	}else {
		MONTH = 0;
		YEAR++;
	}
	setDateContent(MONTH, YEAR);
}

/**
* The nextYear() function is move to next year.
*
*/
function nextYear() {
	if (YEAR < 2097) {
		YEAR++;
	}
	setDateContent(MONTH, YEAR);
}

/**
* The prevMonth() function is move to previous month.
*
*/
function prevMonth() {
	if (MONTH <=  11 && MONTH > 0) {
		MONTH--;
	}else {
		MONTH = 11;
		YEAR--;
	}
	setDateContent(MONTH, YEAR);
}

/**
* The prevYear() function is move to previous year.
*
*/
function prevYear() {
	if (YEAR > 1950) {
		YEAR--;
	}
	setDateContent(MONTH, YEAR);
}

/**
* The checkTime() function to parse numbers less than 10 to format 0x (Example: 9 to 09)
*
*/
function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
     return i;
}

/**
* The onClickDate() function to display information of selected date (date/month/year) into input tag.
*
*/
function onClickDate(ob) {
	var info = checkTime(parseInt(ob.innerHTML)) + " - " + checkTime((parseInt(MONTH) + 1)) + " - " + YEAR;
	document.getElementById("birthday").value = info;
	document.getElementById("main").style.display = "none";
}

/**
* The onDefaultDate() function to display default date (current date) into input tag.
*
*/
function onDefaultDate() {
	var defaultDate = checkTime(parseInt(DAY.getDate())) + " - " + checkTime((parseInt(MONTH) + 1)) + " - " + YEAR;
	document.getElementById("birthday").value = defaultDate;
}

/**
* The onClickCal() function to display calendar.
*
*/
function onClickCal() {
	document.getElementById("main").style.display = "block";
}

/**
* Invoked initTable() and onDefaultDate() functions and refresh tag input when load page.
*
*/
onDefaultDate();
initCalendar();