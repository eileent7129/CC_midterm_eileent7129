// JavaScript source code

// tetris class

class Square {

   constructor (x,y){
        this.x = x;
        this.y = y;

    }

    display(){
        fill(255);
        stroke(0);
        strokeWeight(2);
        square(this.x,this.y,20);
        square(this.x, this.y+20, 20);
        square(this.x+20, this.y, 20);
        square(this.x+20, this.y+20);
    }
}