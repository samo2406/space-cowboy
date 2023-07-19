var cameraBorder;

function mainLoop() {
	if(currentLevel != 0) {
		objects.player.update();
		
		for (i in objects.enemies) {
			objects.enemies[i].update();
			if(!objects.player.hit && objects.player.isAbove(objects.enemies[i])) {
				health.hp--;
				objects.player.hit = true;
				objects.player.jump();
				sounds.damageSound.play();
			}
		}
		if (health.hp <= 0) gameOver();

		//Kontrola spúšťačov (trigerrov)
		for (i in objects.triggers) {
			if(!(objects.triggers[i].triggered) && objects.player.isAbove(objects.triggers[i])) {
				objects.triggers[i].onTrigger(objects.triggers[i]);
			}
		}		
	}
	
	//Pohyb kamery
	if (cameraMovement) {
		if (objects.player.x > (canvas.width - cameraBorder))
			for (i in objects)
				if (Array.isArray(objects[i]))
					for (j in objects[i]) {
						if(i == "enemies") {
							objects[i][j].startX = objects[i][j].startX + (((canvas.width - cameraBorder)-objects.player.x)*0.05);
							objects[i][j].endX = objects[i][j].endX + (((canvas.width - cameraBorder)-objects.player.x)*0.05);
						}
						objects[i][j].x = objects[i][j].x + (((canvas.width - cameraBorder)-objects.player.x)*0.05);
					}
				else
					objects[i].x = objects[i].x + (((canvas.width - cameraBorder)-objects.player.x)*0.05);
		
		if (objects.player.x < cameraBorder)
			for (i in objects)
				if (Array.isArray(objects[i]))
					for (j in objects[i]) {
						if(i == "enemies") {
							objects[i][j].startX = objects[i][j].startX + ((cameraBorder-objects.player.x)*0.05);
							objects[i][j].endX = objects[i][j].endX + ((cameraBorder-objects.player.x)*0.05);
						}
						objects[i][j].x = objects[i][j].x + ((cameraBorder-objects.player.x)*0.05);
					}
				else
					objects[i].x = objects[i].x + ((cameraBorder-objects.player.x)*0.05);
	}
	draw();
}
	
//Input z klávesnice
window.onkeydown = function(event) {
	keys[event.keyCode] = true;
};
window.onkeyup = function(event) {
	keys[event.keyCode] = false;
};

//Inicializácia premenných po načítaní stránky			
window.onload = function() {
	canvas = document.getElementById("canvas");
	canvas.onmousedown = mousedown;
	canvas.onmouseup = mouseup;
	canvas.onmousemove = mousemove;
	context = canvas.getContext("2d");

	buttons.startButton.setPosition(canvas.width/2 - buttons.startButton.width/2, canvas.height/2-25);
	buttons.startButton.onClick = function () {currentLevel = 1; loadLevel();}
	buttons.levelSelectButton.setPosition(canvas.width/2 - buttons.levelSelectButton.width/2, canvas.height/2+75);
	buttons.levelSelectButton.onClick = showAllLevels;
	buttons.tryAgainButton.setPosition(canvas.width/2 - buttons.tryAgainButton.width/2, canvas.height/2);
	buttons.tryAgainButton.onClick = loadLevel;
	buttons.nextLevelButton.setPosition(canvas.width/2 - buttons.nextLevelButton.width/2, 440);
	buttons.nextLevelButton.onClick = loadLevel;
	buttons.soundsButton.setPosition(canvas.width - buttons.soundsButton.width - 5, canvas.height - buttons.soundsButton.height - 5);
	buttons.soundsButton.onClick = toggleSounds;	
	buttons.instructionsButton.setPosition(canvas.width - buttons.instructionsButton.width - 5, 5);
	buttons.instructionsButton.onClick = toggleInstructions;	
	for (var i in buttons.levelButtons) {
		buttons.levelButtons[i].setPosition(300+((i-1)*250),180);		
	}
	buttons.levelButtons[1].onClick = function () {currentLevel = 1; loadLevel();}
	buttons.levelButtons[2].onClick = function () {currentLevel = 2; loadLevel();}
	buttons.levelButtons[3].onClick = function () {currentLevel = 3; loadLevel();}
	
	cameraBorder = 0.45 * canvas.width;
	timer = setInterval(mainLoop, 1000 / 60);
};