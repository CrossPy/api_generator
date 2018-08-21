$(function () {
	$(".dropdown-menu a").click(function() {
		$(".menu:first-child").text($(this).text());
			$(".menu:first-child").val($(this).text());
	});
});

$(document).ready(function () {
	$('.IR').click(function() {
		document.getElementById('sunapi_command').innerHTML = ($(this).val());

	});

	$(".backlight").click(function() {
		document.getElementById("sunapi_command").innerHTML = ($(this).val());
	});

});


$(document).ready(function() {
	$(".check").find("select").change(function() {
		var val = $(this).val();
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
});

