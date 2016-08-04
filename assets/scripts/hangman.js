//  Use key events to listen for the letters that your players will type.

// When the user presses the key it records the keypress and then sets it to userguess
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// declare an array as list of words or an object of the word choices each 
	// being an object with name, sound and image properties. var computerChoices
	var computerChoices = [
		archer = {
			name: 'archer',
			image: '../assets/images/archer_head_transparent_290_401.png',
			win: '..assets/sounds/Sterling/thats-how-you-get-ants.wav',
			lose: '..assets/sounds/Sterling/lanadangerzone.wav'
		}, 
		lana = {
			name: 'lana',
			image: '../assets/images/lanakane.jpg',
			win: '../assets/sounds/Lana/strapinstrapon.wav',
			lose: '../assets/sounds/Lana/wordsFailedMe.wav'
		}, 
		malory = {
			name: 'malory',
			image: '../assets/images/malory_archer_by_friagram-d4ulg2o.png',
			win: '../assets/sounds/Malory/crackwhoreRed.wav',
			lose: '../assets/sounds//Malory/dumbStupid.wav'
		}
		];

	// This sets the computer guess equal to the random.
	var answer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	console.log(answer);

	// var guesses remaining
	var guessesRemaining = 5;
	console.log(guessesRemaining);

	// declare a working array copy of individual letters in answer
	var answerWord = answer.name;
	console.log(answerWord);

	var answerArray = [];
	for (var i = 0; i < answerWord.length; i++) {
		
		answerArray.push(answerWord[i]);
	}
	console.log(answerArray);

	// declare a displayed array of underscores the length of the answer
	var displayedAnswer = [];
	for (var i = 0; i < answerWord.length; i++) {
		displayedAnswer.push('_');
	}
	console.log(displayedAnswer);

	// write a function which compares keystroke (letter) against answer
	// main game logic
	var checkAnswer = function (letter) {
		for (var i = 0; i < answer.length; i++) {

			// iterate over answerArray and find all instances of letter
			// if letter is in answerArray, replace the underscore in 'displayedAnswer[]' at all occurances
			// with letter.  decrement number of guesses by one
			// if (letter == guessArra) {

			// }

			// else decrement number of guessesRemaining, and add letter to guessed letters array
		}
	}


// run game loop with user guess
checkAnswer(userGuess)

// replace html with # of wins

// replace html with word

// replace html with guesses remaining
var guesses = document.getElementById(guessesRemaining);

// replace html with guessed letters

// play sound and load image on win or loss and display anwser

// reset game

}