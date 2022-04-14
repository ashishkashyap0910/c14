var ball={
  x:20,
  y:30,
  r:50,
  xspeed:0,
  yspeed:0,
  color:["blue","red","green","black"]
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r)
  fill(ball.color[2])
ball.xspeed=3
ball.x=ball.x+ball.xspeed
}