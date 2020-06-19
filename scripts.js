var modal = document.getElementById('id01');
window.onclick = function(event){
	if(event.target == modal){
		modal.style.display = "none";
	}
}
var basket = document.getElementById('bask');
window.onclick = function(event){
	if(event.target == basket){
		basket.style.display = "none";
	}
}
var count = 0;
function add(){
	alert("Your selection has been added to basket");
	count+=1;
	document.getElementById('itemnum').innerHTML = count ;

}


$(document).ready(function(){
	$(".signupbtn").click(function(){
		$(".modal").hide();
		alert("registration has been completed");
			
		});
	});
