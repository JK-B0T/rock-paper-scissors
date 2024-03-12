let userScore = 0;
let computerScore = 0;
let currentRound = 0;
const NUMBER_OF_ROUNDS = 5;

function getComputerChoice() { 
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(e, computerChoice = getComputerChoice()) {
    const userChoice = e.target.textContent
    outputDiv.innerText = 
    `Round: ${currentRound+1}
    User Choice: ${userChoice}
    Computer Choice: ${computerChoice}`;
    switch (true) {
        case (userChoice == "Rock" && computerChoice == "Paper"):
        case (userChoice == "Paper" && computerChoice == "Scissors"):
        case (userChoice == "Scissors" && computerChoice == "Rock"):
            outputDiv.innerText += "\nComputer Wins!";
            computerScore++;
            break;
        case (userChoice == "Rock" && computerChoice == "Scissors"):
        case (userChoice == "Paper" && computerChoice == "Rock"):
        case (userChoice == "Scissors" && computerChoice == "Paper"):
            outputDiv.innerText += "\nUser Wins!";
            userScore++;
            break;
        default:
            outputDiv.innerText += "\nNo one Wins!";
    }
    currentRound++;
    outputDiv.innerText += `\nCurrent score ==> User: ${userScore} /  Computer: ${computerScore}`;
    if (currentRound >= 5) {
        endGame(userScore, computerScore);
        userScore = 0;
        computerScore = 0;
        currentRound = 0;
    }
}

function endGame(userScore, computerScore) {
    if (userScore > computerScore) {
        outputDiv.innerText += "\nThe Final Champion is: USER!!!";
    } else if (userScore < computerScore) {
        outputDiv.innerText += "\nThe Final Champion is: COMPUTER!!!";
    } else {
        outputDiv.innerText += "\nThe battle was close: it is a tie!";
    }
}

const outputDiv = document.querySelector("#gameResult");
const buttons = document.querySelector("#rpsOptions");
buttons.addEventListener("click", playRound, false);