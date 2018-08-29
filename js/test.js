    function_value = "";
    function_value += this.value;
   
    $( "select[class$='_parameter']" ).change(function() {
      parameter_value = "";
      $( "select option:selected" ).each(function() {
        parameter_value += this.value;
      });
      $( "textarea#sunapi_command" ).text( function_value + parameter_value );
    }).trigger( "change" );
  });