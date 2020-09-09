const direction = {
    NORTH: 0,    
    EAST: 1,
	SOUTH: 2,
	WEST: 3
}

const turnDirection = {
	RIGHT: 0,
	LEFT: 1
}

class RedAnt {
    /*
    * Set the current x and y position of the ant, hex value, and direction facing    
    */

	constructor() {
		this.xPos 	= 20;
		this.yPos 	= 20;
		this.facing = direction.NORTH;
		this.hex 	= 0x15;
	}

	setMovementDirection(cellState) {
        /*
         * Sets the movement direction of the Ant based on it's hex value, cell state and prior direction
        */

		var antDir = (this.hex % (32 >> cellState)) >> (4 - cellState);
		
		if(antDir == turnDirection.LEFT){ this.facing++; }
		else{ this.facing--; }
		
        if(this.facing < direction.NORTH){
			this.facing = direction.WEST;
        }

        else if(this.facing > direction.WEST){
			this.facing = direction.NORTH;
        }
	}
	
	move(cellState) {
        /*
         * Moves the Ant one cell based on the direction it should be moving and its current (x, y) values
        */

		this.setMovementDirection(cellState);
		switch(this.facing){
			case direction.NORTH:
				this.yPos++;
                break;
			case direction.WEST:
				this.xPos--;
                break;
			case direction.SOUTH:
				this.yPos--;
                break;
			case direction.EAST:
				this.xPos++;
                break;
		}

		// Allows the ant to loop
        if(this.xPos < 0){ this.xPos = 40; }
		
        if(this.yPos < 0){ this.yPos = 40; }

        if(this.xPos > 40){ this.xPos = 0; }
		
        if(this.yPos > 40){ this.yPos = 0; }
	}
}
