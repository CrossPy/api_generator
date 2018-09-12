	var function_value = "";
	var textarea = "";
	var modetext = "";
	var currentID;
	var parameter_value;
	var values = "";
	var slider_value;
	var checked;
	var ip_text = "";

	$('textarea#sunapi_command').val('Welcome, Let\'s get started!');



	//=================================================//
	//
	// Focus on IR first
	// Fous on backlight next
	//
	//=================================================//
	// Test //

	$('#div_command > #ip_container > #ip_address').on("change", function() { 
     	if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test($("#div_command > #ip_container > #ip_address").val())) {  
			ip_text = $("#div_command > #ip_container > #ip_address").val();
  		} else {
  			alert("You have entered an invalid IP address!") 
  			$("textarea#sunapi_command").val("Invalid IP Address");
  			ip_text = "<Invalid IP Address>";
  		}
    });

	$(".box-gray div > .function").on("click", function() {
		currentID = $(this).attr("data-target"); // id="ir"
		textarea = "";
		function_value = this.value;
		switch(currentID) {
			case "#ir":
				$("textarea#sunapi_command").val(ip_text + function_value);
				$(`${currentID} > .config [class$='_parameter']`).on("change click", function() {
					parameter_value = $(`${currentID} [class$='_parameter']`);
					values = "";
					for (i = 0; i < parameter_value.length; i++) {
			    		values += parameter_value.eq(i).val();

			    	}

			    	$("textarea#sunapi_command").val(ip_text + function_value + values);
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
		        					$("textarea#sunapi_command").val(ip_text + function_value + values + "&param_value=" + slider_value);
      							}
    						});
			    		});
			    	} else {
			    		$("#slider").hide();
			    	}
				})
			break;
			case "#backlight":
				$("textarea#sunapi_command").val(ip_text + function_value);
				console.log(currentID);
				$(`${currentID} > .config`).find(".camera_option").on("change", function() {
					var option_value = $.parseJSON($(this).val());
					$("[class$='_container']").hide();
					if (option_value['name'] == "blc") {
						console.log(option_value['name'])
						$("textarea#sunapi_command").val(ip_text + function_value + option_value['api']);
						$(".blc_container").show();
						$(".blc_container > .blc_level_parameter").on("change", function() {
							parameter_value = $(`${currentID} > .blc_container > [class$='_parameter']`);
							values = "";
							for (i = 0; i < parameter_value.length; i++) {
								values += parameter_value.eq(i).val();
							}
							$("textarea#sunapi_command").val(ip_text + function_value + option_value['api'] + values);
						})
					} else if(option_value['name'] == "hlc") {
						$("textarea#sunapi_command").val(ip_text + function_value + option_value['api']);
						$(".hlc_container").show();
						$(".hlc_container > [class$='_parameter']").on("change", function() {
							parameter_value = $(`${currentID} > .hlc_container > [class$='_parameter']`);
							console.log(parameter_value);
							values = ""
							for (i = 0; i < parameter_value.length; i++) {
								values += parameter_value.eq(i).val();
							}
							$("textarea#sunapi_command").val(ip_text + function_value + option_value['api'] + values);
						})
						
						// $(".hlc_container > [class$='_")
					} else if(option_value['name'] == "wdr") {
						$("textarea#sunapi_command").val(ip_text + function_value + option_value['api']);
						$(".wdr_container").show();
						$(".wdr_container > [class$='_parameter']").on("change", function() {
							parameter_value = $(`${currentID} > .wdr_container > [class$='_parameter']`);
							values = "";
							
							for (i = 0; i < parameter_value.length; i++) {
								values += parameter_value.eq(i).val();
							}
							$("textarea#sunapi_command").val(ip_text + function_value + option_value['api'] + values);
							console.log(parameter_value);
						})
					} else {
						$(".blc_container, .hlc_container, .wdr_container").hide();
					}
				});
				
				break;
				case "#privacymask":
					$("textarea#sunapi_command").val(ip_text + function_value);
					$(`${currentID} > .config [class$='_parameter']`).on("change", function() {
						parameter_value = $(`${currentID} [class$='_parameter']`);
						values = "";
						for (i = 0; i < parameter_value.length; i++) {
				    		values += parameter_value.eq(i).val();

				    	}

				    	$("textarea#sunapi_command").val(ip_text + function_value + values);
				    });


				break;
			default:
			textarea = "";
		}
	});
	

