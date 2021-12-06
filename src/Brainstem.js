function setup() {

  off = 50;
  spc = 10;
  strokeWeight(4);
  w = min(480, 480);
  createCanvas(w, w);
}

prevx1 = 0;
prevx2 = 0;
prevrad = 0;

function draw() {
  background(255);


  t = frameCount / 50;
  for (x = off; x < w - off; x += spc) {
    modifier = x * 30;
    offsetAmount = 160;

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
