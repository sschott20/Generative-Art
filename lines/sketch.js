const {
    Delay,
} = require("../../../.vscode/extensions/samplavigne.p5-vscode-1.2.11/p5types");

function setup() {
    let canvw = 800;
    let canvh = 800;
    createCanvas(canvw, canvh);
    background(255);
    draw_lines(50, 50, 800, 800);

    draw_lines(50, 50, 800, 800);
    // save()

}

function draw_lines(rows, cols, canvw, canvh, offsetx, offsety) {
    frame = 5;
    let stepx = canvw / rows;
    let stepy = canvh / cols;
    stroke(0);
    strokeWeight(0.5);
    for (let i = frame; i < rows - frame; i++) {
        for (let j = frame; j < cols - frame; j++) {

            if (random() > 0.5) {
                line((i + 1) * stepx, j * stepy, i * stepx, (j + 1) * stepy);
            }
            else if (random() > 0.5) {
                line((i) * stepx, j * stepy, (i + 1) * stepx, (j + 1) * stepy);
            }


        }
    }
}
