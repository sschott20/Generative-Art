const {
    Delay,
} = require("../../../.vscode/extensions/samplavigne.p5-vscode-1.2.11/p5types");

function setup() {
    let canvw = 1000;
    let canvh = 1000;
    let squares = 20;
    createCanvas(canvw, canvh);
    background(255);
    strokeWeight(10);
    rect(50, 50, 900, 900);
    draw_lines(squares);
    noLoop();

}

function draw_lines(squares,) {
    strokeWeight(3);
    size = 800 / squares;
    let offset = 10;
    var x1, x2, y1, y2;
    for (var i = 0; i < squares ; i++) {

        for (var j = 0; j < squares ; j++) {

            if (random() > 0.5) {
                x1 = 100 + (i * size);
                x2 = 100 + (i + 1) * size;
                y1 = 100 + (j * size);
                y2 = 100 + (j + 1) * size;

            } else {
                x1 = 100 + ((i + 1) * size);
                x2 = 100 + (i * size);
                y1 = 100 + (j * size);
                y2 = 100 + (j + 1) * size;
            }
            strokeWeight(random(2));
            line(x1, y1, x2, y2);
        }
    }
}
