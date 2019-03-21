var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}

$(".move-area").mousemove(function(event) {
  var eye = $(".eye");
  var x = (eye.offset().left) + (eye.width() / 2);
  var y = (eye.offset().top) + (eye.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 180;
  eye.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});