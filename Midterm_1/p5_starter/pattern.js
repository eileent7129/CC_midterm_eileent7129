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
    //square = new Square(x, y);
    //rectangle = new Rectangle(x, y);
    //my_triangle = new MyTriangle(x, y);
    new_shape = 1;
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
    background(0);

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle1));
    displayPattern(array1);
    if (next == 1) {
        if (frameCount % 10 == 0) {
            changeColor(array1, idx, change);
            idx++
        }
        if (idx == 12) {
            idx = 0;
            next = 2;
        }
    }
    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle2));
    displayPattern(array2);
    if (next == 2) {
        if (frameCount % 10 == 0) {
            changeColor(array2, idx, change);
            idx++
        }
        if (idx == 12) {
            idx = 0;
            next = 3;
        }
    }
    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle1));
    displayPattern(array3);
    if (next == 3) {
        if (frameCount % 10 == 0) {
            changeColor(array3, idx, change);
            idx++;
        }
        if (idx == 12) {
            idx = 0;
            next = 4;
        }
    }
    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle2));
    displayPattern(array4);
    if (next == 4) {
        if (frameCount % 10 == 0) {
            changeColor(array4, idx, change);
            idx++;
        }
        if (idx == 12) {
            idx = 0;
            next = 5;
        }
    }
    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle1));
    displayPattern(array5);
    if (next == 5) {
        if (frameCount % 10 == 0) {
            changeColor(array5, idx, change);
            idx++;
        }
        if (idx == 12) {
            idx = 0;
            next = 6;
        }
    }
    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle2));
    displayPattern(array6);
    if (next == 6) {
        if (frameCount % 10 == 0) {
            changeColor(array6, idx, change);
            idx++;
        }
        if (idx == 12) {
            idx = 0;
            next = 7;
        }
    }

    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle1));
    displayPattern(array7);
    if (next == 7) {
        if (frameCount % 10 == 0) {
            changeColor(array7, idx, change);
            idx++;
        }
        if (idx == 12) {
            idx = 0;
            next = 8;
        }
    }

    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle2));
    displayPattern(array8);

    if (next == 8) {
        if (frameCount % 10 == 0) {
            changeColor(array8, idx, change);
            idx++;
        }
        if (idx == 12) {
            idx = 0;
            next = 9;
        }
    }
    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle1));
    displayPattern(array9);

    if (next == 9) {
        if (frameCount % 10 == 0) {
            changeColor(array9, idx, change);
            idx++;
        }
        if (idx == 12) {
            idx = 0;
            next = 10;
        }
    }
    resetMatrix();

    applyMatrix();

    translate(width / 2, height / 2);
    rotate(radians(angle2));
    displayPattern(array10);

    if (next == 10) {
        if (frameCount % 10 == 0) {
            changeColor(array10, idx, change);
            idx++;
        }
        if (idx == 12) {
            idx = 0;
            next = 11;
        }
    }
    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle1));
    displayPattern(array11);

    if (next == 11) {
        if (frameCount % 10 == 0) {
            changeColor(array11, idx, change);
            idx++;
        }
        if (idx == 12) {
            idx = 0;
            next = 12
        }
    }
    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle2));
    displayPattern(array12);

    if (next == 12) {
        if (frameCount % 10 == 0) {
            changeColor(array12, idx, change);
            idx++;
        }
        if (idx == 12) {
            idx = 0;
        }
    }
    resetMatrix();

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

    blotch() {

        strokeWeight(2);
        stroke(255);
        line(this.x - 25, this.y, this.x + 25, this.y);
        line(this.x - 10, this.y + 15, this.x + 10, this.y + 10);
        line(this.x, this.y + 6, this.x - 5, this.y);
        line(this.x + 10, this.y, this.x - 10, this.y);
        line(this.x - 10, this.y - 10, this.x + 5, this.y + 10);
        line(this.x + 10, this.y + 10, this.x - 7, this.y + 3);
        line(this.x + 2, this.y + 2, this.x + 9, this.y + 9);
        line(this.x + 6, this.y + 1, this.x + 2, this.y + 12);
        line(this.x - 2, this.y + 8, this.x - 5, this.y + 2);
        line(this.x + 12, this.y + 3, this.x - 15, this.y + 2);
        line(this.x - 20, this.y - 5, this.x + 5, this.y + 10);
        line(this.x + 5, this.y + 10, this.x - 10, this.y + 3);
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