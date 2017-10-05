
//SLIDER 1

var counter = 1;
(function promena() {
setInterval(function(){slike(counter);counter++;}, 2500);

})()
	
	
		function slike(a) {
		if(counter<5){
  		document.getElementById('slider1').src="img/jastuk"+a+".jpg";
  		}
		else counter=0;
}

//END OF SLIDER 1

//SLIDER 2
var i = 0; 
var nizSlika = new Array(); 

nizSlika[0] = "img/1.jpg"; 
nizSlika[1] = "img/2.jpg"; 
nizSlika[2] = "img/3.jpg"; 

function swapImage() 
{ 
document.getElementById('slider2').src = nizSlika[i]; 
if(i < nizSlika.length - 1) i++; 
else i = 0; 
setTimeout("swapImage()",3200); 
} 
window.onload=swapImage;
//END OF SLIDER2

