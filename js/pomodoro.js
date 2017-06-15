window.onload = function ()
{

	$("#start").on("click", function() {
		var n = 60;
		var tm = setInterval(countDown,1000);
		var tleft = 0;
		function countDown(){
		   n--;
		   tleft = n;
    	   document.getElementById("left").innerHTML = tleft;

		   //$("#left").innerHTML = n;

		   if(n == 0){
		      clearInterval(tm);
		      
		   }
		   
		   console.log(n);
		}
	});
}


