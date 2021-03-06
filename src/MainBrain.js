function setup() {

  off = 50;
  spc = 15;
  strokeWeight(4);
  w = min(480, 480);
  createCanvas(w, w);
  createButton();
}

prevx1 = 0;
prevx2 = 0;
prevrad = 0;

function draw() {
  background(0);
  translate(width / 7, height / 7);
  rotate(PI / 2.0);
  textSize(100);
  fill(255, 255, 255, 80);
  text('METROPOLITANO', 10, 60);
  fill(255, 51, 51);
  textSize(100);
  text('+', 2, -790);
  textSize(20);
  fill(255, 255, 255, 80);
  text('3227317202012:00:00', 10, 60);
  // parameters to play with column-wise values from row IDs

  t = frameCount / 50;
  for (x = off; x < w - off; x += spc) {
    modifier = x * 60;
    offsetAmount = 69;

    x1 = x + offsetAmount * sin(modifier + t);
    x2 = x - offsetAmount * sin(modifier + t);

    d = dist(x1, x2, w / 2, w / 2);
    dmap = map(d, 0, w / 2 + off / 2, 1, 0);
    strokeWeight(dmap * 30);

    x1 = x + offsetAmount * sin(modifier + t) * dmap;
    x2 = x - offsetAmount * sin(modifier + t) * dmap;

    point(x1, x2);

    rad = 100 * dmap;
    div = TAU / 3;
    for (a = t; a < TAU + t; a += div) {
    strokeWeight(5 * dmap);
    px = x1 + rad * cos(a);
    py = x2 + rad * sin(a);

    point(px, py);

    prevx = x1 + rad * cos(a + div);
    prevy = x2 + rad * sin(a + div);

    strokeWeight(1);
    line(px, py, prevx, prevy);

    connectx = prevx1 + prevrad * cos(a);
    connecty = prevx2 + prevrad * sin(a);

    if(x != off){
      line(px,py,connectx, connecty)
    }
}

    prevx1 = x1;
    prevx2 = x2;
    prevrad = rad;
  }
}
