var btn_green;
var btn_red;


function setup() {
  createCanvas(400, 400);  
  btn_green=createButton("GREEN")
  btn_green.position(100,50)
  btn_green.mousePressed(green_bg)


  btn_red=createButton("RED")
  btn_red.position(250,50)
  btn_red.mousePressed(red_bg)
}
function red_bg(){
  r=255
  g=0
  b=0
  background(r,g,b)
}
function green_bg(){
  r=0
  g=255
  b=0
  background(r,g,b)
}
function draw() {
  background(r,g,b)
}
