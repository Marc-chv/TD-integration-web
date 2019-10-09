function Getdivision(){
var nombreRandom = Math.floor(Math.random() * (1000 - 50) + 50);	
	document.getElementById('result-exo-5').innerHTML = nombreRandom;
}
window.onload = Getdivision; 