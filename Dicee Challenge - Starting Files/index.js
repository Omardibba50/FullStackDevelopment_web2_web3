// index.js

// Function to generate a random number between 1 and 6
function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

// Get the dice image elements from the DOM
var img1Element = document.querySelector(".img1");
var img2Element = document.querySelector(".img2");

// Generate random numbers for Player 1 and Player 2
var randomNumber1 = generateRandomNumber();
var randomNumber2 = generateRandomNumber();

// Set the source attributes of the dice images based on the random numbers
img1Element.src = "images/dice" + randomNumber1 + ".png";
img2Element.src = "images/dice" + randomNumber2 + ".png";


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "player 2 wins";

}

else {
    document.querySelector("h1").innerHtML = "EQUAL,TRY AGAIN"
}

// Display the values in the console for verification (optional)

