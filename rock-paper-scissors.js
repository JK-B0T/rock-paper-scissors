/*Returns paper, rock or scissors randomly to simulate another player.*/
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

/*Returns paper, rock or scissors from user's input.*/
function getUserChoice() { 
    let isValid = false;
    let userInput = "";
    while (!isValid) {
        userInput = prompt("Select your choice by writting Rock, Paper or Scissors");
        userInput = userInput.substring(0, 1).toUpperCase() + userInput.substring(1).toLowerCase();
        if (userInput == "Rock" || userInput == "Paper" || userInput == "Scissors") {
            isValid = true;
        } else {
            alert("ERROR-1: Invalid choice input, rewrite your choice");
        }
    }
    return userInput;
}

/*Gets, prints and compares both players input, then outputs the winner based on rock, paper and scissors rules.
An iteration of this function can be considered as 1 round of the game*/
function playRound(userChoice, computerChoice) {
    console.log("User Choice: " + userChoice + " / Computer Choice: " + computerChoice);
    switch (true) {
        case (userChoice == "Rock" && computerChoice == "Paper"):
        case (userChoice == "Paper" && computerChoice == "Scissors"):
        case (userChoice == "Scissors" && computerChoice == "Rock"):
            return "Computer";
        case (userChoice == "Rock" && computerChoice == "Scissors"):
        case (userChoice == "Paper" && computerChoice == "Rock"):
        case (userChoice == "Scissors" && computerChoice == "Paper"):
            return "User";
        default:
            return "Tie";
    }
}

/*Sets, prints and resets score, calls playRound 5 times and keeps the score to call endGame() with it.
Used to play a full round of 5 rounds*/
function playGame() {
    const NUMBER_OF_ROUNDS = 5;
    let userScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= NUMBER_OF_ROUNDS; i++) {
        console.log(`-----ROUND ${i}!-----`)
        let roundResult = playRound(getUserChoice(), getComputerChoice());
        if (roundResult == "Computer") {
            computerScore++;
            console.log("Computer Wins!");
        } else if (roundResult == "User") {
            userScore++;
            console.log("User Wins!");
        } else {
            console.log("No one Wins!");
        }
        console.log(`Current score ==> User: ${userScore} /  Computer: ${computerScore}`)
    }
    endGame(userScore, computerScore);
}

/*Receives scores and outputs the final winner, then ask the user if another game should be played.*/
function endGame(userScore, computerScore) {
    if (userScore > computerScore) {
        console.log("The Final Champion is: USER!!!")
    } else if (userScore < computerScore) {
        console.log("The Final Champion is: COMPUTER!!!")
    } else {
        console.log("The battle was close: it is a tie!")
    }
    
    if (confirm("¿Do you want to play another game?")) {
        console.log("-----NEW GAME BEGINS!-----");
        playGame();
    } else {
        console.log("Well played and see you next time!");
    }
}

playGame();