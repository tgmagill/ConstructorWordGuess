var Letter = function (letter) {
    this.letter = letter;
    this.guessedYet = false;
    this.toString = function () {
        if (this.guessedYet) {
            return ` ${this.letter} `;
        } else {
            return ' _ ';
        }
    };


    this.checkGuess = function (guess) {
        let guessedYet = this.guessedYet;
        if (guess.toLowerCase() === this.letter.toLowerCase()) {
            this.guessedYet = true;
            return { correct: true, guessedYet: guessedYet };
        } else {
            return { correct: false, guessedYet: guessedYet };
        }
    };
};

module.exports = Letter