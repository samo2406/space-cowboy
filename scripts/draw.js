function textWithShadow (text ,size, color, shadowColor, shadowLength, x, y) {
	context.textAlign = 'center';
	context.font = size+'pt Calibri';
	context.fillStyle = shadowColor;
	for (var i = 1; i <= shadowLength; i++) {
		context.fillText(text, x - i, y - i);
	}
	context.fillStyle = color;
	context.fillText(text, x, y);	
}

function elipsa(sx, sy, rx, ry){
        context.save();
        context.beginPath();
        context.translate(sx-rx, sy-ry);
        context.scale(rx, ry);
        context.arc(1, 1, 1, 0, 2 * Math.PI, false);
        context.restore();
        context.fill();
}

function drawObject(obj, mirrored = false){
	if (mirrored) {
		context.save();  // save the current canvas state
		context.scale(-1, 1); // Set scale to flip the image
		context.drawImage(obj.img, (obj.width+obj.x) * -1, obj.y, obj.width, obj.height); // draw the image
		context.restore(); // restore the state as it was when this function was called
	}
	else {
		context.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
	}
}
			
function draw() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	//Pozadie
	context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
		
	if(showStart) {
		//Názov hry
		textWithShadow('Space Cowboy', 90, '#ff9000', '#302211', 6, canvas.width / 2, 300);
				
		//Tlacidla
		drawObject(buttons.startButton);
		drawObject(buttons.levelSelectButton);
	}
	
	if(showLevels) {
		for (var i in buttons.levelButtons) {
			drawObject(buttons.levelButtons[i]);
		}
	}

	if(showObjects) {		

		for (i in objects) {
			if(i != "triggers")
				if (Array.isArray(objects[i]))
					for (j in objects[i])
						drawObject(objects[i][j], objects[i][j].mirrored);
				else
					drawObject(objects[i], objects[i].mirrored);
		}
		
		//Životy
		for (var i = 0; i < health.hp; i++) {
			context.drawImage(health.img, 10+(i*60), 10, 60, 60);
		}
	}
	
	if (showLevelEnd) {
		//Level END obrazovka
		context.globalAlpha = 0.3;
		context.fillStyle = "green";
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = "black";
		for(var i = 0; i < 25; i++) {
			context.globalAlpha = Math.min(i*0.005,0.2);
			elipsa( canvas.width / 2, canvas.height / 2, (canvas.width / 2)+200 - (i*15), (canvas.height / 2)+200 - (i*15));		
		}
		context.globalAlpha = 1;
		textWithShadow('LEVEL '+(currentLevel-1)+' FINISHED !', 100, '#089900', '#022400', 5, canvas.width / 2, 300);
		textWithShadow('TIME : '+Math.floor(levelTime/1000)+'.'+levelTime % 1000, 60, '#089900', '#022400', 4, canvas.width / 2, 400);
				
		//Tlacidlo Next Level
		drawObject(buttons.nextLevelButton);
	}
	
	if (objects.player.hit) {
		context.globalAlpha = 0.2 - (objects.player.hitTimer / 400);
		context.fillStyle = "red";
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.globalAlpha = 1;
	}
	
	if (showInstructions) {
		//Instructions obrazovka
		context.globalAlpha = 0.5;
		context.fillStyle = "gray";
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.globalAlpha = 1;
		context.fillStyle = "white";
		context.font = '80pt Calibri';
		context.textAlign = 'center';
		context.fillText('Instructions', canvas.width / 2, 150);
		context.font = '40pt Calibri';
		context.fillText('Jump - up arrow / W', canvas.width / 2, 300);
		context.fillText('Move LEFT	- left arrow / A', canvas.width / 2, 400);
		context.fillText('Move RIGHT - right arrow / D', canvas.width / 2, 500);
	}

	if (showInstructionsButton) { 
		//Tlacidlo Instructions
		drawObject(buttons.instructionsButton);
	}				
	
	if (showGameOver) {
		//GAME OVER obrazovka
		context.globalAlpha = 0.2;
		context.fillStyle = "red";
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = "black";
		for(var i = 0; i < 25; i++) {
			context.globalAlpha = Math.min(i*0.005,0.2);
			elipsa( canvas.width / 2, canvas.height / 2, (canvas.width / 2)+200 - (i*15), (canvas.height / 2)+200 - (i*15));		
		}
		context.globalAlpha = 1;
		textWithShadow('GAME OVER',100,'red','#400000',6, canvas.width / 2, 300);

		//Tlacidla
		drawObject(buttons.tryAgainButton);
		drawObject(buttons.levelSelectButton);
	}
	
	//Tlacidlo na stlmenie zvuku
	drawObject(buttons.soundsButton);
}