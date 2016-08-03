//   ## Option Two: Hangman Game (Moderate - Recommended)

 // 	2. Choose a theme for your game!  Archer

// 		3. Use key events to listen for the letters that your players will type.

// When the user presses the key it records the keypress and then sets it to userguess
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// declare an array as list of words or an object of the word choices each 
	// being an object with name, sound and image properties. var computerChoices
	var computerChoices = ['ancher', 'lana', 'malory'];

	// This sets the computer guess equal to the random.
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];





}



// var hangman = {
// 	word = [],
// 	numGuesses = 5,
	

// 	archer = {
// 		name: "archer",
// 		win: "",
// 		lose: "",
// 		image: ""
// 	},
// 	malory = {
// 		name: "malory"
// 		win: ,
// 		lose: ,
// 		image: 
// 	}


// }
