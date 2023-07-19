class Button{
	
	constructor (posX, posY, width, height, imgSrc, onClick) {
		this.x = posX;
		this.y = posY;
		this.width = width;
		this.height = height;
		this.img = new Image();
		this.img.src = imgSrc;
		this.onClick = onClick;				
	}
				
	setPosition (posX, posY) {
		this.x = posX;
		this.y = posY;
	}	
}