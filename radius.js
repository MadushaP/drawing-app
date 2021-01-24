var setRadius = function (newRadius) {
  if (newRadius < minRad)
    newRadius = minRad;
  else if (newRadius > maxRad)
    newRadius = maxRad;

  radius = newRadius;
  context.lineWidth = radius * 2;

  radSpan.innerHTML = radius;
}


function clearCanvas(canvas) {
  var oldColor = context.fillStyle;
  canvas.width = canvas.width;
  context.lineWidth = radius * 2;
  context.fillStyle = oldColor;
  context.strokeStyle = oldColor;

}

var minRad = 1,
  maxRad = 100,
  interval = 1,
  defaultRad = 4,
  radSpan = document.getElementById('radval'),
  decRad = document.getElementById('decRad'),
  incRad = document.getElementById('incRad');
  smallSize = document.getElementById('smallSize');
  medSize = document.getElementById('medSize');
  largeSize = document.getElementById('largeSize');
  clear = document.getElementById('clear');
  canvas = document.getElementById('canvas');

decRad.addEventListener('click', function () {
  setRadius(radius - interval);
});


incRad.addEventListener('click', function () {
  setRadius(radius + interval);
});


smallSize.addEventListener('click', function () {
  setRadius(2);
});


medSize.addEventListener('click', function () {
  setRadius(10);
});


largeSize.addEventListener('click', function () {
  setRadius(50);
});

clear.addEventListener('click', function () {
  clearCanvas(canvas);
});


setRadius(defaultRad);