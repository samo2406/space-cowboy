function mousedown(event) {
	mouse.pressed = true

	if(showStart && mouse.isAbove(buttons.startButton))
		buttons.startButton.onClick();
	
	if((showStart || showGameOver) && mouse.isAbove(buttons.levelSelectButton))
		buttons.levelSelectButton.onClick();
	
	if(showLevels) {
		for (var i in buttons.levelButtons) {
			if(mouse.isAbove(buttons.levelButtons[i]))
				buttons.levelButtons[i].onClick();
		}
	}

	if(showLevelEnd && mouse.isAbove(buttons.nextLevelButton))
		buttons.nextLevelButton.onClick();

	if(showGameOver && mouse.isAbove(buttons.tryAgainButton))
		buttons.tryAgainButton.onClick();

	if(showInstructionsButton && mouse.isAbove(buttons.instructionsButton))
		buttons.instructionsButton.onClick();
			
	if(mouse.isAbove(buttons.soundsButton))
		buttons.soundsButton.onClick();
}
			
function mousemove(event) {
	mouse.x = event.pageX - canvas.offsetLeft;
	mouse.y = event.pageY - canvas.offsetTop;
}

function mouseup(event) {
	mouse.pressed = false
	if(mouse.selected) 
		mouse.selected.border = false
	mouse.selected = false
}