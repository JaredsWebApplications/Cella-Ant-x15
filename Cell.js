//Color of the current item
const toColor = {
	BLACK 	: 0,
	RED 	: 1,
	YELLOW 	: 2,
	BLUE 	: 3,
	GREEN 	: 4
}

class Cell {
	//Returns the current state of the Cell
	getState() {
		return this.state;
	}
	
	//Updates the state's color by adding 1 or resetting. Returns the new color.
	updateColor() {
		
		//Increment the current state. If we're 
		this.state++;
		if(this.state >= 5) {
			this.state = toColor.BLACK;
		}
		//Sets the color of the cell based on the color it's just been changed to.
		switch(this.state) {
			case toColor.BLACK:
				this.c = color (0, 0, 0);
			break;
			case toColor.RED:
				this.c = color (255, 0, 0);
			break;
			case toColor.YELLOW:
				this.c = color (255, 255, 0);
			break;
			case toColor.BLUE:
				this.c = color (0, 255, 255);
			break;
			case toColor.GREEN:
				this.c = color (0, 255, 0);
			break;
		}
		return this.c;
	}
	constructor() {
		this.state = 0;
		this.c = color(0, 0, 0);
	}
}

function setup() // P5 Setup Fcn
{
	var cell = new Cell();
	
	//State is already black here

	//Update state to RED
	c = cell.updateColor();
	fill(c);
	noStroke();
	rect(30, 20, 55, 55);
	
	//Update state to YELLOW
	c = cell.updateColor();
	fill(c);
	noStroke();
	rect(30, 20, 55, 55);
	
	//Update state to BLUE
	c = cell.updateColor();
	fill(c);
	noStroke();
	rect(30, 20, 55, 55);
	
	//Update state to GREEN
	c = cell.updateColor();
	fill(c);
	noStroke();
	rect(30, 20, 55, 55);
}