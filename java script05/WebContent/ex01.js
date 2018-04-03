/**
 * 2*2	3*2		4*2
 * 2*4	3*4		4*4	
 * 2*6	3*6		4*6
 * 2*8	3*8		4*8
 */
window.onload = function(){
	var num = 2;
	var targetDiv = document.getElementById("printDiv");
	for (var i=2; i<9; i=i+2){
		targetDiv.innerHTML += num+"*"+i+"="+(num*i)+"&nbsp;";
		targetDiv.innerHTML += (num+1)+"*"+i+"="+((num+1)*i)+"&nbsp;";
		targetDiv.innerHTML += (num+2)+"*"+i+"="+((num+2)*i)+"<br>";
	}
}