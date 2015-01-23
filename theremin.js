var context = new AudioContext();

var oscillator = context.createOscillator();
oscillator.frequency.value = 500;
oscillator.connect(context.destination);
oscillator.start(0);


var videoInput = document.getElementById('inputVideo');
var canvasInput = document.getElementById('inputCanvas');

var htracker = new headtrackr.Tracker();
htracker.init(videoInput, canvasInput);
htracker.start();

var xpos;

document.addEventListener("headtrackingEvent", function (e) {
  if (xpos > e.x && oscillator.frequency.value < 1000) {
    oscillator.frequency.value += 20;
  }else if (xpos < e.x && oscillator.frequency.value > 0) {
    oscillator.frequency.value -= 20;
  }
  xpos = e.x;
});
