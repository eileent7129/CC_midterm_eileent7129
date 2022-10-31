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
let shape;

function setup() {
	createCanvas(800, 800);
    //logo = new MovingLogo();
    x = 50;
    y = 50;
    square = new Square(x, y);
    rectangle = new Rectangle(x, y);
    my_triangle = new MyTriangle(x, y);
    shape = 2;
    
}

function draw() {
	//logo.move();
	//logo.display();
    background(145, 145, 145);

    if (shape == 1) {
        square.display();
        square.move();
       /* square.control();*/
    }

    else if (shape == 2) {
        rectangle.display();
        rectangle.move();
    //    rectangle.control();
    }

    //else if (shape == 3) {
    //    my_triangle.display();
    //    my_triangle.move();
    //    my_triangle.control();
    //}

    if (square.on_ground()) {
        square.display();
        shape += 1;
    }

    else if (rectangle.on_ground()) {
        rectangle.display();
        shape += 1;
    }

    //else if (triangle.on_ground()) {
    //    shape += 1;
    //}

    //if (shape == 3) {
    //    shape = 1;
    //}

    print("shape: "); print(shape); print('\n');
    print("is square on ground? "); print(square.on_ground()); print('\n');
    print("is rectangle on ground? "); print(rectangle.on_ground()); print('\n');
}

class Square {

    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 2);
    }

    display() {
        fill(255);
        stroke(0);
        strokeWeight(2);
        rect(this.position.x, this.position.y, 20, 20);
        rect(this.position.x, this.position.y + 20, 20, 20);
        fill(100, 0, 0);
        rect(this.position.x + 20, this.position.y, 20, 20);
        rect(this.position.x + 20, this.position.y + 20, 20, 20);
    }

    move() {
        this.position.add(this.velocity);
        if (this.position.y == height - 40) {
            this.velocity.y = 0;
        }    

    } // object needs to move down at a constant pace, once it reaches the bottom or touches another object, it stops

    control() {
        if (this.position.y == height - 40) {
            this.position.x = this.position.x;
        }
        else if (keyIsPressed) {
            this.position.x = constrain(this.position.x, 0, width - 40);

            if (keyCode === RIGHT_ARROW) { // right arrow
                this.position.x = this.position.x + 5;
            }

            else if (keyCode == LEFT_ARROW) { // left arrow 
                this.position.x = this.position.x - 5;
            }
        }
    }// user can control whether object moves left or right

    on_ground() {

        if (this.position.y == height - 40) {
            return true;
        }
        else {
            return false;
        }
    }

    /*rotate() { } // user can rotate object by 90 degrees*/
}

class Rectangle {

    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 2);
    }

    display() {
        fill(255);
        stroke(0);
        strokeWeight(2);
        rect(this.position.x, this.position.y, 20, 20);
        rect(this.position.x + 20, this.position.y, 20, 20);
        rect(this.position.x + 40, this.position.y, 20, 20);
        rect(this.position.x + 60, this.position.y, 20, 20);
    }

    move() {
        this.position.add(this.velocity);
        if (this.position.y == height - 20) {
            this.velocity.y = 0;
        }
    }

    control() {
        if (this.position.y == height - 20) {
            this.position.x = this.position.x;
        }
        else if (keyIsPressed) {
            this.position.x = constrain(this.position.x, 0, width-80);

            if (keyCode === RIGHT_ARROW) { // right arrow
                this.position.x = this.position.x + 5;
            }

            else if (keyCode == LEFT_ARROW) { // left arrow 
                this.position.x = this.position.x - 5;
            }
        }
    }

    on_ground() {
        if (this.position.y == height - 20) {
            return true;
        }
        else {
            return false;
        }
    }
}

class MyTriangle {
    constructor(x,y) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 2);
    }

    display() {
        fill(255);
        stroke(0);
        strokeWeight(2);
        triangle(this.position.x, this.position.y, this.position.x - 40, this.position.y + 40, this.position.x + 40, this.position.y + 40);

    }

    move() {
        this.position.add(this.velocity);
        if (this.position.y == height - 40) {
            this.velocity.y = 0;
        }
    }

    control() {
        if (this.position.y == height - 40) {
            this.position.x = this.position.x;
        }
        else if (keyIsPressed) {
            this.position.x = constrain(this.position.x, 40, width - 40);

            if (keyCode === RIGHT_ARROW) { // right arrow
                this.position.x = this.position.x + 5;
            }

            else if (keyCode == LEFT_ARROW) { // left arrow 
                this.position.x = this.position.x - 5;
            }
        }
    }

    on_ground() {
        if (this.position.y == height - 40) {
            return true;
        }
        else {
            return false;
        }
    }
}