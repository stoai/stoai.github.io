days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]; 
months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]; 
months_length = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"); 
var d = new Date(); 
var mon = d.getMonth(); 
var year = d.getYear() + 1900; 

function fillTable() {
	document.write("<div id = 'main' style = 'display:none; '>"); 
	document.write("<table border = '1'><tr>"); 
	document.write("<td><button type = 'button' onclick = 'prevAction(); '>Prev</button</td>"); 
	document.write("<td id = 'td_mon' colspan = '2'></td>"); 
	document.write("<td id = 'td_year' colspan = '3'></td>"); 
	document.write("<td><button type = 'button' onclick = 'nextAction(); '>Next</button</td>"); 
	document.write("</tr>"); 
	printWeekDay(); 
	createDateTable(); 
	document.write("</table>"); 
	document.write("</div>")
	setDateContent(mon, year); 
}

function buildMonthList() {
	var res ="<select id = 'ddl_month' onchange = 'setMonth(); '>"; 
	for(i = 0;  i < months.length;  i++) {
		if(i == mon) {
			res  +="<option slected = 'selected' value =" + i +">" + months[i] +"</option>";
		}else {
			res  +="<option value =" + i +">" + months[i] +"</option>";	
		}
	}
	res +="</select>";
	return res; 
}
function buildYearList() {
	var res ="<select id = 'ddl_year' onChange = 'setYear(); '>"; 
	for (i = 1950; i <=  2015; i++) {
		if (year == i) {
			res  +="<option selected = 'selected' value =" + i  +">" + i +"</option>";	
		}else {
			res  +="<option value =" + i +">" + i +"</option>";
		}
	}
	res +="</select>"; 
	return res; 
}

function printWeekDay() {
	document.write("<tr>"); 
	for (i = 0; i<days.length; i++) {
		document.write("<td class = 'day'>"); 
		document.write(days[i]); 
		document.write("</td>"); 
	}
	document.write("</tr>"); 
}

function createDateTable() {
	var count = 0; 
	for (i = 0; i < 6; i++) {
		document.write("<tr>"); 
		for(j = 0; j < 7; j++) {
			document.write("<td><a href = '#' id = 'cell" + count +"' onclick = 'onClickDate(this)'></a></td>"); 
			count++; 
		}
		document.write("</tr>")
	}
}
/*
* 
*/
function setDateContent(mon, year) {
	
	//-----------REFRESH DROPDOWNLIST

	document.getElementById("td_mon").innerHTML = buildMonthList(); 
	document.getElementById("td_year").innerHTML = buildYearList(); 
	
	var first_date = new Date(year, mon, 1); 
	var of_day = first_date.getDay(); 
	var mon_length = months_length[mon]; 
	var check = false; 
	var start = 1; 

	var today = new Date(); 
	var td = today.getDate(); 
	var ty = today.getYear() + 1900; 
	var tm = today.getMonth(); 
	

	for(i = 0; i < 42; i++) {
		if(i == of_day) 
			check = true; 
		if(check == true && start <=  mon_length) {
			if(td == start && tm == mon && ty == year) {
				document.getElementById("cell" + i).innerHTML = start; 
				document.getElementById("cell" + i).style.color = "red"; 
			}
			else {
				document.getElementById("cell" + i).style.color = "#2582BE"; 
				document.getElementById("cell" + i).innerHTML = start; 
			}
			start++; 
		}else {
			document.getElementById("cell" + i).innerHTML = "";
		}
	}
}

function setYear() {
	var e = document.getElementById("ddl_year"); 
	year = e.options[e.selectedIndex].value; 
	setDateContent(mon, year); 
}

function setMonth() {
	var e = document.getElementById("ddl_month"); 
	mon = e.options[e.selectedIndex].value; 
	setDateContent(mon, year); 
}

function nextAction() {
	if (mon >= 0 && mon < 11) {
		mon++;
	}else {
		mon = 0;
	}
	setDateContent(mon, year); 
}

function prevAction() {
	if (mon <=  11 && mon > 0) {
		mon--;
	}
	else {
		mon = 11;
	}
	setDateContent(mon, year); 
}

function onClickDate(a) {
	var str = a.innerHTML  + "/" + (parseInt(mon) + 1) + "/" + year; 
	document.getElementById("input").value = str; 
	document.getElementById("main").style.display = "none"; 
}

function onClickCal() {
	document.getElementById("main").style.display = "block"; 
}

window.onload = fillTable();
document.getElementById("input").value = "";
