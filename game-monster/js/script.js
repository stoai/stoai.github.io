var game = document.getElementById("game");
var contextGame = game.getContext("2d");
var option = document.getElementById("option");
var contextOption = option.getContext("2d");
var score = 0; //Score
var bestScore = 10;//
var fakeScore = 100;//Use for setting level.
var numberMonster = 1; //Number monster.
var heart = 4;//Stand for turn play game.(Default is 5 times).
var speed = 1; //Speed movement of monsters.
var flagRun = true;//Flag check run game.
var flagPause = false;//Flag check button "Pause".
var flagStop = false;//Flag check button "Stop".
var flagBoom = false;//Flag check button "Boom".
var quantityBoom = 3;//Quantity boom allowed using.
var countStop = 3;//Times allowed stop.
var listBlood = new Array();

//Create background image.
var bgImage = new Image();
bgImage.src = "images/background.jpg";

//Create monster image.
var monsterImage = new Image();
monsterImage.src = "images/monster.gif";

//Create main monster image.
var mainMonsterImage = new Image();
mainMonsterImage.src = "images/mainMonster.png";

//Create restart image
var restartImage = new Image();
restartImage.src = "images/restart.png";

//Create heart image
var heartItem = new Image();
heartItem.src = "images/heart.png";

//Create stop image
var stopImage = new Image();
stopImage.src = "images/stop.png";

//Create boom image
var boomImage = new Image();
boomImage.src = "images/boom.gif";

//Create blood image
var bloodImage = new Image();
bloodImage.src = "images/blood.png";

//Create pause image
var pauseImage = new Image();
pauseImage.src = "images/pause.png";


//Create object monster
var Monster_1 = {
	beginX: 0,//Position monster appear (beginX,beginY).
	beginY: 0,//
	stopX: 120,//Position monster stop move(stopX,stopY) and come back start position (beginX,beginY).
	stopY: 120,//
	startX: 0,//Same (beginX,beginY), to flexible appear.
	startY: 0,//
	endX: 120,//Same (stopX,stopY).
	endY: 120,//
	speed: speed,//speed movement of monster.
	click: false,//'false' when monster alive, 'true' when monster die (clicked).
	show: true,//'false' when monster not appear, 'true' when monster appear.
	dieX: 0,//Determine position(dieX,dieY) where monster die (clicked).
	dieY: 0//
}

var Monster_2 = {
	beginX: 190,//Position monster appear (beginX,beginY)
	beginY: 0,//
	stopX: 190,//Position monster stop move(stopX,stopY) and come back start position (beginX,beginY)
	stopY: 120,//
	startX: 190,//Same (beginX,beginY), to flexible appear.
	startY: 0,//
	endX: 190,//Same (stopX,stopY)
	endY: 120,//
	
	speed: speed,//speed movement of monster.
	click: false,//'false' when monster alive, 'true' when monster die (clicked).
	show: false,//'false' when monster not appear, 'true' when monster appear.
	dieX: 0,//Determine position(dieX,dieY) where monster die (clicked).
	dieY: 0//
}

var Monster_3 = {
	beginX: 380,//Position monster appear (beginX,beginY)
	beginY: 0,//
	stopX: 260,//Position monster stop move(stopX,stopY) and come back start position (beginX,beginY)
	stopY: 120,//
	startX: 380,//Same (beginX,beginY), to flexible appear.
	startY: 0,//
	endX: 260,//Same (stopX,stopY)
	endY: 120,//
	
	speed: speed,//speed movement of monster.
	click: false,//'false' when monster alive, 'true' when monster die (clicked).
	show: false,//'false' when monster not appear, 'true' when monster appear.
	dieX: 0,//Determine position(dieX,dieY) where monster die (clicked).
	dieY: 0,//
}

var Monster_4 = {
	beginX: 380,//Position monster appear (beginX,beginY)
	beginY: 190,//
	stopX: 260,//Position monster stop move(stopX,stopY) and come back start position (beginX,beginY)
	stopY: 190,//
	startX: 380,//Same (beginX,beginY), to flexible appear.
	startY: 190,//
	endX: 260,//Same (stopX,stopY)
	endY: 190,//
	
	speed: speed,//speed movement of monster.
	click: false,//'false' when monster alive, 'true' when monster die (clicked).
	show: false,//'false' when monster not appear, 'true' when monster appear.
	dieX: 0,//Determine position(dieX,dieY) where monster die (clicked).
	dieY: 0//
}

