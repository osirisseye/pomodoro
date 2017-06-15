window.onload = function ()
{

	$("#start").on("click", function() {
		var n = 60;
		var tm = setInterval(countDown,1000);

		function countDown(){
		   n--;
		   if(n == 0){
		      clearInterval(tm);
		   }
		   console.log(n);
		}
	});
}


