class Decoration{
	
	constructor (posX, posY, width, height, imgSrc, mirrored = false) {
		this.x = posX;
		this.y = posY;
		this.width = width;
		this.height = height;
		this.img = new Image();
		this.img.src = imgSrc;
		this.mirrored = mirrored;
	}
}