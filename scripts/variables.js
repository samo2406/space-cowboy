var canvas;
var context;
var timer;
var levelTimer;
var levelTime;
var objects = {
	player: {},
	enemies: [],
	blocks: [],
	triggers: [],
	decorations: [],	
}

var groundSrc = "./assets/images/ground.png"
var tileSrc = "./assets/images/tile.png"
var invisibleSrc = "./assets/images/invisible.png"

var sounds = {
	levelMusic: new Sound("./assets/sounds/level.wav", 0.25, true),
	damageSound: new Sound("./assets/sounds/jump.wav", 0.15, false), 
	deathSound: new Sound("./assets/sounds/death.wav", 0.25, false),
	levelEndSound: new Sound("./assets/sounds/levelend.wav", 0.25, false),	
}

var health = {
	hp: 3,
	img: new Image(),
}
health.img.src = "./assets/images/heart.png"

var backgroundImg = new Image();
backgroundImg.src = "./assets/images/background.jpg"

var levelsImg = new Image();
levelsImg.src = "./assets/images/levels.jpg"

var buttons = {
	startButton: new Button(0, 0, 228, 78, "./assets/buttons/start.png"),
	levelSelectButton: new Button(0, 0, 208, 52, "./assets/buttons/level select.png"),
	nextLevelButton: new Button(0, 0, 312, 78, "./assets/buttons/next level.png"),
	tryAgainButton: new Button(0, 0, 208, 52, "./assets/buttons/try again.png"),
	instructionsButton: new Button(0, 0, 52, 52, "./assets/buttons/instructions.png"),
	soundsButton: new Button(0, 0, 52, 52, "./assets/buttons/soundsON.png")	,
	levelButtons: {
		1: new Button(0, 0, 200, 200, "./assets/buttons/level1.png"),
		2: new Button(0, 0, 200, 200, "./assets/buttons/level2.png"),
		3: new Button(0, 0, 200, 200, "./assets/buttons/level3.png"),		
	},	
}

var showObjects = false;
var showStart = true;
var showLevels = false;
var showGameOver = false;
var showLevelEnd = false;
var showInstructions = false;
var showInstructionsButton = false;
var playerHasControl = false;
var soundsON = true;
var cameraMovement = false;
var currentLevel = 0; //0 - menu, 1 - level 1, ...		

var mouse = { 
	x: 0,
	y: 0,
	pressed: false,
	selected: false,			//Označovanie objektov na ktoré sa klikne
	
	isAbove : function(obj) {		//Skontroluje či sa myš nachádza na danom objekte
		if(obj.x < this.x && obj.x + obj.width > this.x && obj.y < this.y && obj.y + obj.height > this.y)
			return true;
		else 
			return false;
	}
}

var keys = {};