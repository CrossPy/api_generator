$(document).ready(function() {

	var previous_function;
	var previous_parameter;
	var currentID;

	$('textarea#sunapi_command').val('Welcome, Let\'s get started!');
	//=================================================//
	//
	// THIS MAKES A MODIFICATION TO THE TEXTAREA.
	//
	//=================================================//

	$(".check").find("select").on("change", function() {
		var val = $(this).val();
		console.log(val);
		if(val == "blc") {
			$(".blc").show();
			$(".hlc").hide();
			$(".wdr").hide();
		} else if (val == "hlc") {
			$(".blc").hide();
			$(".hlc").show();
			$(".wdr").hide();
		} else if (val == "wdr") {
			$(".blc").hide();
			$(".hlc").hide();
			$(".wdr").show();
		} else {
			$(".blc, .hlc, .wdr").hide();			
		}
	});

	$( function() {
    	var handle = $( "#range" );
    	$( ".slidecontainer" ).slider({
      		create: function() {
        		handle.text( $( this ).slider( "value" ) );
      		},
      		slide: function( event, ui ) {
        		handle.text( ui.value );
      		}
    	});
	});



	//============================================================//
	//
	// THIS MAKES THE SELECTED OPTION TO SHOW IN THE DROPDOWN MENU
	//
	//============================================================//


	/*$(function () {
		$(".dropdown-menu a").click(function() {
			$(".menu:first-child").text($(this).text());
			$(".menu:first-child").val($(this).text());
		});
	});
	*/

	//=================================================//
	//
	// THIS CHANGES BACKGROUND COLOR OF ACTIVE BUTTONS
	//
	//=================================================//


	//=================================================//
	//
	// THIS MAKES A MODIFICATION TO THE TEXTAREA.
	//
	//=================================================//


	var function_value;
  	var parameter_value;
  	var values;
  	var parameter_mode;
  	var i;
  	$('.box-gray > div > .function').on('click', function(e) {

	  	e.preventDefault();
		$(".box-gray > div > .function").removeClass("active");
		$(this).addClass("active");

		currentID = $(this).attr("data-target");

	    function_value = this.value;
	    $("textarea#sunapi_command").val(function_value);


	    $(function() {
	    	
	    	$parameter_value = $(`${currentID} [class$='_parameter']`);
	    	console.log($parameter_value);
	    	$(`${currentID}` ).on("change", function() {

	    		values = "";
	    		for (i = 0; i < $parameter_value.length; i++) {
	    			values += $parameter_value.eq(i).val();

	    		}

	    		$("textarea#sunapi_command").val(function_value + values);
	    	});
	    });


	    /*$(`${currentID} select` ).on("change", function() {

   			$("textarea#sunapi_command").val(function_value + " " + )

      		$( `${currentID} select option:selected` ).each(function() {
        		parameter_value += this.value;
      		});
  			$( "textarea#sunapi_command" ).text( function_value + parameter_value );
  			console.log(function_value + parameter_value);
		}).trigger( "change" );*/
	   	//if ($(this).hasClass("active")) {
   		/*$("[class$='_parameter']" ).on("change", function() {
   			console.log("I'm in");
      		parameter_value = "";

      		$( `${currentID} select option:selected` ).each(function() {
        		parameter_value += this.value;
      		});
  			$( "textarea#sunapi_command" ).text( function_value + parameter_value );
  			console.log(function_value + parameter_value);
		}).trigger( "change" );*/
		//}
	});  	
});

