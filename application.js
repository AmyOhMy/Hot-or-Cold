$(document).ready(function() {
	var answer = Math.random;
	Math.random <= 100;
	alert(answer);
	$('button').click(function() {
		var guess = $('input').val();
		$('ul').prepend(guess);
		if(guess == answer) {
			alert("You're correct!");
		} else if((Math.abs(guess-answer))<5){
			alert("hot");
		} else if ((Math.abs(guess-answer))<10){
			alert("hot");
		} else if ((Math.abs(guess-answer))<15){
			alert("hot");
		} 
	}
}

/*var answer = Math.floor(Math.random()*100); Try this on lines 2,3. */