// Exercice 9
function convertToPound(){
	var nb_1 = document.getElementById('input1').value;
	var result = nb_1 * 2.205;
	document.getElementById('ex9_1_result').innerHTML = result;
}

function convertToKg(){
	var nb_2 = document.getElementById('input2').value;
	var result = nb_2 / 2.205;
	document.getElementById('ex9_2_result').innerHTML = result;
}