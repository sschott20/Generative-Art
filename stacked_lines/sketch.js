const { Distortion } = require("../../../.vscode/extensions/samplavigne.p5-vscode-1.2.11/p5types");

function setup() {
    createCanvas(1000, 1000);
    background(255);
    strokeWeight(10);
    rect(50, 50, 900, 900);
    strokeWeight(1);
    // noLoop();
}

function draw() {
    frameRate(20);
    drawline();
}

function drawline() {
    translate(100, 100);

    end = 50;
    lastx = 0;
    lasty = 400;
    // lasty = random(390, 410);
    step = 800 / end;
    strokeWeight(0.5);

    for (var i = 0; i < end; i++) {
        x = lastx + step;
        distort =  i;

        y = random(lasty - distort, lasty + distort);
        line(lastx, lasty, x, y);
        lastx = x; lasty = y;
    }
}



