// Waits for DOM to be fully loaded.

 $( "#target" ).keypress(function(e) {
    if(e.which == 13) {
        window.location.assign("http://www.google.com/search?q=") + textfield.val());
        
    }

     //  console.log( "Handler for .keypress() called." ) 

 });
});



    
    