
function setup() {
    let canvw = 1000;
    let canvh = 1000;
    createCanvas(canvw, canvh);
    background(255);

    strokeWeight(10);
    colorMode(HSB);
    rect(50, 50, 900, 900);
    let numlines = 15;
    let resolution = 15;
    strokeWeight(2);
    translate(100, 100);
    noLoop();

    let sizex = 800 / resolution;
    let sizey = 800 / numlines;
    let lastx = 0;
    let lasty = 0;
    for (var i = 0; i < numlines + 1; i++) {
        lasty = (sizey * i);
        lastx = 0;

        for (var j = 1; j < resolution + 1; j++) {
            x = (j * sizex);
            y = (i * sizey) + random(- 0.75 * i - 3, 0.75 * i + 3);
            strokeWeight(.05 * (i ** 2) + 1);
            line(lastx, lasty, x, y);
            lastx = x;
            lasty = y;
        }
    }
}

function mouseClicked() {
    save();
}