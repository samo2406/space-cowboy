function level2() {
	objects.player = new Player(100, 485, 80, 140, "./assets/images/player.png");
				
	objects.enemies.splice(0, objects.enemies.length);			
	objects.enemies.push(new Enemy(1300,578,52,52,"slime",1648,578));
	objects.enemies.push(new Enemy(2300,378,64,48,"bat",2300,578,4));
	objects.enemies.push(new Enemy(2450,378,64,48,"bat",2450,578,4,0,200,true));
	objects.enemies.push(new Enemy(3450,578,52,52,"slime",4048,578,5));
	
	objects.blocks.splice(0, objects.blocks.length);
	objects.blocks.push(new Block(-20,0,20,canvas.height,"./assets/images/invisible.png"));
	for(var i = 0; i <= 5; i++) {
		objects.blocks.push(new Block((-600+(i*200)),630,200,90,"./assets/images/tile.png"));
	}	
	objects.blocks.push(new Block(750,580,100,90,"./assets/images/ground.png"));
	objects.blocks.push(new Block(1000,530,100,90,"./assets/images/ground.png"));
	objects.blocks.push(new Block(1300,630,200,90,"./assets/images/tile.png"));
	objects.blocks.push(new Block(1500,630,200,90,"./assets/images/tile.png"));
	objects.blocks.push(new Block(1850,530,100,90,"./assets/images/ground.png"));
	objects.blocks.push(new Block(2200,630,200,90,"./assets/images/tile.png"));
	objects.blocks.push(new Block(2400,630,200,90,"./assets/images/tile.png"));
	objects.blocks.push(new Block(2750,580,100,90,"./assets/images/ground.png"));
	objects.blocks.push(new Block(3000,490,100,90,"./assets/images/ground.png"));
	objects.blocks.push(new Block(3450,630,200,90,"./assets/images/tile.png"));
	objects.blocks.push(new Block(3650,630,200,90,"./assets/images/tile.png"));
	objects.blocks.push(new Block(3850,630,200,90,"./assets/images/tile.png"));
	objects.blocks.push(new Block(4050,630,200,90,"./assets/images/tile.png"));
	
	objects.triggers.splice(0, objects.triggers.length);
	objects.triggers.push(new Trigger(600, 0, 100, canvas.height, cameraEnabler));
	objects.triggers.push(new Trigger(4100, 0, 100, canvas.height, levelEnd));
	objects.triggers.push(new Trigger(3025, 440, 50, 50, addHp));
	
	objects.decorations.splice(0, objects.decorations.length);
	objects.decorations.push(new Decoration(4100, 478, 92, 152,"./assets/images/finish.png"));
	objects.decorations.push(new Decoration(3025, 440, 50, 50,"./assets/images/heart.png"));
	
	sounds.levelMusic.refresh();
	sounds.levelMusic.play();
	
	console.log("lEVEL 2");	
}