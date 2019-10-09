// Exercice 4
var chiffre = 0;

function plusTen(){
 
chiffre += 1;
 
document.getElementById("ex4_result").innerHTML = chiffre ;
}

function diviseFive(){
 
chiffre /= 5;
 
document.getElementById("ex4_result").innerHTML = chiffre ;
}

function multiplyHeight(){
 
chiffre *= 8;
 
document.getElementById("ex4_result").innerHTML = chiffre ;
}

function minusTwo(){
 
chiffre -= 2;
 
document.getElementById("ex4_result").innerHTML = chiffre ;
}

function combinePlusTenMinusTwo(){
 
chiffre += 10;
  chiffre -= 2;
 
document.getElementById("ex4_result").innerHTML = chiffre ;
}

function resetExo4(){
  chiffre = 0;
  document.getElementById("ex4_result").innerHTML = chiffre;
}