  let j;
  function setup() {
  // put setup code here
  createCanvas(1000,500);
  j =0;
}

function draw() {
  // put drawing code here
  background(200);
  point(200,100)
  line(0,0,50,150)

  fill(255, 102, 255)
  rect(150,100, 50, 20);
  strokeWeight(5)
  ellipse(150, 120, 20, 20)
  ellipse(20, 120, 20, 50)

  strokeWeight(0)
  triangle(20, 20, 40, 40, 60, 20)
  arc(70,50, 40, 40, radians(0), radians (270))
  
  strokeJoin(ROUND)
  strokeWeight(5)
  beginShape();
  vertex(300,50)
  vertex(350,100)
  vertex(400,15)
  vertex(250,150)
  endShape(close);

  for (var i=0; i<=400; i++){
    x = i
    y = 250 + 20*Math.sin(x/5)
    point(x,y)
  }

  var y = 50 + 20*Math.sin(j/20)
  var r = 50 + 10*Math.sin(j/20)
  j += 10
  fill(255, 255, 204)
  ellipse(300, y, r,50)
}