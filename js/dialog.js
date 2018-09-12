$( function() {
    $( "#dialog-message" ).dialog({
      	modal: true,
      	buttons: {
    	Ok: function() {
      			$( this ).dialog( "close" );
    		}
  		},
  		'width': "500px",
  		"height": "400",
  		'overflow': "scroll"
	});
});