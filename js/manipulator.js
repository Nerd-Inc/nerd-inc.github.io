$(document).ready(function(){
	$(".icon-search").click(function () {
		$("input[type=search]").slideToggle();
	});
    
    $("#showHide").click(function (){
    	$("#pContent").slideToggle(400);
    	 $(".icon-details").css("transform", "rotate(90deg)");
    });
    $("#showHide2").click(function () {
    	$("#pContent2").slideToggle(400);
    });
    $("#showHide3").click(function () {
    	$("#pContent3").slideToggle(400);
    });
    $("#showHide4").click(function () {
    	$("#pContent4").slideToggle(400);
    });
    $("#showHide5").click(function () {
    	$("#pContent5").slideToggle(400);
    });
    $("#showHide6").click(function () {
    	$("#pContent6").slideToggle(400);
    });
    $("#showHide7").click(function () {
    	$("#pContent7").slideToggle(400);
    });
    $("#showHide8").click(function () {
    	$("#pContent8").slideToggle(400);
    });		
});
