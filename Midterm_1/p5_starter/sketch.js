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
    //radius = 480;
    //my_color = color(255);
    angle = 0;
    //idx = 0;
    //next = 1;
    //origin_x = width / 2;
    //origin_y = height / 2;
    //fall = false;
    //square = new Square(x, y);
    //rectangle = new Rectangle(x, y);
    //my_triangle = new MyTriangle(x, y);
    //new_shape = 1;
    //change = 1;

    //for (let x = 20; x < width; x += 60) {
    //    domino = new Domino(-10, -50);
    //    dominoArray.push(domino);
    //}

    for (let y = 60; y < height - 10; y += 60) {
        dominoSystem.push(new DominoSystem(y));
    }
   
}

function draw() {
    //logo.move();
    //logo.display();

    background(0);

    for (let i = 0; i < circleArray.length; i++) {
        applyMatrix();
        translate(width / 2, height / 2);
        if (i % 2 != 0) {
            rotate(radians(angle1));
        }
        else if (i % 2 == 0) {
            rotate(radians(angle2));
        }

        displayPattern(circleArray[i]);
        if (frameCount % 10 == 0) {
            changeColor(circleArray[i], idx, change);
            idx++;
        }
        if (idx == 12) {
            idx = 0;
        }
        resetMatrix();
    }

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
