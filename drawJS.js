var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var radius = 10;
var drag = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.lineWidth = radius * 2;

window.onresize = function () {
  var image = context.getImageData(0, 0, canvas.width, canvas.height);
  var oldColor = context.fillStyle;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  //Restore image
  context.putImageData(image, 0, 0);
  context.lineWidth = radius * 2;
  context.fillStyle = oldColor;
  context.strokeStyle = oldColor;
}


var putPoint = function (e) {
  if (drag) {

    context.lineTo(e.clientX, e.clientY);
    context.stroke();

    context.beginPath();
    context.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
    context.fill();

    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
  }
}


var start = function (e) {
  drag = true;
  putPoint(e);
}

var end = function () {
  drag = false;
  context.beginPath();
}


canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', end);

