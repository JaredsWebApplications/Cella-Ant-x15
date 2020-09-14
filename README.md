# Cella-Ant-x15

A cellular automaton (Cella) variant of Langton's Ant written in Javascript and P5JS for CS 335.

## Structure

- master (working branch and should not be pushed to from individual branches)
    * devbranch (development branch were we test out code from each contributor)
        + [name]branch (your individual branch/workspace)

This is the hierarchy that we should follow to efficiently create this project and delegate tasks

___________________________________________________________________________________________________________
README.txt rough draft || Brian
=========================================

Time-stamp:

// readme.txt file :: project overview

## CLASS: CPSC-335 - Algorithms | Section-02

## PROJECT #1: Cella-Ant-x15

## TEAM NAME: ??

## TEAM MEMBERS:

- Mason Godfrey
- Jared Dyreson
- Brian Lucero
 
## INTRODUCTION: 

  Cella-Ant-x15  
  A cellular automaton (Cella) variant of Langton's Ant written
  in Javascript and P5JS for CS 335.
  
  NOTE: (brian) will be finishing this part 
  
  ...	

## ZIP CONTENTS: 


NOTE: (brian) will finish adding the remaining files and short descriptions.


  File readme.txt  	      ||   This file

  File Display.js  	      ||   This file contains 2 functions that initially
                    		   build and maintain the environment. 
                    		   setup(): to be run when a webpage initially runs
                    		   draw(): updates the program every frame.

  File Grid.js     	      ||   This file provides the instantiation of cells,
                   		   a matrix conatainig said cells and logic to change
                    		   the color cells at arbitrary positions
                   		   Contains the implementations for 3 classes, needed
                    		   for functions in Display.js file:

                    		   Cell:  This class defines the dimensions, state,
                         	 	  color, and ant properties for each cell object
                          		  within our grid. Which are then used by methods
                          		  to display the cell grid, and ant triangle 
                    
                   		  Point:  This class models the ordered pair type of object
                         		  which includes x & y coordinates. This is useful
                          		  for determining (x,y) position within the 
                             		  2-dimensional grid.
                      
                   		   grid:  This class defines the dimension properties of a
                          		  grid object. Which methods wihtin the class use
                         		  to display real time updates to a cell color, ant
                          		  triangle animation, or if it needs to be redrawn.

  File RedAnt.js   	      ||   This file is responsible for the logic behind the RedAnt
                   		   class, as well as the RedAnt class itself.

                   		   ** comment from the file^ **

		   		   ** Brian's idea edit: ** 
		   		   This file defines the Position-Direction-Turn relationship
                   	           properties later used to implement the RedAnt class and
                   		   its navigation instructions. Cell color determines turn, 
                  	           further influencing direction, thus eventually establishing
                   	           a simple navigation pattern, due to value dependence.  
  

  File p5.js       	      ||   This is the P5 package.  It is loaded inside the html.
 

**looks like we dont need these files**

  File assets/styles.css      ||   This is an extra-small example of controlling
                                   webpage styling.  // Loaded inside the html.


  File assets/draw-stuff.js   ||   This is an example to show loading a JS
                                   script file from a folder other than the index
                              	   HTML file's folder location.  It also includes the
                                   utility draw_grid function written in P5+JS. 
                                   // Loaded inside the html.       
  
  File 	...
  ...


## INSTALLATION AND RUNNING: 

  1. Extract the .zip file into a folder.

  2. Navigate to the driver.html file wihtin the folder. Right-click on the file
     and select "Open". The p5 program should start immediately. You
     should see what looks to be a 41x41 grid (white lines on black background)
     with and some of the grid cells colored.  See the picture pix-js-cellaAnt.jpg 

	NOTE: (brian) I will name the picture file "pix-js-cellaAnt.jpg", 
              and will upload that file on my github branch


## KNOWN BUGS:

	J & M: need ur input/thoughts


## WARNINGS 

	J & M: need ur input/thoughts


## TESTING 

	J & M: need ur input/thoughts


## ISSUES 

	J & M & B: need ur input/thoughts

  NOTE: determine what to write if no known issues


## CREDITS 

list out 3rd party ref/material here:
   - siskas reference:

   " Some code was borrowed and modified from Stuart's book.  
     Introducing JavaScript Game Development: Build a 2D Game from the
     Ground Up, by Graeme Stuart, 2018, 209 pages.

     And, of course, thanks to the HTML and P5.js developers. "
   
