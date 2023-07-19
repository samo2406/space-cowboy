class Enemy{
	
	constructor (startX, startY, width, height, enemyName, endX, endY, step = 4, offsetX = 0, offsetY = 0, mirrored = false) {
		this.x = startX + offsetX;
		this.y = startY + offsetY;
		this.width = width;
		this.height = height;
		this.mirrored = mirrored;
		this.direction = mirrored;
		this.startX = startX;
		this.startY = startY;
		this.endX = endX;
		this.endY = endY;
		this.step = step;
		this.currentFrame = 0;
		
		this.animation = new Array();
		for (var i = 0; i <= 3; i++) {
			this.animation[i] = './assets/enemies/'+enemyName+'/'+i+'.png';
		}
		
		this.img = new Image();
		this.img.src = this.animation[0];
	}
				
	update () {		//Funkcia volaná každý tick hry	
	
		if (this.startX != this.endX) {
			if(this.mirrored) {
				if(this.x > this.startX) this.x -= this.step;
				if(this.x <= this.startX) this.mirrored = false;
			} else {
				if(this.x < this.endX) this.x += this.step;
				if(this.x >= this.endX) this.mirrored = true;
			}
		}
		if (this.startY != this.endY) {
			if(this.direction) {
				if(this.y > this.startY) this.y -= this.step;
				if(this.y <= this.startY) this.direction = false;
			} else {
				if(this.y < this.endY) this.y += this.step;
				if(this.y >= this.endY) this.direction = true;
			}
		}
		
			
		if (this.currentFrame >= 45) {
			this.currentFrame = 0;
		} else
			this.currentFrame = this.currentFrame + 1;
			
		this.img.src = this.animation[Math.round(this.currentFrame/15)];	
	}
	
	setPosition (posX, posY) {
		this.x = posX;
		this.y = posY;
	}	
}