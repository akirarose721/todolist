//check off todos by clicking
 $("ul").on("click", "li", function(){
 	$(this).toggleClass("completed");
 })

 //click on x to delete todo item
$("ul").on("click", "span", function(event){
 	$(this).parent().fadeOut(500, function(){
 		$(this).remove();
 	});
 	event.stopPropagation();
 })

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//get new todo item
		let todoListText = ($(this).val());
		$(this).val("");
		//add new todo as li to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoListText + "</li>");
	}
})
$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle();
})
