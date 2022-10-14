

function setup() {
    createCanvas(1000, 1000);
    background(255);
    strokeWeight(10);
    rect(50, 50, 900, 900);
    strokeWeight(1);
    draw_blobs();
}


function draw_blobs() {
    colorMode(HSL);

    let end = 6;
    let size = 600 / end;
    translate(200, 200);
    strokeWeight(0);
    for (var i = 0; i <= end; i++) {
        for (var j = 0; j <= end; j++) {

            let base_size = random(50, 70);
            push();
            let col = random(0, 360);
            let offset = random(-20, 20);
            translate(i * size + offset, j * size + offset);

            fill(col, 30, 60);
            blob(0, 0, base_size, base_size / 4);

            fill(col, 50, 55);
            blob(0, 0, base_size * 3 / 4, base_size / 8);

            fill(col, 60, 45);
            blob(0, 0, base_size / 2, base_size / 10);

            fill(col, 80, 40);
            blob(0, 0, base_size / 4);
            fill(0, 0, 0);
            circle(0, 0, 7);

            pop();

        }
    }
}

function blob(x, y, d, ran) {
    let num_blob = 6;
    circle(x, y, d);
    for (var i = 0; i < num_blob; i++) {
        circle(x + random(-1 * ran, ran), y + random(- 1 * ran, ran), d);
    }
}