var Monster_5 = {
	beginX: 380, //Position monster appear (beginX,beginY)
	beginY: 380, //
	stopX: 260,//Position monster stop move(stopX,stopY) and come back start position (beginX,beginY)
	stopY: 260,//
	startX: 380,//Same (beginX,beginY), to flexible appear.
	startY: 380,//
	endX: 260,//Same (stopX,stopY)
	endY: 260,//
	
	speed: speed,//speed movement of monster.
	click: false,//'false' when monster alive, 'true' when monster die (clicked).
	show: false,//'false' when monster not appear, 'true' when monster appear.
	dieX: 0,//Determine position(dieX,dieY) where monster die (clicked).
	dieY: 0//
}

var Monster_6 = {
	beginX: 190,//Position monster appear (beginX,beginY)
	beginY: 380,//
	stopX: 190,//Position monster stop move(stopX,stopY) and come back start position (beginX,beginY)
	stopY: 260,//
	startX: 190,//Same (beginX,beginY), to flexible appear.
	startY: 380,//
	endX: 190,//Same (stopX,stopY)
	endY: 260,//
	
	speed: speed,//speed movement of monster.
	click: false,//'false' when monster alive, 'true' when monster die (clicked).
	show: false,//'false' when monster not appear, 'true' when monster appear.
	dieX: 0,//Determine position(dieX,dieY) where monster die (clicked).
	dieY: 0//
}

var Monster_7 = {
	beginX: 0,//Position monster appear (beginX,beginY)
	beginY: 380,//
	stopX: 120,//Position monster stop move(stopX,stopY) and come back start position (beginX,beginY)
	stopY: 260,//
	startX: 0,//Same (beginX,beginY), to flexible appear.
	startY: 380,//
	endX: 120,//Same (stopX,stopY)
	endY: 260,//
	
	speed: speed,//speed movement of monster.
	click: false,//'false' when monster alive, 'true' when monster die (clicked).
	show: false,//'false' when monster not appear, 'true' when monster appear.
	dieX: 0,//Determine position(dieX,dieY) where monster die (clicked).
	dieY: 0//
}

var Monster_8 = {
	beginX: 0,//Position monster appear (beginX,beginY)
	beginY: 190,//
	stopX: 120,//Position monster stop move(stopX,stopY) and come back start position (beginX,beginY)
	stopY: 190,//
	startX: 0,//Same (beginX,beginY), to flexible appear.
	startY: 190,//
	endX: 120,//Same (stopX,stopY)
	endY: 190,//
	
	speed: speed,//speed movement of monster.
	click: false,//'false' when monster alive, 'true' when monster die (clicked).
	show: false,//'false' when monster not appear, 'true' when monster appear.
	dieX: 0,//Determine position(dieX,dieY) where monster die (clicked).
	dieY: 0//
}

var MainMonster = {
	startX: 190,
	startY: 190,
	stopX: Math.floor(Math.random() * 500),
	stopY: Math.floor(Math.random() * 500),
	speed: 1,
	click: false,
	show: true,
	dieX: 0,
	dieY: 0
}

/*======================================================BEHAVIOR=====================================================*/

/*=====================OPTION=====================*/

