/************************************************************************
 *	RED ANT * CREATED BY JARED DYRESON * jareddyreson@csu.fullerton.edu *
 *						 MASON GODFREY * mgodfrey@csu.fullerton.edu     *
 ************************************************************************
 * This file contains a function to be run when a webpage initially
 * runs, as well as a function that updates the program every frame.
 *
 * FUNCTIONS
 * setup - Initializes each index of the grid at the beginning of
 * 		   program execution.
 * draw - Called every frame, sets the direction of ant movement, then
 * 		  updates the color of the cell the ant is standing on, and
 * 		  finally moves the ant by one cell in the direction it is now
 *		  facing.
 *************************************************************************/

var g_grid = new grid(41);
var r_ant  = new RedAnt(20, 0x15);

//Function called before draw, initializes the matrix
function setup() {
    var length = g_grid.getSize()*10;
    var height = g_grid.getSize()*10;
	createCanvas(length, height);
	
	let m = g_grid.getSize();
	for(let x = 0; x < m; ++x){
        for(let y = 0; y < m; ++y){
			g_grid.matrix[x][y].drawToScreen();
        }
    }
}

//Function called every frame
function draw() {
	//Sets the ants direction
	r_ant.setMovementDirection(g_grid.matrix[r_ant.getXPos()][r_ant.getYPos()].getState());
	
	//Updates the color of the cell the ant is currently on and updates the screen
	g_grid.updateIndexColor(r_ant.getXPos(), r_ant.getYPos());
	
	//Moves the ant based on the new movement direction and size of the grid
	r_ant.move(g_grid.getSize());
}