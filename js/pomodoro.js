window.onload = function (){

	//1st function of timer for our break 
	$("#start").on("click", function() {

		btime = document.getElementById("break").value//getting value of user's input
		var n = btime*60;//n is seconds for our function so we multiply by 60

		var tm = setInterval(countDown,1000);
		var tleft = 0;
		function countDown(){
		   n--;
		   var minutes = "0" + Math.floor(n / 60);
		   var seconds = "0" + (n - minutes * 60);
    	   document.getElementById("left").innerHTML = minutes.substr(-2) + ":" + seconds.substr(-2);
		   if(n == 0){
		      clearInterval(tm);
		      
		   }
		   
		   //console.log(n);
		}
	});




}

/* Basic code for mm:ss format
var minutes = "0" + Math.floor(n / 60);
var seconds = "0" + (n - minutes * 60);
return minutes.substr(-2) + ":" + seconds.substr(-2);
*/
