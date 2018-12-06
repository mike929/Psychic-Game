// Creates an array that lists out all of the options (letters to be guessed).
var alphabet;
alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

for (var i = 0; i < alphabet.length; i++){
    // start with this
}

console.log(alphabet);

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0,
    losses = 0,
    Guesses = 9;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("GameDirections");
var computerChoiceText = document.getElementById("computerChoices")
var UserGuess = document.getElementById("userguess");
var winsText = document.getElementById("Wins");
var lossesText = document.getElementById("Losses");
var GuessesText = document.getElementById("Guesses");
        var userGuess = event.key;

        // Randomly chooses a choice from the options array.

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

        // Determines which key was pressed.
        var computerGuess = alphabet[Math.floor(Math.random() * computerChoices.length)];

        //need to determine which letter was pressed and capture it

        // determines the outcome of the game (win/loss/tries), and increments the appropriate number

        if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s") || (userGuess === "t") || (computerGuess === "l") || (computerGuess === "j")) {

            // for (var tries = 0; tries < computerGuess; tries++) {

            if ((userGuess === computerGuess)) {
                win++; 
            }

                

                else {
                    losses++;
                }


                // Hide the directions
                // directionsText.textContent = "";

                // Display the user guesses and wins/losses/tries.
                userChoiceText.textContent = "You chose: " + userGuess;
                // Hide the computer choice
                // computerChoiceText.textContent = "The computer chose: " + computerGuess;
                UserGuess.textContent = "" + userguess;
                winsText.textContent = "wins: " + wins; 
                lossesText.textContent = "losses: " + losses; 
                GuessesText.textContent = "Guesses: " + Guesses; 
            }
};
