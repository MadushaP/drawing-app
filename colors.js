
//Get all the swatches  and hold it in an array
var swatches = document.getElementsByClassName('swatch');

//Swatch colors
var colors = ['black', 'white', 'red', 'orange', '#330066',
   'yellow', '#CCCCFF', 'green', 'blue', 'indigo', '#33FF33', '#CC0033',
   'violet', '#336666', '#6600FF', '#FFFF33', '#33FFFF', '#660000', 'FF9933']


for (var i = 0; i < colors.length; i++) {
   var swatch = document.createElement('div');
   swatch.className = 'swatch';
   swatch.style.backgroundColor = colors[i];
   swatch.addEventListener('click', setSwatch);
   document.getElementById('colors').appendChild(swatch);


}

function setColor(color) {
   context.fillStyle = color;
   context.strokeStyle = color;
   var active = document.getElementsByClassName('active')[0];

   if (active) {
      active.className = 'swatch';
   };

}


function setSwatch(e) {
   //indentify swatch
   var swatch = e.target;

   //set color
   setColor(swatch.style.backgroundColor);

   //give active class
   swatch.className += ' active';
}

setSwatch({ target: active = document.getElementsByClassName('swatch')[0] });
