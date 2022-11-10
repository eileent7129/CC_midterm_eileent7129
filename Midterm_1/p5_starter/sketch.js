// JavaScript source code
let next_scene;

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
let angle2;
let radius;
let array1;
let array2;
let array3;
let array4;
let array5;
let array6;
let array7;
let array8;
let array9;
let array10;
let array11;
let array12;
let idx;
let next;
let change;

//domino scene
let domino;
let domino2;
let domino3;
let dominoSystem = [];

function setup() {
    createCanvas(800, 800);
    next_scene = 1;
    frameRate(30);

    //domino scene

    for (let y = 60; y < height - 10; y += 60) {
        dominoSystem.push(new DominoSystem(y));
    }

    //circle pattern scene
    radius = 480;
    my_color = color(255);
    angle1 = 0;
    angle2 = 0;
    idx = 0;
    next = 1;
    change = 1;
    array1 = circlePattern(radius, my_color);
    array2 = circlePattern(radius - 40, my_color);
    array3 = circlePattern(radius - 80, my_color);
    array4 = circlePattern(radius - 120, my_color);
    array5 = circlePattern(radius - 160, my_color);
    array6 = circlePattern(radius - 200, my_color);
    array7 = circlePattern(radius - 240, my_color);
    array8 = circlePattern(radius - 280, my_color);
    array9 = circlePattern(radius - 320, my_color);
    array10 = circlePattern(radius - 360, my_color);
    array11 = circlePattern(radius - 400, my_color);
    array12 = circlePattern(radius - 440, my_color);

}

function draw() {
  
    if (next_scene == 1) { // circle pattern
        background(0);
        sceneOne();
    }

    if (next_scene == 2) { // dominoes
        background(0);
        sceneTwo();
    }


}

function mousePressed() {
    next_scene++;
    if (next_scene == 3) {
        next_scene = 1;
    }

}

function sceneTwo() {
    //when frameCount % 5 == 0, this should trigger the animation of the domino to fall down 
    // try using an array for the dominoes
    for (let i = 0; i < dominoSystem.length; i++) {

        dominoSystem[i].addDomino();

        if (i == 0) {
            dominoSystem[i].run(true, i);
        }
        else {
            dominoSystem[i].run(dominoSystem[i - 1].finished(), i);
        }

    }
}