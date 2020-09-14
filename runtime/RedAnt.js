/********************************************************************
 *	RED ANT * CREATED BY MASON GODFREY * mgodfrey@csu.fullerton.edu *
 ********************************************************************
 * This file is responsible for the logic behind the RedAnt class,
 * as well as the RedAnt class itself.
 *
 * CONSTANTS
 * direction - 	directions for North, East, South, and West
 *				(moves clockwise).
 * turnDirection - directions for facing a different direction.
 *				   contains the Right and Left directions.
 * CLASSES
 * RedAnt - Holds the x, y position of an ant, it's hex value, and
 *			the direction it is facing. Has functions for external
 *			classes to retrieve it's current position. Has built
 *			in functions for both changing direction and moving
 * 			in a direction.
 ********************************************************************/

//Correlates with the direction the ant is facing, stored in clockwise fashion
const direction = {
    NORTH: 0,    
    EAST: 1,
	SOUTH: 2,
	WEST: 3
}

//Direction for ant to turn
const turnDirection = {
	RIGHT: 0,
	LEFT: 1
}

class RedAnt {
	//Set the current x and y position of the ant, hex value, and direction facing
	constructor(gridSize, hex) {
		this.xPos 	= gridSize;
		this.yPos 	= gridSize;
		this.facing = direction.NORTH;
		this.hex 	= hex;
	}
	
	//Returns the current x position of the ant
	getXPos() {
		return this.xPos;
	}
	
	//Returns the current y position of the ant
	getYPos() {
		return this.yPos;
	}
	
	getFacing() {
		return this.facing;
	}
	
	//Sets the movement direction of the ant based on it's hex, cell state, and prior direction
	setMovementDirection(cellState) {
		//Looks at the current cell color to determine movement direction
		var antDir = (this.hex % (32 >> cellState)) >> (4 - cellState);
		
		if(antDir == turnDirection.LEFT)
			this.facing--;
		else
			this.facing++;
		
		if(this.facing < direction.NORTH)
			this.facing = direction.WEST;
		else if(this.facing > direction.WEST)
			this.facing = direction.NORTH;
	}
	
	//Moves the ant 1 cell based on the direction it should be moving and its current x, y values
	//Y is decreased when moving north because lower index positions have a higher physical height.
	move(gridSize) {
		switch(this.facing)
		{
			case 	direction.NORTH:
				this.yPos--;
			break;
			case 	direction.EAST:
				this.xPos++;
			break;
			case	direction.SOUTH:
				this.yPos++;
			break;
			case	direction.WEST:
				this.xPos--;
			break;
		}
		
		//Allows the ant to loop
		if(this.xPos < 0)
			this.xPos = gridSize-1;
		
		if(this.xPos > gridSize-1)
			this.xPos = 0;
		
		if(this.yPos < 0)
			this.yPos = gridSize-1;
		
		if(this.yPos > gridSize-1)
			this.yPos = 0;
	}
}
