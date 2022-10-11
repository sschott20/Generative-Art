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
    rect(50, 50, 850, 850);
    translate(100, 100);

    draw_lines(squares);
    noLoop();

}

function draw_lines(squares,) {
    strokeWeight(3);
    size = 800 / squares;
    let offset = 10;
    var x1, x2, y1, y2;
    for (var i = 0; i < squares - 1; i++) {

        for (var j = 0; j < squares - 1; j++) {

            if (random() > 0.5) {
                x1 = (i * size);
                x2 = (i + 1) * size;
                y1 = (j * size);
                y2 = (j * size);
                rx = (x1 + x2) / 2;
                ry = (y1 + y2) / 2 + random(-100, 100);

            } else {
                x1 = (i * size);
                x2 = (i * size);
                y1 = (j * size);
                y2 = (j + 1) * size;
                rx = (x1 + x2) / 2 +  random(-100, 100);
                ry = (y1 + y2) / 2;
            }
            strokeWeight(1);

           

            curve(rx, ry, x1, y1, x2, y2, rx, ry);
        }
    }
}
