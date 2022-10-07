const {
    Delay,
} = require("../../../.vscode/extensions/samplavigne.p5-vscode-1.2.11/p5types");

function setup() {
    let canvw = 1000;
    let canvh = 1000;
    let squares = 10;

    createCanvas(canvw, canvh);
    background(255);
    // draw_lines(25, 25, 200, 200, 0, 0);
    // draw_lines(25, 25, 200, 200, 200, 200);

    for (var i = 0; i < squares; i++) {
        for (var j = 0; j < squares; j++) {
            let size = canvw / squares;
            // stroke(random(255), random(255), random(255));

            draw_lines(5 + i, 5 + j, size * i, size * j, size / (i + 5), size / (j + 5));
        }
    }
    // draw_lines(50, 50, 800, 800);
    // save()

}

function draw_lines(rows, cols, offsetx, offsety, stepx, stepy) {
    let frame = 0;
    strokeWeight(1);
    for (let i = frame; i < rows - frame; i++) {
        for (let j = frame; j < cols - frame; j++) {

            if (random() > 0.5) {
                line(offsetx + (i + 1) * stepx, offsety + j * stepy, offsetx + i * stepx, offsety + (j + 1) * stepy);
            }
            else if (random() > 0.5) {
                line(offsetx + (i) * stepx, offsety + j * stepy, offsetx + (i + 1) * stepx, offsety + (j + 1) * stepy);
            }


        }
    }
}