//Create event click for buttons.
option.addEventListener("click", function(e) {
	 var location_X = e.pageX - this.offsetLeft;
 	 var location_Y = e.pageY - this.offsetTop;
	console.log("OPTION location_X: " + location_X);
	console.log("OPTION location_Y: " + location_Y);

	//Button Pause
	if ((location_X > 404 && location_X < 437) && ( location_Y > 60 && location_Y < 99)) { 
		flagPause = true;
		if (flagRun) {
			flagRun = false;
			score -= 5;
			fakeScore -= 5;
			heart--;
			console.log("PAUSE");
		}
		setTimeout(function() {
				flagRun = true;
				flagPause = false;
				main();
			}, 7000);
	}

	//Button Restart
	if ((location_X > 457 && location_Y < 488) && (location_Y > 64 && location_Y < 98)) {
		restart();
		main();
		console.log("RESTART");
	}

	//Button Boom
	if ((location_X > 300 && location_X < 333) && (location_Y > 63 && location_Y < 96)) {
		flagBoom = true;
		if (flagBoom) {
			if (quantityBoom == 0) {
				flagBoom = false;
			} else {
				actionBoom();
				quantityBoom--;
				console.log("BOOM");
			}
		}
	}

	//Button Stop
	if ((location_X > 351 && location_X < 388) && (location_Y > 57 && location_Y < 98)) {
		if (countStop > 0) {
			if (flagRun) {
				flagRun = false;
				flagStop = true;
				countStop--;
				console.log("STOP");
			}
			setTimeout(function() {
				flagRun = true;
				flagStop = false;
				main();
			}, 2000);
		}
	}
});

/*=====================GAME=====================*/

//Create event click for monsters.
game.addEventListener("click", function (e) {
	var location_X = e.pageX - this.offsetLeft;
	var location_Y = e.pageY - this.offsetTop;
	console.log("GAME location_X: " + location_X);
	console.log("GAME location_Y: " + location_Y);
	
	//When pause can't click monsters.
	if (!flagPause) {
		if (Monster_1.show) {
			clickMonster(Monster_1, location_X, location_Y);
		}

		if (Monster_2.show) {
			clickMonster(Monster_2, location_X, location_Y);
		}

		if (Monster_3.show) {
			clickMonster(Monster_3, location_X, location_Y);
		}

		if (Monster_4.show) {
			clickMonster(Monster_4, location_X, location_Y);
		}

		if (Monster_5.show) {
			clickMonster(Monster_5, location_X, location_Y);
		}

		if (Monster_6.show) {
			clickMonster(Monster_6, location_X, location_Y);
		}

		if (Monster_7.show) {
			clickMonster(Monster_7, location_X, location_Y);
		}

		if (Monster_8.show) {
			clickMonster(Monster_8, location_X, location_Y);
		}

		if (MainMonster.show && (MainMonster.startX < location_X) && (location_X < (MainMonster.startX + monsterImage.width))
			&& (MainMonster.startY < location_Y) && (location_Y < (MainMonster.startY + monsterImage.height))) {
			score += 20;
			heart++;
			fakeScore += 10;
			MainMonster.click = true;
			MainMonster.show = false;
			MainMonster.dieX = MainMonster.startX;
			MainMonster.dieY = MainMonster.startY;
			MainMonster.startX = Math.floor(Math.random * 500 );
			MainMonster.startY = Math.floor(Math.random * 500 );
			MainMonster.stopX = Math.floor(Math.random * 500 );
			MainMonster.stopY = Math.floor(Math.random * 500 );
			showBlood(MainMonster.dieX, MainMonster.dieY);
		}
	}

	if (flagStop) {
		if (Monster_1.show) {
			clickMonster(Monster_1, location_X, location_Y);
		}

		if (Monster_2.show) {
			clickMonster(Monster_2, location_X, location_Y);
		}

		if (Monster_3.show) {
			clickMonster(Monster_3, location_X, location_Y);
		}

		if (Monster_4.show) {
			clickMonster(Monster_4, location_X, location_Y);
		}

		if (Monster_5.show) {
			clickMonster(Monster_5, location_X, location_Y);
		}

		if (Monster_6.show) {
			clickMonster(Monster_6, location_X, location_Y);
		}

		if (Monster_7.show) {
			clickMonster(Monster_7, location_X, location_Y);
		}

		if (Monster_8.show) {
			clickMonster(Monster_8, location_X, location_Y);
		}

		if (MainMonster.show) {
			clickMonster(MainMonster, location_X, location_Y);
		}
	}
});

