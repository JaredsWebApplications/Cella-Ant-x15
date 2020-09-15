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

//Creates a 41 by 41 grid
var g_grid = new grid(41);

//Creates an ant with the x and y position 20 and base it's logic on 0x15.
var r_ant  = new RedAnt(20, 0x15);

//Function called before draw, initializes the matrix
function setup() {
	
	//Create a canvas
    var length = g_grid.getSize()*10;
    var height = g_grid.getSize()*10;
	createCanvas(length, height);
	
	//Draw the grid we've created to the screen
	let m = g_grid.getSize();
	for(let x = 0; x < m; ++x){
        for(let y = 0; y < m; ++y){
			g_grid.matrix[x][y].drawToScreen();
        }
    }
}

//Whether we are done animating or not
var doneAnimating = true;

//X offset of the animation vs the ant
var antX;
//Y offset of the animation vs the ant
var antY;

//Function called every frame
function draw() {
	
	//If we've already animated this movement
	if(doneAnimating == true)
		{
		//Sets the ants direction
		r_ant.setMovementDirection(g_grid.matrix[r_ant.getXPos()][r_ant.getYPos()].getState());	
		
		//Updates the color of the cell the ant is currently on and updates the screen
		g_grid.updateIndexColor(r_ant.getXPos(), r_ant.getYPos());
		
		//Update the ant's position
		g_grid.updateAntVisual(r_ant.getXPos(), 0, r_ant.getYPos(), 0, r_ant.getFacing());		
		
		//Reset our offset
		antX = 0;
		antY = 0;
		
		//Turn off the flag, meaning we need to animate a new movement
		doneAnimating = false;
	}
	else
	{
		//Get the direction the ant is facing
		switch(r_ant.getFacing()) {
		case 0:
			antY = antY - 1;
			g_grid.redraw(r_ant.getXPos(), r_ant.getYPos() - 1);
			break;
		case 1:
			antX = antX + 1;
			g_grid.redraw(r_ant.getXPos() + 1, r_ant.getYPos());
			break;
		case 2:
			antY = antY + 1;
			g_grid.redraw(r_ant.getXPos(), r_ant.getYPos() + 1);
			break;
		case 3:
			antX = antX - 1;
			g_grid.redraw(r_ant.getXPos() - 1, r_ant.getYPos());
			break;
		}
		//Redraw the position the ant is standing on
		g_grid.redraw(r_ant.getXPos(), r_ant.getYPos());
		
		//Move the ant an additional unit
		g_grid.updateAntVisual(r_ant.getXPos(), antX, r_ant.getYPos(), antY, r_ant.getFacing());
		
		
		//If we've reached the end of it's animation cycle
		if(antX % 10 == 0 && antY % 10 == 0)
		{
			//Flag that we're done animating
			doneAnimating = true;
			
			//Logically move the ant based on the new movement direction and size of the grid
			r_ant.move(g_grid.getSize());
		}
	}
}