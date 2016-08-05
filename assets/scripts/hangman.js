//  Use key events to listen for the letters that your players will type.
// When the user presses the key it records the keypress and then sets it to userguess


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

	var wins = 0;
	// This sets the computer guess equal to the random.
	var answer = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	// var guesses remaining
	var guessesRemaining = 5;

	// declare a working array copy of individual letters in answer
	var answerWord = answer.name;

	var answerArray = [];
	for (var i = 0; i < answerWord.length; i++) {
		answerArray.push(answerWord[i]);
	}

	// declare a displayed array of underscores the length of the answer
	var displayedAnswer = [];
	for (var i = 0; i < answerWord.length; i++) {
		displayedAnswer.push('_');
	}

	// empty array to display user guessed letters
	var guesses = [];

	/*
		write a function which compares keystroke (letter) against answer
		main game logic
	*/
	var checkAnswer = function (letter) {
		// check to see if guess is in answer-decrement guesses if guess not in answer
		var index = answerArray.indexOf(letter);
		if (index === -1 ) {
			guessesRemaining--;
		}

		for (var i = 0; i < answerArray.length; i++) {
			var index = answerArray.indexOf(letter);
			if (index !== -1) {
				displayedAnswer[index] = answerArray[index];
				answerArray[index] = "-";
			}
		}
	}

	var guessedLetters = function (letter) {
		for (var i = 0; i < guesses.length +1; i++) {
			var index = guesses.indexOf(letter);
			if (index == -1) {
				guesses.push(letter);

			}
		}
		// reset game
		if (guessesRemaining == 0) {
			guesses = [];
			guessesRemaining = 5;
		}

	

	// replace html with # of wins

	// replace html with word

	// replace html with guesses remaining
	// var guessesHTML = document.getElementById(guessesRemaining);

	// replace html with guessed letters

	// play sound and load image on win or loss and display anwser
	}
