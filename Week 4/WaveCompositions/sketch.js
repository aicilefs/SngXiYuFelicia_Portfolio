//DM3008 Generative Art
//Week 4
//Portfolio Submission

var magnify = 5000; // how big we want the rose to be
var rotation = 180;
var radius = 60;
var elements = 140; // no. of elements to draw

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  colorMode(HSB);
}
 
function draw() {
  background(0);
    
  radius = map(frameCount - .001, 0, width, 0, 10);
  rotation = map(frameCount / .05, 0, height, 0, 10);
  
  var spacing = 1/elements; // how far apart each 'node' will be
  translate(width*0.5, height*0.5); // translate the whole sketch to the centre of the screen
  
  for (var i = 0; i < elements ;i++) {
      stroke(i*2, 255, 255);
      fill(random(0, 255), random(0, 255), random(0, 255));
      
      push();
      rotate(spacing * i * rotation);
      //translate(sin(spacing*i*radius) * magnify, 100); 
      translate(i *5 ,5);
      circle(0, 0, random(30, 90), random(10, 50));
      pop(); // pop() restores the saved position so the next circle starts from the centre again

  }
}

//What I find interesting about this code is how a spiral comes out of just two simple instructions repeated in a loop: rotate a little more, then move a little further out. Each circle is turned by a slightly bigger angle and pushed 5 pixels further from the centre than the one before. Together, those small steps build the spiral shape without me ever drawing it directly. Because the rotation value grows with frameCount, the spiral keeps winding tighter over time, so the sketch animates by itself without any extra animation code. push() and pop() are also important, because they let every circle start fresh from the centre, which keeps the pattern even. Finally, the random fill colours and sizes make it flicker and feel alive. The outline colours, on the other hand, follow a smooth rainbow along the spiral, so it mixes order and randomness in an interesting way.
