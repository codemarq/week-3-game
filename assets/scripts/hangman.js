// declare an array as list of words or an object of the word choices each 
// being an object with name, sound and image properties. var computerChoices
var computerChoices = [
	archer = {
		name: 'archer',
		image: '../assets/images/Sterling-Archer-428x580.jpg',
		win: '../assets/sounds/Sterling/thats-how-you-get-ants.wav',
		lose: '../assets/sounds/Sterling/readXMen.wav'
	}, 
	lana = {
		name: 'lana',
		image: '../assets/images/lanakane.jpg',
		win: '../assets/sounds/Lana/nope.wav',
		lose: '../assets/sounds/Lana/wordsFailedMe.wav'
	}, 
	malory = {
		name: 'malory',
		image: '../assets/images/Malory.jpg',
		win: '../assets/sounds/Malory/crackwhoreRed.wav',
		lose: '../assets/sounds/Malory/dumbStupid.wav'
	},
	duchess = {
		name: 'duchess',
		image: '../assets/images/archer_head_transparent_290_401.png',
		win: '../assets/sounds/Sterling/analyzeData.wav',
		lose: '../assets/sounds/Sterling/hogsOfWar.wav'
	},
	danger = {
		name: 'dangerzone',
		image: '../assets/images/danger.jpg',
		win: '../assets/sounds/Sterling/dangerZone.wav',
		lose: '../assets/sounds/Sterling/lanadangerzone.wav'
	},
	phrasing = {
		name: 'phrasing',
		image: '../assets/images/phrasing.jpg',
		win: '../assets/sounds/Sterling/hey-phrasing.wav',
		lose: '../assets/sounds/Sterling/so-were-just-done-with-phrasing.wav'
	},
	poovey = {
		name: 'poovey',
		image: '../assets/images/pam-poovey.png',
		win: '../assets/sounds/PamPoovey/bearballs.wav',
		lose: '../assets/sounds/PamPoovey/internets.wav'
	},
	krieger = {
		name: 'krieger',
		image: '../assets/images/krieger.jpg',
		win: '../assets/sounds/Krieger/totallyGoingTo.wav',
		lose: '../assets/sounds/Krieger/letsPlayGod.wav'
	},
	cheryl = {
		name: 'cheryl',
		image: '../assets/images/cheryl.jpg',
		win: '../assets/sounds/CherylCarol/surrounded-by-idiots.wav',
		lose: '../assets/sounds/CherylCarol/pkPowers.wav'
	},
	carol = {
		name: 'carol',
		image: '../assets/images/carol.jpg',
		win: '../assets/sounds/CherylCarol/nameaplace.wav',
		lose: '../assets/sounds/CherylCarol/needhelpNoShit.wav'
	},
	cyril = {
		name: 'cyril',
		image: '../assets/images/cyril.jpg',
		win: '../assets/sounds/CyrilFiggis/hard2explain.wav',
		lose: '../assets/sounds/CyrilFiggis/betterInHead.wav'
	},
	supervisor = {
		name: 'supervisor',
		image: '../assets/images/supervisor.jpg',
		win: '../assets/sounds/CherylCarol/not_my_supervisor.wav',
		lose: '../assets/sounds/CherylCarol/not_my_supervisor.wav'
	},
	zima = {
		name: 'zima',
		image: '../assets/images/zima.jpg',
		win: '../assets/sounds/Sterling/zima.wav',
		lose: '../assets/sounds/Sterling/missZima.wav'
	}
];


// set game state, true = running
var gameState = true;

// initial score
var wins = 0;
var losses = 0;

// This sets the computer guess equal to the random.
var answer = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// var guesses remaining
var guessesRemaining = 5;

// empty array to display user guessed letters
var guesses = [];

// declare a working array copy of individual letters in answer
var answerWord = answer.name;
var answerArray = [];
var pushAnswer = function() {
	for (var i = 0; i < answerWord.length; i++) {
		answerArray.push(answerWord[i]);
	}
}
pushAnswer();
// declare a displayed array of underscores the length of the answer
var displayedAnswer = [];
var pushArray = function(array, char) {
	for (var i = 0; i < answerWord.length; i++) {
	array.push(char);
	}	
}
pushArray(displayedAnswer, '_')
// play sound and load image on win or loss and display anwser
var playAudio = function (sound) {
	var audio = new Audio (sound);
	audio.play();
}

/*
	write a function which compares keystroke (letter) against answer
	main game logic
*/
var checkAnswer = function (letter) {
	// check to see if guess is in answer-decrement guesses if guess not in answer
	var index = answerArray.indexOf(letter);

	if (index == -1 ) {
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
}

// reset global variables to initial game state
var resetGame = function () {	
	guesses = [];
	guessesRemaining = 5;
	answer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	answerWord=answer.name;
	gameState= false;
	answerArray = [];
	pushAnswer();
	displayedAnswer= [];
	pushArray(displayedAnswer, '_');

}

// Game Over function
var gameOver = function() {
	//  lose case
	if (guessesRemaining == 0){
		playAudio(answer.lose);
		document.getElementById('thumbnail').src=answer.image;
		losses ++;
		// resetGame();
		gameState=false;
	}
	// win case
	else if (guessesRemaining >= 0 && (displayedAnswer.indexOf('_') == -1)) {
		playAudio(answer.win);
		document.getElementById('thumbnail').src=answer.image;
		wins ++;
		// resetGame();
		gameState=false;

	}
}

// game run function
var game = function (key) {
	if (gameState) {
		checkAnswer(key);
		guessedLetters(key);
		gameOver();
	}
	else {
		resetGame();
		gameState = true;
		checkAnswer(key);
		guessedLetters(key);
		gameOver();
	}
}
	
