function setup() {


    createCanvas(1000, 1000);
    background(255);
    strokeWeight(10);
    rect(50, 50, 900, 900);
    translate(100, 100);
    strokeWeight(1);

    tri_fract(400, 0, 800, 1);
    noLoop();
    // for (var i = 0; i < 50; i++) {
    //     line(0, 50 * i, 800, 50 * i);
    // }
}


function tri_fract(x, y, length, sweight) {
    strokeWeight(sweight);
    x1 = x - length / 2;
    y1 = y + length;

    x2 = x + length / 2;
    y2 = y + length;
    triangle(x, y, x1, y1, x2, y2);
    if (length > 20) {
        tri_fract(x, y, length / 2, sweight );
        tri_fract(x2, y2, length / 2, sweight );

        tri_fract(x1, y1, length / 2, sweight / 2);
    }
}




