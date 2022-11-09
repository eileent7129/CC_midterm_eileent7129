// JavaScript source code
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
            this.angle += 5;
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