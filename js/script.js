$(function () {
	$(".dropdown-menu a").click(function() {
		$(".menu:first-child").text($(this).text());
			$(".menu:first-child").val($(this).text());
	});
});

$(document).ready(function () {
	$('.IR').click(function() {
		document.getElementById('sunapi_command').innerHTML += ($(this).val());

	});

});

function changeOption() {
	var selected = document.getElementById('select').value;
	document.getElementById('sunapi_command').innerHTML += selected;
}

function getSelectedValue() {
	var selected = document.getElementById('select').value;
	document.getElementById('sunapi_command').innerHTML += selected;
}