//Execute action for click monsters.
function clickMonster(monster, location_X, location_Y) {
		if ((monster.startX < location_X) && (location_X < (monster.startX + monsterImage.width)) && (monster.startY < location_Y) && (location_Y < (monster.startY + monsterImage.height))) {
			if (score % 200 == 0) {
				MainMonster.show =  true;
			}
			score += 10;
			fakeScore += 10;
			monster.click = false;
			monster.show = false;
			monster.dieX = monster.startX;
			monster.dieY = monster.startY;
			monster.startX = monster.beginX;
			monster.startY = monster.beginY;
			monster.stopX = monster.endX;
			monster.stopY = monster.endY;
			showBlood(monster.dieX, monster.dieY);
			render();
			for (var i = 0; i < numberMonster; i++) {
				randomMonster();
			}
		} else {
			score -= 10;
			fakeScore -= 10;
			if(score < 0){
				heart--;
				score = 0;
			}
		}
}

//Create element blood when monster died (clicked).
var showBlood = function(X, Y) {
	var Blood = {
		pos_X: X,
		pos_Y: Y
	};
	listBlood[listBlood.length] = Blood;//Add blood object.
}

//Execute action click Boom button.
var actionBoom = function() {
	if (Monster_1.show) {
		score += 10;
		Monster_1.show = false;
		Monster_1.click = false;
		showBlood(Monster_1.startX, Monster_1.startY);
	}

	if (Monster_2.show) {
		score += 10;
		Monster_2.show = false;
		Monster_2.click = false;
		showBlood(Monster_2.startX, Monster_2.startY);
	}

	if (Monster_3.show) {
		score += 10;
		Monster_3.show = false;
		Monster_3.click = false;
		showBlood(Monster_3.startX, Monster_3.startY);
	}

	if (Monster_4.show) {
		score += 10;
		Monster_4.show = false;
		Monster_4.click = false;
		showBlood(Monster_4.startX, Monster_4.startY);
	}

	if (Monster_5.show) {
		score += 10;
		Monster_5.show = false;
		Monster_5.click = false;
		showBlood(Monster_5.startX, Monster_5.startY);
	}

	if (Monster_6.show) {
		score += 10;
		Monster_6.show = false;
		Monster_6.click = false;
		showBlood(Monster_6.startX, Monster_6.startY);
	}

	if (Monster_7.show) {
		score += 10;
		Monster_7.show = false;
		Monster_7.click = false;
		showBlood(Monster_7.startX, Monster_7.startY);
	}

	if (Monster_8.show) {
		score += 10;
		Monster_8.show = false;
		Monster_8.click = false;
		showBlood(Monster_8.startX, Monster_8.startY);
	}

	if (MainMonster.show) {
		score += 20;
		MainMonster.show = false;
		MainMonster.click = false;
		showBlood(MainMonster.startX, MainMonster.startY);
	}

	speed = speed;
	render();
	for (var i = 0; i < numberMonster; i++) {
		randomMonster();
	}
}

//Method random monsters.
var randomMonster = function() {
	if (!Monster_1.show) {
		refreshMonster(Monster_1);
	}
	
	if (!Monster_2.show) {
		refreshMonster(Monster_2);
	}
	
	if (!Monster_3.show) {
		refreshMonster(Monster_3);
	}
	
	if (!Monster_4.show) {
		refreshMonster(Monster_4);
	}
	
	if (!Monster_5.show) {
		refreshMonster(Monster_5);
	}
	
	if (!Monster_6.show) {
		refreshMonster(Monster_6);
	}
	
	if (!Monster_7.show) {
		refreshMonster(Monster_7);
	}
	
	if (!Monster_8.show) {
		refreshMonster(Monster_8);
	}
	
	var value = Math.floor((Math.random() * 8) + 1);
	console.log("Value random: "+value);
	switch(value) {
		case 1:
			if (!Monster_1.show) {
				Monster_1.show = true;
			}
			break;
		case 2:
			if (!Monster_2.show) {
				Monster_2.show = true;
			}
			break;
		case 3:
			if (!Monster_3.show) {
				Monster_3.show = true;
			}
			break;
		case 4:
			if (!Monster_4.show) {
				Monster_4.show = true;
			}
			break;
		case 5:
			if (!Monster_5.show) {
				Monster_5.show = true;
			}
			break;
		case 6:
			if (!Monster_6.show) {
				Monster_6.show = true;
			}
			break;
		case 7:
			if (!Monster_7.show) {
				Monster_7.show = true;
			}
			break;
		case 8:
			if (!Monster_8.show) {
				Monster_8.show = true;
			}
			break;
	}
}

