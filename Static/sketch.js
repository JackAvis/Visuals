
let values = [];


let x = 1;
let y = 1;
let c = [[]];
let i = 0;
let s = 0;
let changex = 2;
let centerx = 0;
let centery = 0;
let number = 75;
let r = true;

class Circle{
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
}
for (let i = 0; i < 10000; i ++){
  c.push(new Circle(x, y, 10));
  y = calc(x);
  x = x + .001;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  centerx = windowWidth / 2;
  centery = windowHeight / 2;
  frameRate(30);
}

function draw() {
  background(0);

  s = 0;
  for (let j = 0; j < number; j++){
    stroke(x, y, x + y);
    fill(x, y, x + y);
    color
    y = calc(x)*500;
    if (toposx(x) > windowWidth){
      r = false;
    }
    if (toposx(x) < 0){
      r = true;
      
    }
    if (r == true){
      x = x + changex;
    }
    if (r == false){
      x = x - changex;
    }
    
    
    c[j].y = y;
    c[j].x = x;
   
    circle(toposx(c[j].x), toposy(c[j].y), 10);
    s = s + .5;
  
    console.log(changex + 1);
  }
  i = i + 1;
}


function calc(x){
  return Math.cos(x);
}

function tocoordx(x){
    return x - centerx;
}
function tocoordy(y){
  return y - centery;
}

function toposx(x){
  return (x + centerx) ;
}

function toposy(y){
  return (y + centery)  ;
}

function isInDesiredForm(str) {
  var n = Math.floor(Number(str));
  return n !== Infinity && String(n) === str && n >= 0;
}