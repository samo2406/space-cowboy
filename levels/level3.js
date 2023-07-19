function level3() {
	objects.player = new Player(100, 480, 80, 140, "./assets/images/player.png");
	cameraMovement = true;
				
	objects.enemies.splice(0, objects.enemies.length);	
	objects.enemies.push(new Enemy(1292,202,64,48,"bat",1292,452,5));
	objects.enemies.push(new Enemy(2625,300,64,48,"bat",2836,300,5));
	objects.enemies.push(new Enemy(2625,350,64,48,"bat",2836,350,4));
	objects.enemies.push(new Enemy(2625,400,64,48,"bat",2836,400,3));
	objects.enemies.push(new Enemy(2625,548,52,52,"slime",2937,548));
	objects.enemies.push(new Enemy(3300,300,64,48,"bat",3300,530,4));
	objects.enemies.push(new Enemy(3386,300,64,48,"bat",3386,530,4));
	objects.enemies.push(new Enemy(3572,490,64,48,"bat",3704,490,4));
	objects.enemies.push(new Enemy(3572,425,64,48,"bat",3704,425,4,132,0));
	objects.enemies.push(new Enemy(3862,400,64,48,"bat",4004,544,3,0,100));
	objects.enemies.push(new Enemy(3862,400,64,48,"bat",4004,544,5,14,74));
	objects.enemies.push(new Enemy(6250,200,64,48,"bat",6250,350,5));
	
	objects.blocks.splice(0, objects.blocks.length);
	objects.blocks.push(new Block(-20,0,20,canvas.height,invisibleSrc));
	for(var i = 0; i <= 4; i++) {
		objects.blocks.push(new Block((-600+(i*200)),630,200,90,tileSrc));
	}	
	
	objects.blocks.push(new Block(600,500,50,50,groundSrc));
	objects.blocks.push(new Block(1000,550,50,50,groundSrc));
	objects.blocks.push(new Block(1300,500,50,50,groundSrc));
	objects.blocks.push(new Block(1550,400,50,50,groundSrc));
	objects.blocks.push(new Block(1900,550,25,25,groundSrc));
	objects.blocks.push(new Block(2050,400,25,25,groundSrc));
	objects.blocks.push(new Block(2250,300,25,25,groundSrc));
	objects.blocks.push(new Block(2585,300,50,600,invisibleSrc));
	objects.blocks.push(new Block(2900,0,50,450,invisibleSrc));
	objects.blocks.push(new Block(2585,600,200,120,tileSrc));
	objects.blocks.push(new Block(2785,600,200,120,tileSrc));
	objects.blocks.push(new Block(3200,550,50,50,groundSrc));
	objects.blocks.push(new Block(3500,550,40,40,groundSrc));
	objects.blocks.push(new Block(3800,550,30,30,groundSrc));
	objects.blocks.push(new Block(4100,550,20,20,groundSrc));
	objects.blocks.push(new Block(4400,550,10,10,groundSrc));
	objects.blocks.push(new Block(4600,500,10,10,groundSrc));
	objects.blocks.push(new Block(5000,690,10,10,groundSrc));
	objects.blocks.push(new Block(5150,540,10,10,groundSrc));
	objects.blocks.push(new Block(5300,410,10,10,groundSrc));
	objects.blocks.push(new Block(5140,260,10,10,groundSrc));
	objects.blocks.push(new Block(5380,160,10,10,groundSrc));
	objects.blocks.push(new Block(5600,300,10,10,groundSrc));
	objects.blocks.push(new Block(5700,300,10,10,groundSrc));
	objects.blocks.push(new Block(5800,300,10,10,groundSrc));
	objects.blocks.push(new Block(5900,300,30,10,groundSrc));	
	objects.blocks.push(new Block(6450,300,10,10,groundSrc));
	objects.blocks.push(new Block(6870,400,11,10,groundSrc));
	
	objects.triggers.splice(0, objects.triggers.length);
	objects.triggers.push(new Trigger(600, 0, 100, canvas.height, cameraEnabler));
	objects.triggers.push(new Trigger(6870, 0, 100, 400, levelEnd));
	objects.triggers.push(new Trigger(5890, 250, 50, 50, addHp));
	
	objects.decorations.splice(0, objects.decorations.length);
	objects.decorations.push(new Decoration(6864, 248, 92, 152,"./assets/images/finish.png"));
	objects.decorations.push(new Decoration(2585,300,50,50,groundSrc));
	objects.decorations.push(new Decoration(2585,350,50,50,groundSrc));
	objects.decorations.push(new Decoration(2585,400,50,50,groundSrc));
	objects.decorations.push(new Decoration(2585,450,50,50,groundSrc));
	objects.decorations.push(new Decoration(2585,500,50,50,groundSrc));
	objects.decorations.push(new Decoration(2585,550,50,50,groundSrc));
	objects.decorations.push(new Decoration(2900,0,50,50,groundSrc));
	objects.decorations.push(new Decoration(2900,50,50,50,groundSrc));
	objects.decorations.push(new Decoration(2900,100,50,50,groundSrc));
	objects.decorations.push(new Decoration(2900,150,50,50,groundSrc));
	objects.decorations.push(new Decoration(2900,200,50,50,groundSrc));
	objects.decorations.push(new Decoration(2900,250,50,50,groundSrc));
	objects.decorations.push(new Decoration(2900,300,50,50,groundSrc));
	objects.decorations.push(new Decoration(2900,350,50,50,groundSrc));
	objects.decorations.push(new Decoration(2900,400,50,50,groundSrc));
	objects.decorations.push(new Decoration(5890, 250, 50, 50,"./assets/images/heart.png"));
	
	sounds.levelMusic.refresh();
	sounds.levelMusic.play();
	
	console.log("lEVEL 3");
}