console.clear();

TweenMax.set('#Ouch', {autoAlpha: 0});

var blink = new TimelineMax({delay: 4 , repeat: -1, repeatDelay: 5 });
blink.to( '#Open-eyes_1' , .15, {autoAlpha: 0} )
     .to( '#Open-eyes_1' , .15, {autoAlpha: 1} );

window.addEventListener("mousemove", onMouseMove);
document.querySelector('svg').addEventListener("click", onClick);

function onMouseMove(e){
  var bodyRect = document.querySelector('body').getBoundingClientRect()
  var svgRect  = document.querySelector('svg').getBoundingClientRect();
  var happyRect = document.querySelector('#Happy').getBoundingClientRect();
  var sadRect = document.querySelector('#Ouch').getBoundingClientRect();
  var clientX = e.clientX;
  var clientY = e.clientY;
  var x = Math.floor( ( ( clientX - ( bodyRect.width / 2 ) ) / bodyRect.width ) * svgRect.width );
  var y = Math.floor( ( ( clientY - ( bodyRect.height / 2 ) ) / svgRect.height ) * svgRect.height );
  TweenMax.to( '#Happy, #Ouch' , .25, 
              { x: x,
                y: y, 
                ease: Power0.easeNone,
               modifiers:{
                 x: function(x){
                   if( x < -50 ){
                      return -50;
                   }
                   if( x > 50 ){
                      return 50;
                   }
                   return x;
                 },
                 y: function(y){
                   if( y < -70 ){
                      return -70;
                   }
                   if( y > 50 ){
                      return 50;
                   }
                   return y;
                 }
               }
              });
}


function onClick(e){
  var ouch = new TimelineMax({});
  ouch.set('#Happy',{autoAlpha: 0})
      .set('#Ouch',{autoAlpha: 1})
      .set('#Ouch',{autoAlpha: 0}, 1)
      .set('#Happy',{autoAlpha: 1}, 1)
}