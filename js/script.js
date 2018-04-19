$(document).ready(function(){
	$(".sidenav a").on("click", function(){
	   $(".sidenav").find(".active").removeClass("active");
	   $(this).addClass("active");
	});
});