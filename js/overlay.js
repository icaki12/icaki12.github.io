$(document).ready(function () {
    $(".btn1").click(function () {
        $("#funkcionalnost").show();
        $('#modul').show();
        $('#veza').show();
        $('#btn1').hide();
		$('#btn2').fadeIn("slow");
    });
    $(".btn2").click(function () {
        $("#funkcionalnost").hide();
        $('#modul').hide();
        $('#veza').hide();
        $('#btn2').hide();
		$('#btn1').show();
    });
	$(".btn3").click(function () {
        $("#23").show();
        $('#24').show();
        $('#25').show();
        $('#26').show();
		$('#btn3').hide();
		$('#btn4').show();
    });
	$(".btn4").click(function () {
        $("#23").hide();
        $('#24').hide();
        $('#25').hide();
        $('#26').hide();
		$('#btn3').show();
		$('#btn4').hide();
    });
});
