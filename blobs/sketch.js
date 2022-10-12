

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

    let end = 8;
    let size = 800 / end;
    translate(100, 100);
    strokeWeight(0);
    for (var i = 0; i <= end; i++) {
        for (var j = 0; j <= end; j++) {
            let base_size = random(30, 70);
            push();
            let col = random(30, 300);
            translate(i * size, j * size);
            fill(col, 30, 70);
            circle(0, 0, base_size);

            fill(col, 50, 60);
            circle(0, 0, base_size * 3 / 4);

            fill(col, 60, 50);
            circle(0, 0, base_size / 2);

            fill(col, 80, 40);
            circle(0, 0, base_size / 4);
            pop();

        }
    }
}
