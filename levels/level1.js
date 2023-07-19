function level1() {
	objects.player = new Player(100, 485, 80, 140, "./assets/images/player.png");
	
	objects.enemies.splice(0, objects.enemies.length);			
	objects.enemies.push(new Enemy(1600,578,52,52,"slime",2148,578));
	objects.enemies.push(new Enemy(2600,378,64,48,"bat",2600,578));
	
	objects.blocks.splice(0, objects.blocks.length);
	objects.blocks.push(new Block(-20,0,20,canvas.height,"./assets/images/invisible.png"));
	for(var i = 0; i <= 25; i++) {
		objects.blocks.push(new Block((-600+(i*200)),630,200,90,"./assets/images/tile.png"));
	}
	objects.blocks.splice(8, 1);
	objects.blocks.splice(10, 1);
	objects.blocks.splice(13, 1);
	
	objects.triggers.splice(0, objects.triggers.length);
	objects.triggers.push(new Trigger(600, 0, 100, canvas.height, cameraEnabler));
	objects.triggers.push(new Trigger(3000, 0, 100, canvas.height, levelEnd));
	objects.triggers.push(new Trigger(2450, 580, 50, 50, addHp));
	
	objects.decorations.splice(0, objects.decorations.length);
	objects.decorations.push(new Decoration(3000, 478, 92, 152,"./assets/images/finish.png"));
	objects.decorations.push(new Decoration(2450, 580, 50, 50,"./assets/images/heart.png"));
	objects.decorations.push(new Decoration(200, 125, 300, 200,"./assets/images/help1.png"));
	objects.decorations.push(new Decoration(750, 150, 300, 152,"./assets/images/help2.png"));	
	
	sounds.levelMusic.refresh();
	sounds.levelMusic.play();
	
	console.log("LEVEL 1");	
}