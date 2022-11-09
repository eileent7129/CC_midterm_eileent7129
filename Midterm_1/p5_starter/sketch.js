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
//let x;
//let y;
let new_shape;
let my_color;

// circle pattern
let angle1;
//let angle2;
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
let domino3;
let dominoSystem = [];

function setup() {
    createCanvas(800, 800);
    //logo = new MovingLogo();
    frameRate(30);
    radius = 480;
    my_color = color(255);
    angle = 0;
    idx = 0;
    next = 1;
    origin_x = width / 2;
    origin_y = height / 2;
    fall = false;
    //square = new Square(x, y);
    //rectangle = new Rectangle(x, y);
    //my_triangle = new MyTriangle(x, y);
    new_shape = 1;
    change = 1;

    //for (let x = 20; x < width; x += 60) {
    //    domino = new Domino(-10, -50);
    //    dominoArray.push(domino);
    //}

    for (let y = 60; y < height - 10; y += 120) {
        dominoSystem.push(new DominoSystem(y));
    }
   
}

function draw() {
    //logo.move();
    //logo.display();

    background(0);

    //when frameCount % 5 == 0, this should trigger the animation of the domino to fall down 
    // try using an array for the dominoes


    for (let i = 0; i < dominoSystem.length; i++) {
        dominoSystem[i].addDomino();

        if (i == 0) {
            dominoSystem[i].run(true);
        }
        else {
            dominoSystem[i].run(dominoSystem[i-1].finished());
        }
       
    }
}
class Domino {
    //diplay method
    //fall down method
    //  if touching, fall down

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.angle = 0;
    }

    display() {
        fill(255);
        noStroke();
        rect(this.x, this.y, 10, 50);
    }

    run(start) {
        if (start) {
            this.fall();
        }
        this.display();
       
    }

    fall() { // tipping animation for domino (finally works :') )
        if (this.angle == 75) {
            this.angle = 75;
        }
        else {
            this.angle+=5;
        }
        rotate(radians(this.angle));
    }
         

    my_angle() {
        return this.angle;
    }

    set_angle(new_angle) {
        this.angle = new_angle;
    }

    is_touching() {
        if (this.angle > 35) {
            return true;
        }
        else {
            return false;
        }
    }

    disappear() {
        fill(0);
        noStroke();
        rect(this.x, this.y, 10, 50);  
    }

    // check if top right corner of is touching left wall of next domino
    // if touching, let next domino fall
}

class DominoSystem {
    constructor(yPos) {
        this.yPos = yPos;
        this.dominos = [];
        this.done = false;
    }

    addDomino() {
        this.dominos.push(new Domino(-10, -50));
    }

    run(start) {
        // there needs to be some kind of trigger that the last domino had fallen so the next one can fall
        if (start) {
            let x = 20;
            for (let i = 0; i < this.dominos.length; i++) {
                applyMatrix();
                translate(x, this.yPos);

                if (i == 0) {
                    this.dominos[i].run(start);
                }
                else {
                    this.dominos[i].run(this.dominos[i - 1].is_touching());
                }
                x += 40;
                this.done = true;
                resetMatrix();
            }

        }
       
    }
    finished() {
        return this.done;
    }
}