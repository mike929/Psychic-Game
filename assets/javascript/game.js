// Creates an array that lists out all of the options (letters to be guessed).
// var computerChoices = ["r", "p", "s", "t", "l", "j"];
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var Guesses = 9;
var allUserGuess = "";

// reset game with either win or 0 guesses
var resetGuesses = function () {
    Guesses = 9;
    allUserGuess = ""; 
    document.querySelector("#Guesses").innerHTML = '';
    computerGuess=computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);
}   

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("GameDirections");
var userChoiceText = document.getElementById("GuessesLeft");
var computerChoiceText = document.getElementById("computerchoice");
var winsText = document.getElementById("Wins");
var lossesText = document.getElementById("Losses");
var GuessesText = document.getElementById("Guesses");

    // Randomly chooses a choice from the options array.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("Computer Guess " + computerGuess);

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    // var yourGuess = userGuess;
// console.log(userGuess);



    // determines the outcome of the game (win/loss/tries), and increments the appropriate number


    // while (Guesses >= 0) {

        // if ((computerGuess === "r") || (computerGuess === "p") || (computerGuess === "s") || (computerGuess === "t") || (computerGuess === "l") || (computerGuess === "j")) {

        // for (var tries = 0; tries < computerGuess; tries++) {

            if ((userGuess===computerGuess)) {
            wins++;
            resetGuesses(); 
            // alert("Wins: " + wins);

        }       if (Guesses == 0) {
                losses++;
                resetGuesses();
        }
        // console.log(computerGuess);

        allUserGuess = allUserGuess + " " + userGuess;

        

        userChoiceText.textContent = "Your Guesses so far:  " + allUserGuess;
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        GuessesText.textContent = "GuessesLeft: " + Guesses--;
        // document.querySelector("#GuessesLeft").innerHTML + userGuess;
    };
// console.log(Guesses);
    
// };
