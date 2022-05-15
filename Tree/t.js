
width = 0;
height = 0;
d = 30;
l = null;
r = null;
let root = null;
size = 10;
let change_y = 100;
let change_x = 100;

c = [];
class Node{
  constructor(x, y, left, right, val){
    this.x = x;
    this.y = y;
    this.left = left;
    this.right = right;
    this.val = val;
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = windowHeight / 7;
  frameRate(50);
  let i = 0;
  root = new Node(x, y, l, r, 1);
  c.push(root);
  root.left = new Node(root.x - change_x, root.y + change_y, null, null, 1);
  root.right = new Node(x + change_x, y + change_y, null, null, 1);
  c.push(root.left);
  c.push(root.right);

  while (i < 10){
    c.push(root.left);
    c.push(root.right);
    i ++;
  }
}


function draw(){
  background(0);
  stroke(1000);
  
  circle()
  for(let i = 0; i < c.length; i++){
    circle(c[i].x, c[i].y, d);
    text(c[i].val, c[i].x - 6, c[i].y + 3);
    if (c[i].left){
      line(c[i].x, c[i].y, c[i].left.x, c[i].left.y);
    }
    if (c[i].right){
      line(c[i].x, c[i].y, c[i].right.x, c[i].right.y);
    }

  
  }
}

