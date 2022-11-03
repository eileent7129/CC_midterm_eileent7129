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
let circle1;
let circle2;
let circle3;
let circle4;
let circle5;
let circle6;
let circle7;
let circle8;
let circle9;
let circle10;
let circle11;
let circle12;
let opacity;

function setup() {
    createCanvas(800, 800);
    background(253, 253, 203);
    //logo = new MovingLogo();
    x = 0;
    y =  -300;
    my_color = color(255);
    angle = 0;
    opacity = 10;
    //square = new Square(x, y);
    //rectangle = new Rectangle(x, y);
    //my_triangle = new MyTriangle(x, y);
    new_shape = 1;
    //my_circle = new Circle(x, y, my_color);
    circle1 = new Circle(0, -300, my_color);
    circle2 = new Circle(300*(1 / 2), 300*(sqrt(3) / 2), my_color);
    circle3 = new Circle(300*(sqrt(3) / 2), 300*(1 / 2), my_color);
    circle4 = new Circle(300, 0, my_color);
    circle5 = new Circle(300*(sqrt(3) / 2), -300*(1 / 2), my_color);
    circle6 = new Circle(300 * (1 / 2), -300 * (sqrt(3) / 2), my_color);
    circle7 = new Circle(0, 300, my_color);
    circle8 = new Circle(-300 * (1 / 2), -300 * (sqrt(3) / 2), my_color);
    circle9 = new Circle(-300 * (sqrt(3) / 2), -300 * (1 / 2), my_color);
    circle10 = new Circle(-300, 0, my_color);
    circle11 = new Circle(-300 * (sqrt(3) / 2), 300 * (1 / 2), my_color);
    circle12 = new Circle(-300 * (1 / 2), 300 * (sqrt(3) / 2), my_color);
}

function draw() {
    //logo.move();
    //logo.display();
    /* background(253, 253, 203);*/
    translate(width / 2, height / 2);
    circle1.display();
    circle1.change_color(opacity);

    circle2.display();
    circle2.change_color(opacity);

    circle3.display();
    circle3.change_color(opacity);

    circle4.display();
    circle4.change_color(opacity);

    circle5.display();
    circle5.change_color(opacity);

    circle6.display();
    circle6.change_color(opacity);

    circle7.display();
    circle7.change_color(opacity);

    circle8.display();
    circle8.change_color(opacity);

    circle9.display();
    circle9.change_color(opacity);

    circle10.display();
    circle10.change_color(opacity);

    circle11.display();
    circle11.change_color(opacity);

    circle12.display();
    circle12.change_color(opacity);

    //for (let i = 0; i <= 12; i++) {
    //    rotate(radians(angle));
    //    my_circle.display();
    //    //my_circle.change_color();
    //    print("this.x: "); print(my_circle.xPos()); print('\n');
    //    print("this.y: "); print(my_circle.yPos()); print('\n');
    //    print("angle: "); print(angle); print('\n');
    //    angle += 30;
    //}
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

    xPos() {
        return this.x;
    }

    yPos() {
        return this.y;
    }

}
