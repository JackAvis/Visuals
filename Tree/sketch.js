
width = 0;
height = 0;
d = 35;
l = null;
r = null;
a = []
for (let i = 0; i < 10000;i++){
    a.push(Math.floor(Math.random() * 100))
}


size = 10;
let change_y = 100;
let change_x = 100;

class Node{
    constructor(x, y, left, right, val){
      this.x = x;
      this.y = y;
      this.left = left;
      this.right = right;
      this.val = val;
    }

    insertleft(r, val){
        r.left = new Node(r.x - change_x, r.y + change_y, null, null, val)
        return;
    }
    insertright(r, val){
        r.right = new Node(r.x + change_x , r.y + change_y, null, null, val)
        return;
    }
  
    insertNode(node, newNode)
{
    if(newNode.val < node.val)
    {
        if(node.left === null){
            node.left = newNode;
            node.left.x = node.x - change_x;
            node.left.y = node.y + change_y;
        }
        else
            this.insertNode(node.left, newNode);
    }
    else
    {
        if(node.right === null){
            node.right = newNode;
            node.right.x = node.x + change_x;
            node.right.y = node.y + change_y;
        }
        else

            this.insertNode(node.right,newNode);
    }
}
  }
  
let root = null;
function setup() {
    createCanvas(windowWidth, windowHeight);
    x = windowWidth / 2;
    y = windowHeight / 7;
    frameRate(60);
    root = new Node(x, y, null, null, 50);

    }
  
  
let i = 1;
  function draw(){
    background(0);
    stroke(1000);
    inOrderHelper(root);
    if (i < a.length){
        root.insertNode(root, new Node(0, 0, null, null, a[i]));
    }
    i++;
    }
  
  
  
    function inOrderHelper(root) {
        if (root !== null) {
           inOrderHelper(root.left);
           circle(root.x, root.y, 20);
           text(root.val, root.x - 6, root.y + 3);
           if (root.right){
            stroke(255,255,255);
            line(root.x, root.y, root.right.x, root.right.y);
           }
           if (root.left){
            stroke(255,255,255);
            line(root.x, root.y, root.left.x, root.left.y);
           }
           inOrderHelper(root.right);
        }
     }