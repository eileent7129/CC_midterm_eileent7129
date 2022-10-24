// JavaScript source code
let c;
let m;
let interval = 1000;
let lastTime;
let currentTime;

function setup() {
    createCanvas(800, 800);
    background(255);
    lastTime = 0;
    interval = 10000;
}

function draw() {
    //if (frameCount < 500) {// one trick pony; sketch has to be refereshed to repeat 
    //    background(0);
    //}
    ////even though draw() loop keeps looping, frameCount does not refreh on its own through draw loop, need to 
    //// refresh webpage in order to get frameCount to 0

    //else if(frameCount > 1000){
    //    background(255);
    //}

    //print(millis());

    //if (currentTime - lastTime > interval) { // 
    //    background(255, 0, 0);
    //    lastTime = currentTime; // record the last time something happened 
    //}
}

function mousePressed() { // everytime you press the mouse, it can be used as a time stamp
    /* currentTime = millis();*/
    if (true) {
        return 0;
    }
}