//Method refresh monster.
function refreshMonster(monster) {
	monster.show = false;
	monster.click = false;
	monster.startX = monster.beginX;
	monster.startY = monster.beginY;
	monster.stopX = monster.endX;
	monster.stopY = monster.endY;
	monster.speed = speed;
}

//Method restart game.
var restart = function() {
	speed = 1;
	flagRun = true;
	numberMonster = 1;
	score = 0;
	fakeScore = 10;
	heart = 5;
	quantityBoom = 3;
	countStop = 3;
	flagPause = false;
	flagStop = false;
	flagBoom = false;
	listBlood = new Array();
	refreshMonster(Monster_1);
	refreshMonster(Monster_2);
	refreshMonster(Monster_3);
	refreshMonster(Monster_4);
	refreshMonster(Monster_5);
	refreshMonster(Monster_6);
	refreshMonster(Monster_7);
	refreshMonster(Monster_8);
	Monster_1.show = true;
}

//Method update main monster.
var updateMainMonster = function(monster) {
	if (monster.startX > monster.stopX) {
		monster.startX -= monster.speed;
	} else if (monster.startX < monster.stopX) {
		monster.startX += monster.speed;
	}

	if (monster.startY > monster.stopY) {
		monster.startY -= monster.speed;
	} else if (monster.startY < monster.stopY) {
		monster.startY += monster.speed;
	}

	if (monster.startX == monster.stopX && monster.startY == monster.stopY) {
		monster.startX = monster.stopX;
		monster.startY = monster.stopY;
		monster.stopX = Math.floor(Math.random() * 500);
		monster.stopY = Math.floor(Math.random() * 500);
	}
}

//Determine positon monster killed as blood image.
var updateBlood = function() {
	if (listBlood.length > 0) {
		for (var index = 0; index < listBlood.length; index++) {
			contextGame.drawImage(bloodImage, listBlood[index].pos_X, listBlood[index].pos_Y);
		}
	}
	
}

//Method draw all elements in canvas.
var render = function() {
	contextGame.drawImage(bgImage, 0, 0, game.width, game.height);

	updateBlood();

	if (Monster_1.show) {
		contextGame.drawImage(monsterImage, Monster_1.startX, Monster_1.startY);
	}

	if (Monster_2.show) {
		contextGame.drawImage(monsterImage, Monster_2.startX, Monster_2.startY);
	}

	if (Monster_3.show) {
		contextGame.drawImage(monsterImage, Monster_3.startX, Monster_3.startY);
	}

	if (Monster_4.show) {
		contextGame.drawImage(monsterImage, Monster_4.startX, Monster_4.startY);
	}

	if (Monster_5.show) {
		contextGame.drawImage(monsterImage, Monster_5.startX, Monster_5.startY);
	}

	if (Monster_6.show) {
		contextGame.drawImage(monsterImage, Monster_6.startX, Monster_6.startY);
	}

	if (Monster_7.show) {
		contextGame.drawImage(monsterImage, Monster_7.startX, Monster_7.startY);
	}

	if (Monster_8.show) {
		contextGame.drawImage(monsterImage, Monster_8.startX, Monster_8.startY);
	}

	if (MainMonster.show) {
		updateMainMonster(MainMonster);
		contextGame.drawImage(mainMonsterImage, MainMonster.startX, MainMonster.startY);
	}

	contextOption.clearRect(0, 0, option.width, option.height);
	contextOption.fillStyle = "rgb(29, 214, 4)";
	contextOption.font = "20px Arial";
	contextOption.fillText("Score: " + score, 10, 30);
	contextOption.fillText("Random Monster: " + numberMonster, 300, 30);
	contextOption.fillText("Heart: ", 10, 60);
	contextOption.fillText("Speed: " + speed, 10, 90);
	
	var temp = 0;
	for (var i = 1; i <= heart; i++) {
		contextOption.drawImage(heartItem, (70 + temp), 45, 20, 20);
		temp += 20;
	}
	
	contextOption.drawImage(boomImage, 290, 60, 50, 40);
	contextOption.drawImage(stopImage, 350, 60, 40, 40);
	contextOption.drawImage(pauseImage, 400, 60, 40, 40);
	contextOption.drawImage(restartImage, 450, 60, 40, 40);
	contextOption.fillStyle = "#FFFFFF";
	contextOption.font = "35px Arial";
	contextOption.fillText(quantityBoom, 305, 70);
	contextOption.fillText(countStop, 360, 70);
	contextOption.fillStyle = "rgb(230, 221, 240)";
	contextOption.font = "20px Arial";
	
	if (flagPause) {
		contextGame.fillStyle = "#FFFFFF";
		contextGame.font = "50px Arial";
		contextGame.fillText("Pause!!!", 180, 240);
	}

	if (flagStop) {
		contextGame.fillStyle = "#FFFFFF";
		contextGame.font = "50px Arial";
		contextGame.fillText("STOP!!!", 180, 240);
	}
}

