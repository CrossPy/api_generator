

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

/* $(document).ready(function() {
	$("#ir").find("select").change(function() {
		var val = $(this).val();
		var check = true;
		if(val == "off") {
			document.getElementById("sunapi_command").innerHTML += "&Channel=0&Mode=Off";
		} else if (val == "auto1") {
			document.getElementById("sunapi_command").innerHTML += "&Channel=0&Mode=Auto1";
		} else if (val == "auto2") {
			document.getElementById("sunapi_command").innerHTML += "&Channel=0&Mode=Auto2";
		} else if (val == "manual") {
			document.getElementById("sunapi_command").innerHTML += "&Channel=0&Mode=Manual";
		} else {
			document.getElementById("sunapi_command").innerHTML = $(".IR").val();
		}

	});
	document.getElementById("sunapi_command").innerHTML = $(".IR").val();
}); */


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
		var text = ($(this).val());
		document.getElementById("sunapi_command").innerHTML = text;
	});

});

