// JavaScript source code

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
let circleArray = [];

function setup() {
    createCanvas(800, 800);
    //logo = new MovingLogo();
    frameRate(30);
    radius = 480;
    my_color = color(255);
    angle1 = 1;
    angle2 = 0;
    idx = 0;
    next = 1;
    //square = new Square(x, y);
    //rectangle = new Rectangle(x, y);
    //my_triangle = new MyTriangle(x, y);
    new_shape = 1;
    change = 1;

    for (let i = radius ; i > 40; i -= 40) {
        circleArray.push(new circlePattern(i, my_color));
    }

}

function draw() {
    background(0);

    for (let i = 0; i < circleArray.length; i++) {
        applyMatrix();
        translate(width / 2, height / 2);
        if (i % 2 != 0) {
            rotate(radians(angle1));
            displayPattern(circleArray[i]);
            if (frameCount % 10 == 0) {
                changeColor(circleArray[i], idx, change);
                idx++;
            }
            if (idx == 12) {
                idx = 0;
            }
        }
        else if (i % 2 == 0) {
            rotate(radians(angle2));
            displayPattern(circleArray[i]);
            if (frameCount % 10 == 0) {
                changeColor(circleArray[i], idx, change);
                idx++;
            }
            if (idx == 12) {
                idx = 0;
            }
        }
        print(i);
        resetMatrix();
    }  
    if (angle1 > 360) {
        angle1 = 0;
    }

    if (angle2 < -360) {
        angle2 = 0;
    }
    angle1++;
    angle2--;
    print(change);
    change++;
    if (change == 4) {
        change = 1;
    }

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
        circle(this.x, this.y, 20);
    }

    change_color(change_color) {

        if (change_color == 1) {
            this.my_color = color(0, 255, 68); //green
        }

        else if (change_color == 2) {
            this.my_color = color(109, 7, 243); // purple
        }

        else if (change_color == 3) {
            this.my_color = color(38, 7, 243); // blue
        }
    }
    xPos() {
        return this.x;
    }

    yPos() {
        return this.y;
    }
}

function circlePattern(my_radius, my_color) {
    let circle1 = new Circle(0, -my_radius, my_color); // 90 degrees
    let circle2 = new Circle(my_radius * (1 / 2), -my_radius * (sqrt(3) / 2), my_color); // 60 degrees
    let circle3 = new Circle(my_radius * (sqrt(3) / 2), -my_radius * (1 / 2), my_color); // 30 degrees
    let circle4 = new Circle(my_radius, 0, my_color); // 0 degrees
    let circle5 = new Circle(my_radius * (sqrt(3) / 2), my_radius * (1 / 2), my_color); // 330 degrees
    let circle6 = new Circle(my_radius * (1 / 2), my_radius * (sqrt(3) / 2), my_color); // 300 degrees
    let circle7 = new Circle(0, my_radius, my_color); // 270 degrees
    let circle8 = new Circle(-my_radius * (1 / 2), my_radius * (sqrt(3) / 2), my_color); // 240 degrees
    let circle9 = new Circle(-my_radius * (sqrt(3) / 2), my_radius * (1 / 2), my_color); // 210 degrees
    let circle10 = new Circle(-my_radius, 0, my_color); // 180 degrees
    let circle11 = new Circle(-my_radius * (sqrt(3) / 2), -my_radius * (1 / 2), my_color); // 150 degrees
    let circle12 = new Circle(-my_radius * (1 / 2), -my_radius * (sqrt(3) / 2), my_color); // 120 degrees

    let circle_array = [];
    circle_array.push(circle1, circle2, circle3, circle4, circle5,
        circle6, circle7, circle8, circle9, circle10, circle11, circle12);
    return circle_array;

}

function displayPattern(circle_array) {

    for (let i = 0; i < circle_array.length; i++) {
        circle_array[i].display();
    }
}

function changeColor(circle_array, my_idx, change_color) {
    /*print(frameCount);*/
    circle_array[my_idx].change_color(change_color);
}