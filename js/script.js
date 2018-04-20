
$(document).ready(function(){
	/*function for Side Navbar Active*/
	$(".sidenav a").on("click", function(){
	   $(".sidenav").find(".active").removeClass("active");
	   $(this).addClass("active");
	});
	//$("#SideNavBar").hide();
	$(".navbar-toggle").click(function(){
	    $("#SideNavBar").toggle();
	});

});