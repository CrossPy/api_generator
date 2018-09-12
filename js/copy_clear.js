function copy() {
  /* Get the text field */
  var copyText = document.getElementById("sunapi_command");
  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  $("textarea#sunapi_command").val("Successfully Copied!")
} 

function clearTextArea() {
	$("textarea#sunapi_command").val("Successfully Cleared");
}