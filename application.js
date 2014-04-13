$(document).ready(function() {
	var randomNumber = Math.floor(Math.random()*100);
	console.log("The computer has chosen " + randomNumber);

	/*Declare Variables*/
	var userInput;
	var emptyTextArea;
	var numGuesses = 0;
	var guessList;
	var userJustWon = false;
	var inputIsValid = false;

/*Function to reset text area and focus the cursor*/
	emptyTextArea = function() {
        $("#text").val("");
        $("#text").focus();
        $("#text").select();
    };


/*User submits a guess*/	 
$("button").click(function (event) {
		event.preventDefault();
			userInput = $("input").val();
			console.log("The user has chosen " + userInput);
			displayGuess();


if(userInput == randomNumber) {
			$("#feedback").text("You guessed correct!");
			userJustWon = true;	
		} else if((Math.abs(userInput-randomNumber))<=2){
			$("#feedback").text("Burning hot!");	
		} else if((Math.abs(userInput-randomNumber))<5){
			$("#feedback").text("Hot!");
		} else if ((Math.abs(userInput-randomNumber))<10){
			$("#feedback").text("Warm");
		} else if ((Math.abs(userInput-randomNumber))<15){
			$("#feedback").text("Luke Warm");
		} else if ((Math.abs(userInput-randomNumber))<20){
			$("#feedback").text("Cold");
		} else if ((Math.abs(userInput-randomNumber))<25){
			$("#feedback").text("Freezing Cold!");
		} else if((Math.abs(userInput-randomNumber))<100){
			$("#feedback").text("Ice Ice Baby");			
	}

});	

/*Add a li to Guesses field*/
function displayGuess() {
  		numGuesses++;
		$('#pastGuesses').append("<li>" + userInput + "</li>");

}


$("button").click(userInput);


});

/*Put in under button.click --> $('ul').prepend(userInput);

$("#feedback").text("Smokin' HOT!!!");


if(userInput == randomNumber) {
			alert("You guessed correct!");
			userJustWon = true;
		} else if((Math.abs(userInput-randomNumber))<=2){
			alert("Burning hot!");
		} else (alert("try again!"));



        if(userInput == randomNumber) {
			alert("You guessed correct!");
			userJustWon = true;	
		} else if((Math.abs(userInput-randomNumber))<2){
			alert("Burning hot!");	
		} else if((Math.abs(userInput-randomNumber))<5){
			alert("Hot!");
		} else if ((Math.abs(userInput-randomNumber))<10){
			alert("Warm");
		} else if ((Math.abs(userInput-randomNumber))<15){
			alert("Luke Warm");
		} else if ((Math.abs(userInput-randomNumber))<20){
			alert("Cold");
		} else if ((Math.abs(userInput-randomNumber))<25){
			alert("Freezing Cold!");
		} else if((Math.abs(userInput-randomNumber))<100){
			alert("Total popsicle!");	
				
	}
	*/