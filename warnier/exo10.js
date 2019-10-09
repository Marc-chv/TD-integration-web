// Exercice 10 et 11
var mot = ''; 
function lemot(){
  momot = document.getElementById('input1').value  ;
  mot += momot;
	document.getElementById('result10').innerHTML = mot;
}

function reset(){
    mot = '';
    document.getElementById("result10").innerHTML = mot;
  }
var cotecote = (Math.random() * (20 - 0.5) + 0.5) . toFixed(2);
function cote(){ 
cotecote = (Math.random() * (20 - 0.5) + 0.5) . toFixed(2);
document.getElementById("cote11").innerHTML = cotecote; 
}
function gain(){
var montant = document.getElementById('input2').value;
var gaingain = cotecote * montant;
document.getElementById("gain11").innerHTML = gaingain . toFixed(2);
}