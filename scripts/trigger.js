class Trigger{	

	constructor (posX, posY, width, height, onTrigger) {
		this.x = posX;
		this.y = posY;
		this.width = width;
		this.height = height;
		this.triggered = false;
		this.onTrigger = onTrigger;		//Funkcia ktorá sa spustí pri spustení trigger-u
	}
}