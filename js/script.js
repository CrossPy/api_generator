$(document).ready(function() {

	var function_value = "";
	var textarea = "";
	var modetext = "";
	var currentID;
	var parameter_value;
	var values = "";
	var slider_value;
	var checked;

	$('textarea#sunapi_command').val('Welcome, Let\'s get started!');


	//=================================================//
	//
	// Focus on IR first
	// Fous on backlight next
	//
	//=================================================//

	$(".box-gray div > .function").on("click", function() {
		currentID = $(this).attr("data-target"); // id="ir"
		textarea = "";
		function_value = this.value;
		switch(currentID) {
			case "#ir":
				$("textarea#sunapi_command").val(function_value);
				$(`${currentID} > .config [class$='_parameter']`).on("change", function() {
					parameter_value = $(`${currentID} [class$='_parameter']`);
					values = "";
					for (i = 0; i < parameter_value.length; i++) {
			    		values += parameter_value.eq(i).val();

			    	}

			    	$("textarea#sunapi_command").val(function_value + values);
			    	console.log(values);
			    	if (values == "&param_manual") {
			    		$("#slider").show()
			    		$(function() {
					    	$( "#slider" ).slider({
		      					create: function() {
		        					console.log($("#custom-handle").text( $( this ).slider( "value" )));
		        					
		      					},
		      					slide: function( event, ui ) {
		        					$("#custom-handle").text( ui.value );
		        					slider_value = ui.value;
		        					console.log(slider_value);
		        					$("textarea#sunapi_command").val(function_value + values + "&param_value=" + slider_value);
      							}
    						});
			    		});
			    	} else {
			    		$("#slider").hide();
			    	}
				})
				break;
			case "#backlight":
				$("textarea#sunapi_command").val(function_value);
				console.log(currentID);
				$(`${currentID} > .config`).find(".camera_option").on("change", function() {
					var option_value = $.parseJSON($(this).val());
					$("[class$='_container']").hide();
					if (option_value['name'] == "blc") {
						console.log(option_value['name'])
						$("textarea#sunapi_command").val(function_value + option_value['api']);
						$(".blc_container").show();
						$(".blc_container > .blc_level_parameter").on("change", function() {
							parameter_value = $(`${currentID} > .blc_container > [class$='_parameter']`);
							values = "";
							for (i = 0; i < parameter_value.length; i++) {
								values += parameter_value.eq(i).val();
							}
							$("textarea#sunapi_command").val(function_value + option_value['api'] + values);
						})
					} else if(option_value['name'] == "hlc") {
						$("textarea#sunapi_command").val(function_value + option_value['api']);
						$(".hlc_container").show();
						$(".hlc_container > [class$='_parameter']").on("change", function() {
							parameter_value = $(`${currentID} > .hlc_container > [class$='_parameter']`);
							console.log(parameter_value);
							values = ""
							for (i = 0; i < parameter_value.length; i++) {
								values += parameter_value.eq(i).val();
							}
							$("textarea#sunapi_command").val(function_value + option_value['api'] + values);
						})
						
						// $(".hlc_container > [class$='_")
					} else if(option_value['name'] == "wdr") {
						$("textarea#sunapi_command").val(function_value + option_value['api']);
						$(".wdr_container").show();
						$(".wdr_container > [class$='_parameter']").on("change", function() {
							parameter_value = $(`${currentID} > .wdr_container > [class$='_parameter']`);
							values = "";
							
							for (i = 0; i < parameter_value.length; i++) {
								values += parameter_value.eq(i).val();
							}
							$("textarea#sunapi_command").val(function_value + option_value['api'] + values);
							console.log(parameter_value);
						})
					} else {
						$(".blc_container, .hlc_container, .wdr_container").hide();
					}
				});
				
				break;
			default:
			textarea = "";
		}
	});

	



	//=================================================//
	//
	// THIS MAKES A MODIFICATION TO THE TEXTAREA.
	//
	//=================================================//

	/*$(".check").find("select").on("change", function() {
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


	$(function () {
		$(".dropdown-menu a").click(function() {
			$(".menu:first-child").text($(this).text());
			$(".menu:first-child").val($(this).text());
		});
	});
	

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


	    $(`${currentID} select` ).on("change", function() {

   			$("textarea#sunapi_command").val(function_value + " " + )

      		$( `${currentID} select option:selected` ).each(function() {
        		parameter_value += this.value;
      		});
  			$( "textarea#sunapi_command" ).text( function_value + parameter_value );
  			console.log(function_value + parameter_value);
		}).trigger( "change" );
	   	if ($(this).hasClass("active")) {
   		$("[class$='_parameter']" ).on("change", function() {
   			console.log("I'm in");
      		parameter_value = "";

      		$( `${currentID} select option:selected` ).each(function() {
        		parameter_value += this.value;
      		});
  			$( "textarea#sunapi_command" ).text( function_value + parameter_value );
  			console.log(function_value + parameter_value);
		}).trigger( "change" );
		}
	});	*/
});

