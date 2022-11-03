// JavaScript source code
//let logo;
//let upper_left;
//let upper_right;
//let bottom_left;
//let bottom_right;

let square;
let rectangle;
let my_triangle;
let x;
let y;
let new_shape;
//let my_circle;
let my_color;
let angle1;
let angle2;
//let circle1;
//let circle2;
//let circle3;
//let circle4;
//let circle5;
//let circle6;
//let circle7;
//let circle8;
//let circle9;
//let circle10;
//let circle11;
//let circle12;
let opacity;
let radius;
let array1;
let array2;
let array3;
let array4;
let array5;
let array6;

function setup() {
    createCanvas(800, 800);
    //logo = new MovingLogo();
    frameRate(30);
    radius = 450;
    my_color = color(255);
    angle1 = 0;
    angle2 = 0;
    opacity = 10;
    //square = new Square(x, y);
    //rectangle = new Rectangle(x, y);
    //my_triangle = new MyTriangle(x, y);
    new_shape = 1;
    array1 = circlePattern(radius, my_color);
    array2 = circlePattern(radius - 50, my_color);
    array3 = circlePattern(radius - 100, my_color);
    array4 = circlePattern(radius - 150, my_color);
    array5 = circlePattern(radius - 200, my_color);
    array6 = circlePattern(radius - 250, my_color);
    array7 = circlePattern(radius - 300, my_color);
    array8 = circlePattern(radius - 350, my_color);
    array9 = circlePattern(radius - 400, my_color);

}

function draw() {
    //logo.move();
    //logo.display();

    background(253, 183, 246);
    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle1));
    displayPattern(array1);
    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle2));
    displayPattern(array2);
    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle1));
    displayPattern(array3);
    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle2));
    displayPattern(array4);
    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle1));
    displayPattern(array5);
    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle2));
    displayPattern(array6);
    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle1));
    displayPattern(array7);
    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle2));
    displayPattern(array8);
    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle1));
    displayPattern(array9);
    resetMatrix();
    if (angle1 > 360) {
        angle1 = 0;
    }


    if (angle2 < -360) {
        angle2 = 0;
    }

    angle1++;
    angle2--;
   
}

class Circle {

    constructor(x, y, my_color) {
        this.x = x;
        this.y = y;
        this.my_color = my_color;
    }

    display() {
        noStroke();
        fill(this.my_color);
        circle(this.x, this.y, 30);
    }

    change_color() {
        print("mouseX: "); print(mouseX - width / 2); print('\n');
        print("mouseY: "); print(mouseY - height / 2); print('\n');

        if ((mouseX - width / 2 >= this.x - 25 && mouseX - width / 2 <= this.x + 25) &&
            mouseY - height / 2 >= this.y - 25 && mouseY - height / 2 <= this.y + 25) {
            this.my_color = color(94, 0, 255); //purple
        }
    }

    blotch() {

        strokeWeight(2);
        stroke(255);
        line(this.x - 25, this.y, this.x + 25, this.y);
        line(this.x -10, this.y + 15, this.x +10, this.y + 10); 
        line(this.x, this.y + 6, this.x - 5, this.y);
        line(this.x + 10, this.y, this.x - 10, this.y );
        line(this.x - 10, this.y - 10, this.x + 5, this.y + 10);
        line(this.x + 10, this.y + 10, this.x - 7, this.y + 3);
        line(this.x + 2, this.y + 2, this.x + 9, this.y + 9);
        line(this.x + 6, this.y + 1, this.x + 2, this.y + 12);
        line(this.x - 2, this.y + 8, this.x - 5, this.y + 2);
        line(this.x + 12, this.y + 3, this.x - 15, this.y + 2);
        line(this.x - 20, this.y - 5, this.x + 5, this.y + 10);
        line(this.x + 5, this.y + 10, this.x-10, this.y  + 3);
        line(this.x + 5, this.y - 15, this.x - 10, this.y - 3);
    }

    xPos() {
        return this.x;
    }

    yPos() {
        return this.y;
    }
}

function circlePattern(my_radius, my_color) {
    let circle1 = new Circle(0, -my_radius, my_color);
    let circle2 = new Circle(my_radius * (1 / 2), my_radius * (sqrt(3) / 2), my_color);
    let circle3 = new Circle(my_radius * (sqrt(3) / 2), my_radius * (1 / 2), my_color);
    let circle4 = new Circle(my_radius, 0, my_color);
    let circle5 = new Circle(my_radius * (sqrt(3) / 2), -my_radius * (1 / 2), my_color);
    let circle6 = new Circle(my_radius * (1 / 2), -my_radius * (sqrt(3) / 2), my_color);
    let circle7 = new Circle(0, my_radius, my_color);
    let circle8 = new Circle(-my_radius * (1 / 2), -my_radius * (sqrt(3) / 2), my_color);
    let circle9 = new Circle(-my_radius * (sqrt(3) / 2), -my_radius * (1 / 2), my_color);
    let circle10 = new Circle(-my_radius, 0, my_color);
    let circle11 = new Circle(-my_radius * (sqrt(3) / 2), my_radius * (1 / 2), my_color);
    let circle12 = new Circle(-my_radius * (1 / 2), my_radius * (sqrt(3) / 2), my_color);

    let circle_array = [];
    circle_array.push(circle1, circle2, circle3, circle3, circle4, circle5, circle6, circle7, circle8, circle9, circle10, circle11, circle12);
    return circle_array;
    
}

function displayPattern(circle_array) {

    for (let i = 0; i < circle_array.length; i++) {
        circle_array[i].display();
        circle_array[i].change_color();
    }
}