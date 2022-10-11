function setup() {

    let canvw = 1000;
    let canvh = 1000;
    createCanvas(canvw, canvh);
    background(255);
    strokeWeight(10);
    rect(50, 50, 850, 850);
    strokeWeight(0.5);
    translate(100, 100);

    tree_fract(50, 400, 750, 90);
    noLoop();

}

function tree_fract(length, basex, basey, angle) {
    strokeWeight(4);
    x = basex + length * cos(angle);
    y = basey - length * sin(angle);
    line(basex, basey, x, y);
    if (length - 5 > 0) {
        tree_fract(length - 10, x, y, angle + 5);
        tree_fract(length - 10, x, y, angle - 5);

    }
}



