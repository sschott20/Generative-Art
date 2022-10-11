
function setup() {
    let canvw = 1000;
    let canvh = 1000;
    createCanvas(canvw, canvh);
    background(255);

    strokeWeight(10);
    colorMode(HSB);
    rect(50, 50, 850, 850);
    let numlines = 20;
    let resolution = 15;
    strokeWeight(2);
    noLoop();

    let sizex = 800 / resolution;
    let sizey = 800 / numlines;
    let lastx = 100;
    let lasty = 100;
    for (var i = 0; i < numlines; i++) {
        lasty = 100 + (sizey * i);
        lastx = 100;

        for (var j = 1; j < resolution; j++) {
            x = 100 + (j * sizex);
            y = 100 + (i * sizey) + random(- 0.5 * (i) - 3, 0.5 * i + 3);
            strokeWeight(.016 * (i ** 2) + 0.2);
            line(lastx, lasty, x, y);
            lastx = x;
            lasty = y;
        }

    }

}
