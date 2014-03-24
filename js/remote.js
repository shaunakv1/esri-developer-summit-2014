var fb = new Firebase("https://reveal-remote.firebaseio.com");

Reveal.addEventListener( 'ready', function( event ) {
	
} );

Reveal.addEventListener( 'slidechanged', function( event ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    //console.log(event.indexh);
    if(true){
      fb.set({
        slide:{
          h: event.indexh,
          v: event.indexv 
        } 
      });
    }
});

fb.on("value", function(data) {
  var slide = data.val() ? data.val().slide : "";
  console.log(data.val());
  Reveal.slide( slide.h, slide.v);
  
});