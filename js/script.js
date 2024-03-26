let playerScore = 0;
let computerScore = 0;

const buttonScissors = document.getElementById("button-scissors");
const buttonPaper = document.getElementById("button-paper");
const buttonRock = document.getElementById("button-rock");

function buttonClicked(argButtonName) {
	clearMessages();
	console.log(argButtonName + " został kliknięty");

	function getMoveName(argMoveId) {
		console.log("wywołano funkcję getMoveName z argumentem: " + argMoveId);
		if (argMoveId == 1) {
			return "kamień";
		} else if (argMoveId == 2) {
			return "papier";
		} else if (argMoveId == 3) {
			return "nożyce";
		} else {
			printMessage(
				"Nie znam ruchu o id " +
					argMoveId +
					'. Zakładam, że chodziło o "kamień".'
			);
			return "kamień";
		}
	}

	function updateScore(result) {
		if (result === "player") {
			playerScore++;
		} else if (result === "computer") {
			computerScore++;
		}
	}

	function displayResult(argPlayerMove, argComputerMove) {
		console.log(
			"wywołano funkcję displayResults z argumentami: " +
				argPlayerMove +
				", " +
				argComputerMove
		);
		if (
			(argPlayerMove == "papier" && argComputerMove == "kamień") ||
			(argPlayerMove == "kamień" && argComputerMove == "nożyce") ||
			(argPlayerMove == "nożyce" && argComputerMove == "papier")
		) {
			printMessage("Wygrywasz!");
			updateScore("player");
		} else if (argPlayerMove == argComputerMove) {
			printMessage("Remis!");
		} else {
			printMessage("Przegrywasz :(");
			updateScore("computer");
		}
		printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
		displayScore();
	}

	function displayScore() {
		document.getElementById("result").innerText =
			playerScore + " - " + computerScore;
	}

	const playerMove = argButtonName;
	console.log("ruch gracza to: " + playerMove);
	const randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log("wylosowana liczba to: " + randomNumber);
	const computerMove = getMoveName(randomNumber);
	console.log("ruch komputera to: " + computerMove);
	displayResult(playerMove, computerMove);
}

buttonRock.addEventListener("click", function () {
	buttonClicked("kamień");
});
buttonPaper.addEventListener("click", function () {
	buttonClicked("papier");
});
buttonScissors.addEventListener("click", function () {
	buttonClicked("nożyce");
});
