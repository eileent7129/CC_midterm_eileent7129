// JavaScript source code
class Circle {

    constructor(x, y, my_color) {
        this.x = x;
        this.y = y;
        this.my_color = my_color;
    }

    display() {
        noStroke();
        fill(this.my_color);
        circle(this.x, this.y, 10);
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

    dont_change() {
        this.color = color(255);
    }

    xPos() {
        return this.x;
    }

    yPos() {
        return this.y;
    }
}

function circlePattern(my_radius, my_color) {
    let circle_array = [];


    for (let degree = 0; degree <= 360; degree += 30) {
        let circle1 = new Circle(0, -my_radius, my_color); // 90 degrees
        let circle2 = new Circle(my_radius * (1 / 2), -my_radius * (sqrt(3) / 2), my_color); // 60 degrees
        let circle3 = new Circle(my_radius * (sqrt(3) / 2), -my_radius * (1 / 2), my_color); // 30 degrees
        //let circle4 = new Circle(my_radius * (sqrt(6) + sqrt(2)) / 4, my_radius * (sprt(6) - sqrt(2)) / 4, my_color); // 15 degrees
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

    return circle_array;

}

function displayPattern(circle_array) {

    for (let i = 0; i < circle_array.length; i++) {
        circle_array[i].display();
    }
}

function changeColor(circle_array, my_idx, change_color) {
    let rand = random(0, 100);
    if (rand > 0 && rand < 1) {
        circle_array[my_idx].dont_change();
    }
    else {
        circle_array[my_idx].change_color(change_color);

    }
}



function sceneOne() {

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle2));
    displayPattern(array2);
    if (next == 1) {
        if (frameCount % 5 == 0) {
            changeColor(array2, idx, change);
            idx++
        }
        if (idx == 12) {
            idx = 0;
            next = 2;
            change++;
            if (change == 4) {
                change = 1;
            }
        }
    }

    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle1));
    displayPattern(array3);
    if (next == 2) {
        if (frameCount % 5 == 0) {
            changeColor(array3, idx, change);
            idx++;
        }
        if (idx == 12) {
            idx = 0;
            next = 3;
            change++;
            if (change == 4) {
                change = 1;
            }
        }
    }

    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle2));
    displayPattern(array4);
    if (next == 3) {
        if (frameCount % 5 == 0) {
            changeColor(array4, idx, change);
            idx++;
        }
        if (idx == 12) {
            idx = 0;
            next = 4;
            change++;
            if (change == 4) {
                change = 1;
            }
        }
    }

    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle1));
    displayPattern(array5);
    if (next == 4) {
        if (frameCount % 5 == 0) {
            changeColor(array5, idx, change);
            idx++;
        }
        if (idx == 12) {
            idx = 0;
            next = 5;
            change++;
            if (change == 4) {
                change = 1;
            }
        }
    }

    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle2));
    displayPattern(array6);
    if (next == 5) {
        if (frameCount % 5 == 0) {
            changeColor(array6, idx, change);
            idx++;
        }
        if (idx == 12) {
            idx = 0;
            next = 6;
            change++;
            if (change == 4) {
                change = 1;
            }
        }
    }

    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle1));
    displayPattern(array7);
    if (next == 6) {
        if (frameCount % 5 == 0) {
            changeColor(array7, idx, change);
            idx++;
        }
        if (idx == 12) {
            idx = 0;
            next = 7;
            change++;
            if (change == 4) {
                change = 1;
            }
        }
    }

    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle2));
    displayPattern(array8);

    if (next == 7) {
        if (frameCount % 5 == 0) {
            changeColor(array8, idx, change);
            idx++;
        }
        if (idx == 12) {
            idx = 0;
            next = 8;
            change++;
            if (change == 4) {
                change = 1;
            }
        }
    }
    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle1));
    displayPattern(array9);

    if (next == 8) {
        if (frameCount % 5 == 0) {
            changeColor(array9, idx, change);
            idx++;
        }
        if (idx == 12) {
            idx = 0;
            next = 9;
            change++;
            if (change == 4) {
                change = 1;
            }
        }
    }

    resetMatrix();

    applyMatrix();

    translate(width / 2, height / 2);
    rotate(radians(angle2));
    displayPattern(array10);

    if (next == 9) {
        if (frameCount % 5 == 0) {
            changeColor(array10, idx, change);
            idx++;
        }
        if (idx == 12) {
            idx = 0;
            next = 10;
            change++;
            if (change == 4) {
                change = 1;
            }
        }
    }
    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle1));
    displayPattern(array11);

    if (next == 10) {
        if (frameCount % 5 == 0) {
            changeColor(array11, idx, change);
            idx++;
        }
        if (idx == 12) {
            idx = 0;
            next = 11;
            change++;
            if (change == 4) {
                change = 1;
            }
        }
    }

    resetMatrix();

    applyMatrix();
    translate(width / 2, height / 2);
    rotate(radians(angle2));
    displayPattern(array12);

    if (next == 11) {
        if (frameCount % 5 == 0) {
            if (idx == 10) {
                array12[idx].dont_change();
            }
            else {
                changeColor(array12, idx, change);
            }
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
    angle1 += 0.5;
    angle2 -= 0.5;

}

