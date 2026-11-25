//DM3008 Generative Art 
//Week 3
//Portfolio Submission

i=0;

function setup(){ //Command runs once at the start
    createCanvas(1200,900) //Draws a canvas of 1200px by 900px
}

function draw(){ // Command runs repeatedly
    for(j=1;j<99;) // start drawing circles until j reaches 99, therefore, around 99 rectangles are produced in each draw cycle
    
        circle(
    i++%(1199-j++), // the circle shape gets more constrained as the value of j increases, as the maximum value of the x-coordinate is 1199-j
    int(i/99)%(999-j), // the circle moves downwards, and wraps around to the top of the canvas when it reaches the bottom, as the maximum value of the y-coordinate is 999-j
    i%12, // makes the circles cycle through a range of widths, resulting in different sizes of circles 
    j%16) // same idea as the width, it cycles through a range of different heights
    
    }

    // What the code means is to keep drawing lots of tiny circles. 
    // Use a constantly increasing number (i) to decide where they appear and how big they are. 
    // Use % to keep all those numbers looping instead of it not being a finite size.

/*
I think what is interesting about this code is that the code manages to change a lot of variables (xpos, ypos, circle size) at the same time without it being a very long code. The final output has generated a complex visual even though the code is not very complicated and long.
*/

