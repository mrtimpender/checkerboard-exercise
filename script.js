var randoColor = function(){
  var rgb1 = Math.floor(Math.random()*256);
  var rgb2 = Math.floor(Math.random()*256);
  var rgb3 = Math.floor(Math.random()*256);
  var rgb = "rgb(" + rgb1 + "," + rgb2 + "," + rgb3 + ")";
  return rgb;
}

var checkerboard = function() {
    document.body.style.margin = "0";
    for (i=0; i<64; i++){
      var div = document.createElement('div');
      var rgb = "";
      div.style.width = "11.1%";
      div.style.cssFloat = "left";
      div.style.paddingBottom = "11.1%";
      div.style.backgroundColor = randoColor();
      document.body.appendChild(div);
    }
}

checkerboard();
