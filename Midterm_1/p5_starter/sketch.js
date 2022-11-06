// JavaScript source code
//let logo;
//let upper_left;
//let upper_right;
//let bottom_left;
//let bottom_right;


// tetris
let square;
let rectangle;
let my_triangle;
let x;
let y;
let new_shape;
let my_color;

// circle pattern
let angle1;
let angle2;
let radius;
let array1;
let array2;
let array3;
let array4;
let array5;
let array6;
let idx;
let next;
let change;


//domino
let domino;
let domino2;
let x;
let y;

function setup() {
    createCanvas(800, 800);
    //logo = new MovingLogo();
    frameRate(30);
    radius = 480;
    my_color = color(255);
    angle1 = 0;
    angle2 = 0;
    idx = 0;
    next = 1;
    x = width / 2;
    y = height / 2; 
    //square = new Square(x, y);
    //rectangle = new Rectangle(x, y);
    //my_triangle = new MyTriangle(x, y);
    new_shape = 1;
    change = 1;
    domino = new Domino(-10, -50);
    domino2 = new Domino(0, -50);

}

function draw() {
    //logo.move();
    //logo.display();

    //background(39, 0, 90); // purple
    background(0);
    translate(x, y);
    rotate(radians(angle1));
    domino.display();

    if (angle1 == 90) {
        angle1 = 90;
    }
    else {
        angle1++;
    }
   
}
class Domino {
    //diplay method
    //fall down method
    //   if touching, fall down7

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    display() {
        fill(255);
        noStroke();
        rect(this.x, this.y, 10, 50);
    }
}