//Method update monster
var updateMonster = function(monster) {
	monster.click = false;
	
	if (monster.startX > monster.stopX) {
		monster.startX -= monster.speed;
	} else if (monster.startX < monster.stopX) {
		monster.startX += monster.speed;
	}

	if (monster.startY > monster.stopY) {
		monster.startY -= monster.speed;
	} else if (monster.startY < monster.stopY) {
		monster.startY += monster.speed;
	}

	if (monster.startX == monster.stopX && monster.startY == monster.stopY) {
		monster.startX = monster.stopX;
		monster.startY = monster.stopY;
		monster.stopX = monster.beginX;
		monster.stopY = monster.beginY;
	}

	if (monster.startX == monster.beginX && monster.startY == monster.beginY) {
		monster.show = false;
		monster.stop = true;
		monster.startX = monster.beginX;
		monster.startY = monster.beginY;
		monster.stopX = monster.endX;
		monster.stopY = monster.endY;
		randomMonster();
	}
}

//Setting level game.
var setLevel = function() {
	var level = fakeScore / 100;
	console.log(("Level: " + level));
	switch (parseInt(level)) {
		case 1:
			speed = 1;
			numberMonster = 1;
			break;
		case 2:
			speed = 2;
			numberMonster = 2;
			break;
		case 3:
			speed = 3;
			numberMonster = 3;
			break;
		case 4:
			speed = 4;
			numberMonster = 4;
			break;
		case 5:
			speed = 5;
			numberMonster = 5;
			break;
		case 6:
			speed = 6;
			numberMonster = 6;
			break;
	}
}

//Method run game.
var main = function() {

	setLevel();
	
	if (Monster_1.show) {
		updateMonster(Monster_1);
	}
	
	if (Monster_2.show) {
		updateMonster(Monster_2);
	}
	
	if (Monster_3.show) {
		updateMonster(Monster_3);
	}
	
	if (Monster_4.show) {
		updateMonster(Monster_4);
	}
	
	if (Monster_5.show) {
		updateMonster(Monster_5);
	}
	
	if (Monster_6.show) {
		updateMonster(Monster_6);
	}
	
	if (Monster_7.show) {
		updateMonster(Monster_7);
	}
	
	if (Monster_8.show) {
		updateMonster(Monster_8);
	}
	
	render();
	
	var best = parseInt(localStorage.getItem("bestScore"));
	
	if (best < score) {
		localStorage.setItem("bestScore", score);
	}
	
	if (heart == 0) {
		contextGame.fillStyle = "red";
		contextGame.font = "50px Arial";
		contextGame.fillText("Game Over!!!", 120, 200);
		contextGame.font = "30px Arial";
		contextGame.fillStyle = "#5bfa3f";
		contextGame.strokeText("Score = " + score, 170, 240);
		contextGame.strokeText("Best score = " + localStorage.getItem("bestScore"), 170, 280);
	} else {
		if (flagRun) {
			requestAnimationFrame(main);
		}
	}
}

/*=====================*/
window.onload = main();

