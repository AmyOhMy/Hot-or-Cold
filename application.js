$(document).ready(function() {
	var randomNumber = Math.floor(Math.random()*100);
	alert(randomNumber);

	$('button').click(function() {
		var guess = $('input').val();

		$('ul').prepend(guess);
		if (guess == NaN) {
			alert("Numbers only please!");
		} else if(guess > 100) {
			alert("Keep it below 100 please!");
		} else if(guess < 1) {
			alert("Let's keep it positive!");	
		} else if(guess == randomNumber) {
			alert("You guessed correct!");	
		} else if((Math.abs(guess-randomNumber))<2){
			alert("Burning hot!");	
		} else if((Math.abs(guess-randomNumber))<5){
			alert("Hot!");
		} else if ((Math.abs(guess-randomNumber))<10){
			alert("Warm");
		} else if ((Math.abs(guess-randomNumber))<15){
			alert("Luke Warm");
		} else if ((Math.abs(guess-randomNumber))<20){
			alert("Cold");
		} else if ((Math.abs(guess-randomNumber))<25){
			alert("Freezing Cold!");
		} else if((Math.abs(guess-randomNumber))<100){
			alert("Total popsicle!");	
		
				
	}	
}

