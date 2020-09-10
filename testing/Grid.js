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
    constructor(size=44){
        this.size = size;
        this.matrix = this.createMatrix();
    }

    createMatrix(){
        /*
         * Since our grid is 410 x 410, each cell is going to be 10 x 10
         * This also coincides with us having 41 cells per row and column
         * ^ That feels redundant
         * at each point on our stop, we're going to create a square and store it so we can manipulate it later
        */
        var mat = [];

        let length = 410;
        let height = 410;

        for(let x = 0; x < length; x+=length/41) {
          let arr = [];
          for(let y = 0; y < height; y+=height / 41) {
            let cell = new Cell(new point(x, y));
            arr.push(cell);
          }
          mat.push(arr);
        }
        return mat;
    }
	
	//Updates the color of an individual cell
	updateIndexColor(xIndex, yIndex) {
		this.matrix[xIndex][yIndex].updateColor();		
	}
};

var g_grid = new grid();
var r_ant  = new RedAnt();

function setup() {
    var length = 410;
    var height = 410;
	createCanvas(length, height);
	
	let m = 41;
	for(let x = 0; x < m; ++x){
        for(let y = 0; y < m; ++y){
			g_grid.matrix[x][y].drawToScreen();
        }
    }
	
	//Tests the 'updateIndexColor' function
}

function draw() {
	r_ant.move(g_grid.matrix[r_ant.getXPos()][r_ant.getYPos()].getState());
	g_grid.updateIndexColor(r_ant.getXPos(), r_ant.getYPos());
	g_grid.matrix[r_ant.getXPos()][r_ant.getYPos()].drawToScreen();
}
