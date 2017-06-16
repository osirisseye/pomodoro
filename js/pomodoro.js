window.onload = function (){

	$("#start").on("click", function() {

		btime = document.getElementById("break").value//getting value of user's input
		var n = btime*60;//n is seconds for our function so we multiply by 60

		var tm = setInterval(countDown,1000);
		var tleft = 0;
		function countDown(){
		   n--;
		   var minutes = "0" + Math.floor(n / 60);
		   var seconds = "0" + (n - minutes * 60);
		   //tleft = n;
    	   document.getElementById("left").innerHTML = minutes.substr(-2) + ":" + seconds.substr(-2);;

		   //$("#left").innerHTML = n;

		   if(n == 0){
		      clearInterval(tm);
		      
		   }
		   
		   console.log(n);
		}
	});
}

/*
var minutes = "0" + Math.floor(n / 60);
var seconds = "0" + (n - minutes * 60);
return minutes.substr(-2) + ":" + seconds.substr(-2);
*/
