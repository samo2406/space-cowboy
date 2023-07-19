Math.clamp = function(val, min, max){
            return Math.min(Math.max(min, val), max);
       }

class Player{
	
	constructor(posX, posY, width, height, mirrored = false) {
		this.x = posX;
		this.y = posY;
		this.velocity_x = 0;
		this.velocity_y = 0;
		this.gravity = 3;
		this.friction = 0.8;
		this.grounded = 0;
		this.width = width;
		this.height = height;
		this.currentFrame = 0;
		this.mirrored = mirrored;
		this.hit = false;
		this.hitTimer = 0;
		
		this.animation = new Array();		
		this.animation[0] = new Image();
		this.animation[0].src = './assets/player/running0.png';			
		this.animation[1] = new Image();
		this.animation[1].src = './assets/player/running1.png';	
		this.animation[2] = new Image();
		this.animation[2].src = './assets/player/running2.png';	
		this.animation[3] = new Image();
		this.animation[3].src = './assets/player/running3.png';	
		this.animation[4] = new Image();
		this.animation[4].src = './assets/player/running4.png';	
		this.animation[5] = new Image();
		this.animation[5].src = './assets/player/running5.png';
		this.animation[6] = new Image();
		this.animation[6].src = './assets/player/running6.png';	
		this.animation[7] = new Image();
		this.animation[7].src = './assets/player/running7.png';

		this.img = this.animation[0];	
	}
	
	update () {		//Funkcia volaná každý tick hry	
		this.velocity_y += this.gravity;
		this.velocity_y *= this.friction;
		
		this.velocity_x *= this.friction;
		
		if (this.y > canvas.height) {
			gameOver();
		}
		
		this.controlls();

		this.grounded = this.groundCollision();
		this.wallCollisionR();
		this.wallCollisionL();
		
		this.y += this.velocity_y;
		this.x += this.velocity_x;
		
		if (this.velocity_x > 1.5 || this.velocity_x < -1.5) {			//Každých 6 tickov zmení animáciu hráča
			
			if (this.velocity_x < -1.5) this.mirrored = true;
			if (this.velocity_x > 1.5) this.mirrored = false;
			
			if (this.currentFrame >= 42) {
				this.currentFrame = 6;
			} else
				this.currentFrame = this.currentFrame + 1;
			
			this.img = this.animation[Math.round(this.currentFrame/6)];
		} else {
			this.currentFrame = 0;
			this.img = this.animation[0];
		}
		
		if (this.velocity_y != 0) {
			this.currentFrame = 36;
			this.img = this.animation[6];
		}
		
		if(this.hit) {
			if(this.hitTimer >= 60) {
				this.hit = false;
				this.hitTimer = 0;
			}
			this.hitTimer++;
		}
		
	}
	
	groundCollision () {	
		for (var i in objects.blocks) {
			if ((this.x+(0.8*this.width) > objects.blocks[i].x && this.x+(0.2*this.width) < objects.blocks[i].x+objects.blocks[i].width) && (this.y+this.height+this.velocity_y > objects.blocks[i].y && this.y+this.height < objects.blocks[i].y+10)) {
				this.y = objects.blocks[i].y-this.height;
				this.velocity_y = 0;
				return true;
			}				
		}
		return false;
	}
	
	wallCollisionR () {	
		for (var i in objects.blocks) {
			if ((this.y < objects.blocks[i].y + objects.blocks[i].height && this.y+this.height > objects.blocks[i].y)&&(this.x+(0.8*this.width)+this.velocity_x > objects.blocks[i].x && this.x+(0.8*this.width) < objects.blocks[i].x+10)) {
				this.x = objects.blocks[i].x-(0.8*this.width);
				this.velocity_x = 0;
				break;
			}				
		}
	}
	
	wallCollisionL () {	
		for (var i in objects.blocks) {
			if ((this.y < objects.blocks[i].y + objects.blocks[i].height && this.y+this.height > objects.blocks[i].y)&&(this.x+this.velocity_x+(this.width*0.2) < objects.blocks[i].x+objects.blocks[i].width && this.x+(this.width*0.2) > objects.blocks[i].x+objects.blocks[i].width-10)) {
				this.x = objects.blocks[i].x+objects.blocks[i].width-(this.width*0.2);
				this.velocity_x = 0;
				break;
			}				
		}
	}
		
	controlls () {
		if (playerHasControl && (keys[37] || keys[65])) this.velocity_x -= 2.5; // šípka vľavo || A
		if (playerHasControl && (keys[39] || keys[68])) this.velocity_x += 2.5; // šípka vpravo || D
		
		if (playerHasControl && this.grounded && (keys[38] || keys[87])) this.jump(); // šípka hore || W	
	}
	
	jump () {
		this.velocity_y -= 50;
		this.grounded = false;
	}
	
	setPosition(posX, posY) {
		this.x = posX;
		this.y = posY;
	}
	
	isAbove(obj) {		//Skontroluje či sa hráč nachádza "na" objekte
		if(obj.x <= this.x+(0.75*this.width) && obj.x + obj.width >= this.x+(0.25*this.width) && obj.y <= this.y+(this.height*0.75) && obj.y + obj.height >= this.y+(this.height*0.25))
			return true;
		else 
			return false;
	}	
}