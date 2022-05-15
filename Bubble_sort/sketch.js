
r = [];
initial_x = 0;
let p = 0;

width = 0;
height = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  width = windowWidth;
  height = windowHeight;
  frameRate(50);
  for(let i = 0; i < width / 5; i++){
    r.push(new rectangle(initial_x, height, 5, -Math.floor(Math.random() * height), [250,250,250] ));
    initial_x = initial_x + 5;
  }
}

class rectangle{
  constructor(x, y, w, h, s){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.s = s;
  }
}


function draw(){
  background(0);
  for (let i = 0; i < r.length; i++){
    stroke(100);
    fill(r[i].s[0],r[i].s[1],r[i].s[2]);
    rect(r[i].x,r[i].y,r[i].w,r[i].h)
  }
  s(r);

}


function s(r){
  for (let i = 0; i < r.length - 1; i++){
    if (i < r.length - 1  & (r[i].h < r[i + 1].h)){
      let tmp = r[i].h;
      r[i].h = r[i+1].h;
      r[i + 1].h = tmp;
      console.log(i);
    }
    r[i].s[0] = 250;
    r[i].s[1] = 250;
    r[i].s[2] = 250;
  }

}