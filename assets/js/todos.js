$("ul").on("click", "li", function(){
	$(this).toggleClass("selected");	
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove(); 	
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todo=$(this).val();

		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todo + "</li>");
	}
});

$(".fa-plus").click(function(){
	console.log("clicked");
	$("input[type='text']").toggleClass("toggleInput");
});