// Creates an array that lists out all of the options (letters to be guessed).
var computerChoices = ["r", "p", "s", "t", "l", "j"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var Guesses = 9;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("GameDirections");
var userChoiceText = document.getElementById("GuessesLeft");
var computerChoiceText = document.getElementById("computerchoice");
var winsText = document.getElementById("Wins");
var lossesText = document.getElementById("Losses");
var GuessesText = document.getElementById("Guesses");

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // determines the outcome of the game (win/loss/tries), and increments the appropriate number
    // var letterRemaining = computerGuess.length;


    // while (Guesses >= 0) {

        if ((computerGuess === "r") || (computerGuess === "p") || (computerGuess === "s") || (computerGuess === "t") || (computerGuess === "l") || (computerGuess === "j")) {

        // for (var tries = 0; tries < computerGuess; tries++) {

            if ((userGuess===computerGuess)) {
            wins++;
            
            // alert("Wins: " + wins);

        }       if (Guesses === 0) {
                losses++;
            
        }
            
    // }

        // break;

console.log(computerGuess)
        // Hide the directions
        // directionsText.textContent = "";

        // Display the user guesses and wins/losses/tries.
        userChoiceText.textContent = "Your Guesses so far: " + userGuess;
        // Hide the computer choice
        // computerChoiceText.textContent = "The computer chose: " + computerGuess;
        // computerChoiceText.textContent = "" + computerGuess;
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        GuessesText.textContent = "GuessesLeft: " + Guesses--;
        // GuessesText.textContent = "GuessesLeft: " + Guesses --;
        // userChoiceText.textContent = "Your Guesses so Far: "
    }
    
};
