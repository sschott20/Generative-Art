
function setup() {
    let canvw = 1000;
    let canvh = 1000;
    createCanvas(canvw, canvh);
    background(255);

    strokeWeight(10);
    rect(50, 50, 850, 850);
    let numlines = 20;
    let resolution = 20;
    strokeWeight(2);

    let sizex = 800 / resolution - 1;
    let sizey = 800 / numlines - 1;
    let lastx = 100;
    let lasty = 100;
    for (var i = 0; i < numlines; i++) {
        lasty = 100 + (sizey * i);
        lastx = 100;

        for (var j = 1; j < resolution; j++) {
            x = 100 + (j * sizex);
            y = 100 + (i * sizey) + random(-20, 20);
            line(lastx, lasty, x, y);
            lastx = x;
            lasty = y;
        }

    }

}
