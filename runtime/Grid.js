const stateColor = {
	BLACK 	: 0,
	RED 	: 1,
	YELLOW 	: 2,
	BLUE 	: 3,
	GREEN 	: 4
}

class Cell {
	
    dimensions(){
      return [this.bl.x, this.bl.y, this.length, this.width];
    }
	
	//Get the current state
	getState() {
		return this.state;
	}
	
	//Get the current color
	getCurrentColor() {
		 switch(this.state) {
            case stateColor.BLACK:
                this.c = color ('black');
                break;
            case stateColor.RED:
                this.c = color ('red');
                break;
            case stateColor.YELLOW:
                this.c = color ('yellow');
                break;
            case stateColor.BLUE:
                this.c = color ('blue');
                break;
            case stateColor.GREEN:
                this.c = color ('green');
                break;
        }
        return this.c;
	}
	
	//Updates the color and returns the new color
	updateColor() {
		//Increment the current state.
		if(this.state++ >= 4) {
			this.state = stateColor.BLACK;
		}

		//Sets the color of the cell based on the color it's just been changed to.
        return this.getCurrentColor();
	}
	


	constructor(bl, length=10, width=10) {
        /*
         * bl: bottom left coordinate
         * length: how many pixels long the box is
         * width: how many pixels wide the box is
         * both of these are defaulted to 10
         * state: which color is the cell
        */

	    this.state = stateColor.BLACK;
      
        this.bl = bl;
        this.length = length;
        this.width = width;
	}

    drawToScreen(){
      /*
       * Draw the current square to the screen
      */ 

	  //Get the current color of the cell
	  let current_color = this.getCurrentColor();
      fill(current_color);
      stroke('white');
      strokeWeight(2);
      
      let [x1,y1,height,width] = this.dimensions();
      rect(x1, y1, height, width);
    }
	
	//Draws the ant to the screen, given it's x and y offset
	drawAntToScreen(xOffset, yOffset, facing) {
		fill("white");
		//stroke('black');
		//strokeWeight(.6);
		
		
	  let [x1,y1, height, width] = this.dimensions();
	  
	  switch(facing) {
		case 0:
			triangle(x1 + xOffset + 5, y1 + yOffset + 3, x1 + xOffset + 3, y1 + yOffset + 6, x1 + xOffset + 7, y1 + yOffset + 6);
			break;
		case 1:
			triangle(x1 + xOffset + 3, y1 + yOffset + 3, x1 + xOffset + 6, y1 + yOffset + 5, x1 + xOffset + 3, y1 + yOffset + 7);
			break;
		case 2:
			triangle(x1 + xOffset + 5, y1 + yOffset + 6, x1 + xOffset + 3, y1 + yOffset + 3, x1 + xOffset + 7, y1 + yOffset + 3);
			break;
		case 3:
			triangle(x1 + xOffset + 6, y1 + yOffset + 3, x1 + xOffset + 3, y1 + yOffset + 5, x1 + xOffset + 6, y1 + yOffset + 7);
			break;
		}
	}
}

class point {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  position(){
      return [this.x, this.y];
  }
}

class grid {
    constructor(size){
        this.size = size;
        this.matrix = this.createMatrix();
    }
	
	getSize() {
		return this.size;
	}

    createMatrix(){
        /*
         * Since our grid is 410 x 410, each cell is going to be 10 x 10
         * This also coincides with us having 41 cells per row and column
         * ^ That feels redundant
         * at each point on our stop, we're going to create a square and store it so we can manipulate it later
        */
        var mat = [];

        let length = this.size*10;
        let height = this.size*10;

        for(let x = 0; x < length; x+=length/this.size) {
          let arr = [];
          for(let y = 0; y < height; y+=height/this.size) {
            let cell = new Cell(new point(x, y));
            arr.push(cell);
          }
          mat.push(arr);
        }
        return mat;
    }
	
	//Updates the color of an individual cell and outputs it
	updateIndexColor(xIndex, yIndex) {
		this.matrix[xIndex][yIndex].updateColor();
		this.matrix[xIndex][yIndex].drawToScreen();		
	}
	
	//If the cell we want to redraw exists, redraw it
	redraw(xIndex, yIndex) {
		if(xIndex >= 0 && yIndex >= 0 &&  xIndex < this.size && yIndex < this.size)
			this.matrix[xIndex][yIndex].drawToScreen();	
	}
	
	//Update the ant's visual position
	updateAntVisual(xIndex, xOffset, yIndex, yOffset, facing) {
		this.matrix[xIndex][yIndex].drawAntToScreen(xOffset, yOffset, facing);		
	}
};