$(document).ready(function() {
	var randomNumber = Math.floor(Math.random()*100);
	alert(randomNumber);

	/*Declare Variables*/
	var userInput;
	var guess;
	var emptyTextArea;

/*Function to reset text area and focus the cursor*/
	emptyTextArea = function() {
        $("#text").val("");
        $("#text").focus();
    };

/*New Code to try*/
	userInput = function() {
        event.preventDefault();
        guess = $("#text").val();
        console.log(guess);

	/* Ambreen's original code  
	$("button").click(function() {
		var guess = $("input").val();*/
		if (isNaN(guess)) {
			alert("Numbers only please!");
		} else if(guess > 100) {
			$("<h2 id = 'feedback'>" + "Let's keep it below 100!" + "</h2>").replaceAll("h2");
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
};

$("button").click(userInput);

/*Put in under button.click --> $('ul').prepend(guess);


userInput = function() {
        event.preventDefault();
        guess = $(".text").val();
        console.log(guess);*/