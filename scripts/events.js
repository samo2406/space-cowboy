function levelEnd() {
	clearInterval(levelTimer);
	playerHasControl = false;
	showLevelEnd = true;
	showInstructionsButton = false;
	clearInterval(timer);
	currentLevel++;
	console.log("Level End");
			
	sounds.levelMusic.stop();
	sounds.levelEndSound.play();
}

function loadLevel() {
		clearInterval(timer);
		showStart = false;
		showLevels = false;
		showLevelEnd = false;
		showGameOver = false;
		showObjects = true;
		showInstructionsButton = true;
		playerHasControl = true;
		cameraMovement = false;
		health.hp = 3;
				
		switch(currentLevel) {
			case 1:
				level1();
				break;
			case 2:
				level2();
				break;
			case 3:
				level3();
				break;
			default:
				showAllLevels();
		} 
		
	timer = setInterval(mainLoop, 1000 / 60);
	levelTime = 0;
	levelTimer = setInterval(increaseTime, 10);
}

function increaseTime() {
	levelTime = levelTime+10;
}

function showAllLevels() {
	showStart = false;
	showLevelEnd = false;
	showGameOver = false;
	showObjects = false;
	showInstructionsButton = false;
	showLevels = true;
	currentLevel=0;
	clearInterval(timer);
	timer = setInterval(mainLoop, 1000 / 60);
}	
		
function gameOver() {
	health.hp = 0;
	playerHasControl = false;
	showGameOver = true;
	showInstructionsButton = false;
	clearInterval(timer);
	clearInterval(levelTimer);
	console.log("Game over");
			
	sounds.levelMusic.stop();
	sounds.deathSound.play();					
}

function toggleInstructions() {
	if (showInstructions) {
		showInstructions = false;
		playerHasControl = true;
		buttons.instructionsButton.img.src = "./assets/buttons/instructions.png";
	} else {
		playerHasControl = false;
		showInstructions = true;
		buttons.instructionsButton.img.src = "./assets/buttons/x.png";
		console.log("Instructions");
	}
}

function cameraEnabler(trigger) {
	trigger.triggered = true;
	cameraMovement = true;
	console.log("Camera movement enabled");
}

function addHp(trigger) {	
	if(health.hp < 3) {
		health.hp++;
		trigger.triggered = true;
		for (var i in objects.decorations) {
			if (objects.player.isAbove(objects.decorations[i])) {
				objects.decorations.splice(i,1);
				break;
			}
		}
	}
}
			
function toggleSounds() {
	if (soundsON) {
		for(var i in sounds) {
			sounds[i].sound.volume = 0;
		}
	soundsON = false;
	buttons.soundsButton.img.src = "./assets/buttons/soundsOFF.png";
	draw();
	} else {
		for(var i in sounds) {
			sounds[i].sound.volume = 0.25;
		}						
		soundsON = true;
		buttons.soundsButton.img.src = "./assets/buttons/soundsON.png";
		draw();
	}
}