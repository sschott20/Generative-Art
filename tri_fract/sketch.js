function setup() {
    createCanvas(1000, 1000);
    background(255);
    strokeWeight(10);
    rect(50, 50, 900, 900);
    translate(100, 100);
    strokeWeight(1);

    tri_fract(400, 0, 800, 1);
    noLoop();
}


function tri_fract(x, y, length, sweight) {
    strokeWeight(sweight);
    let x1 = x - length / 2;
    let y1 = y + length;

    let x2 = x + length / 2;
    let y2 = y + length;
    triangle(x, y, x1, y1, x2, y2);
    if (length > 20) {
        tri_fract(x, y, length / 2, sweight);
        tri_fract(x + length / 4, y2, length / 2, sweight);
        tri_fract(x - length / 4, y1, length / 2, sweight / 2);
    }
}




