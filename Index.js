var Word = require('./Word');
var inquirer = require("inquirer");

var wordArray = [
    "plaintiff", "network", "network",
    "explosion", "distance", "social",
    "leader", "concede"];

var playedAlready = false;
var wordObject;
var randomSelectionFromWordArray;
var numberOfGuessesLeft;
var checkGuess;


var selectRandomWord = function () {
    return wordArray[Math.floor(Math.random() * 10)];

};

const guess = function () {
    if (numberOfGuesses > 0) {
        inquirer.prompt([
            {
                type: "input",
                message: 'Guess a letter:',
                name: "guess"
            }
        ]).then(function (answer) {
            checkGuess = wordObject.checkGuess(answer.guess);
            if (checkGuess.isCorrect === 'Incorrect!') {
                numberOfGuesses--;
            }
            console.log(checkGuess.isCorrect);
            wordObject.displayWord();
            if (checkGuess.guessingComplete) {
                console.log('You guessed it!');
                inquire();
            } else {
                console.log(`Guesses left: ${numberOfGuesses}`);
                guess();
            }
        }).catch(function (error) {
            console.log("Something is wrong: " + error);
        });
    } else {
        console.log('You ran out of guesses!');
        inquire();
    }
};

const playGame = function () {

    randomSelectionFromWordArray = selectRandomWord();
    wordObject = new Word(randomSelectionFromWordArray);
    console.log('Here is your randomly selected word:');
    wordObject.displayWord();
    numberOfGuesses = 10;
    guess();
};

const inquire = function () {
    inquirer.prompt([
        {
            type: "confirm",
            message: `Do you want to play ${playedAlready ? 'again?' : 'a round?'}`,
            name: "play"
        }
    ]).then(function (answer) {
        if (answer.play) {
            console.log("Let's play!");
            playedAlready = true;
            playGame();
        } else {
            console.log('See Ya!');
        }
    }).catch(function (error) {
        console.log("Something is wrong: " + error);
    });
};


inquire()