// Daniel Shiffman
// http://youtube.com/thecodingtrain
// http://codingtra.in

// Coding Challenge #114: Bubble Sort Visualization
// https://youtu.be/67k3I2GxTH8

let values = [];


let x = 1;
let y = 1;
let c = [[]];
let i = 0;
let s = 0;
let changex = 2;
let centerx = 0;
let centery = 0;
let number = 60;
let r = true;
let state = 0;
let cr1 = 1;
let cr2 = 100;
let cr3 = 100;
document.getElementById("insertvalbut").onclick = function() {
  console.log("woo");
  formval = document.getElementById("insertval").value;
  if (isInDesiredForm(formval) == false){
      alert("Not an Integer!");
      return false;
  }
  if (document.getElementById("insertval").value > 10000){
    alert("Too Large!");
    return false;
}
  number = formval;
}

document.getElementById("CXvalbut").onclick = function() {
  console.log("wooppp");
  formval = document.getElementById("CXval").value;

  if (document.getElementById("CXval").value > 10000){
    alert("Too Large!");
    return false;
}
  changex = Number(formval);


}
document.getElementById("change").onclick = function() {
  console.log("woo");
  let z = 0;
  let test = 0;
  while (z == 0){
    test = Math.floor(Math.random() * 5);
    if (test != state){
      z = 1;
      console.log("what");
    }
  }
  z = 0;
  state = Math.floor(Math.random() * 4);

 

}

document.getElementById("color").onclick = function() {
  console.log("woo");
  cr1 = Math.floor(Math.random() * 1000);
  cr2 = Math.floor(Math.random() * 1000);
  console.log(cr2);
  cr3 =Math.floor(Math.random() * 1000);

 

}

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
  createCanvas(windowWidth, windowHeight - 198);
  centerx = windowWidth / 2;
  centery = windowHeight / 2;
  frameRate(30);
}
t = math.random
function draw() {
  background(0);
  console.log(cr1);
  s = 0;
  for (let j = 0; j < number; j++){
    stroke(cr1 + x, cr2 + y, cr3 + (x + y));
    fill(cr1 + x, cr2 + y, cr3 + (x + y));
    color
    y = calc(x)*230;
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
  
   
  }
  i = i + 1;
}


function calc(x){
  if (state == 0){
   
    return Math.sin(x);
  }
  if (state == 1){
    return Math.tan(x);
  }  
  if (state == 2){
    return Math.imul(x);
  }  
  if (state == 3){
    return Math.atan(x);
  }
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