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


/*User submits a guess*/	 
$("#text").keypress(function (event) {
	if (event.which == 13) {
		
/*$("button").click(function (event) {*/
		event.preventDefault();
			userInput = $("input").val();
			console.log("The user has chosen " + userInput);
			displayGuess();
			$("#text").val("");
}

if(userInput == randomNumber) {
			$("#feedback").text("You guessed correct!");
			userJustWon = true;	
		} else if((Math.abs(userInput-randomNumber))<=2){
			$("#feedback").text("Burning hot!");	
		} else if((Math.abs(userInput-randomNumber))<=5){
			$("#feedback").text("Hot!");
		} else if ((Math.abs(userInput-randomNumber))<=10){
			$("#feedback").text("Warm");
		} else if ((Math.abs(userInput-randomNumber))<=15){
			$("#feedback").text("Luke Warm");
		} else if ((Math.abs(userInput-randomNumber))<=20){
			$("#feedback").text("Cold");
		} else if ((Math.abs(userInput-randomNumber))<=25){
			$("#feedback").text("Freezing Cold!");
		} else if((Math.abs(userInput-randomNumber))<=100){
			$("#feedback").text("Ice Ice Baby");			
	}

});	

/*Add a li to Guesses field*/
function displayGuess() {
  		numGuesses++;
		$('#pastGuesses').append("<li>" + userInput + "</li>");
}


});

/*Put comments here
Get rid of the SUBMIT button. Add "Enter" instructions into game.

Leave line 22
say when some presses ENTER trigger event, not when someone presses button.
Line 57 onKeyPress return userInput

emptyTextArea = function() {
  $('#text').val('');
  };


1.get the function to work by having the user press enter instead of submit
2. keep the function with the submit button, and clearly state that hte text value should be clear after submission
Submit in JS is really a page refresh.  

inItemText.onkeyup = function(event) {

	//Event.which (13) -> ENTER
	//only proceed if key pressed is ENTER key	
	if (event.which == 13) {
	var itemText = inItemText.value;
		} else { 
			return false;
			}


	*/