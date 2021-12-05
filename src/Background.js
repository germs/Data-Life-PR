const STEP = 16;
const MAX_HEIGHT = 600;
const MAX_WIDTH = 600;

function setup() {
        createCanvas(1080, 1080);
      }

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
       }


