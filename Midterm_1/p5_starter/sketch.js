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
let angle;
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

function setup() {
    createCanvas(800, 800);
    background(253, 183, 246);
    //logo = new MovingLogo();
    frameRate(30);
    x = 0;
    y = -300;
    radius = 300;
    my_color = color(255);
    angle = 0;
    opacity = 10;
    //square = new Square(x, y);
    //rectangle = new Rectangle(x, y);
    //my_triangle = new MyTriangle(x, y);
    new_shape = 1;
    array1 = circlePattern(radius, my_color);
    array2 = circlePattern(radius - 100, my_color);

}

function draw() {
    //logo.move();
    //logo.display();

    displayPattern(array1, opacity);
    displayPattern(array2, opacity);

    translate(width / 2, height / 2);
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
        circle(this.x, this.y, 50);
    }

    change_color(opacity) {
        print("mouseX: "); print(mouseX - width / 2); print('\n');
        print("mouseY: "); print(mouseY - height / 2); print('\n');

        if ((mouseX - width / 2 >= this.x - 25 && mouseX - width / 2 <= this.x + 25) &&
            mouseY - height / 2 >= this.y - 25 && mouseY - height / 2 <= this.y + 25) {
            this.my_color = color(94, 0, 255, opacity); //purple
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

function displayPattern(circle_array, my_opacity) {

    for (let i = 0; i < circle_array.length; i++) {
        circle_array[i].display();
        circle_array[i].change_color(my_opacity);
    }
}