/*
Rock Paper Scissors - General inputs, outputs and end state.

A person and a computer play the game for 5 rounds.

Inputs:
-A computer randomly selects one of the 3 options, 
-The user inputs one of the 3 options to,

Outputs:
The inputs are compared, the resulting output could be one of three:
    -Inputs are equal: Score doesn't changes, a tie message is printed.
    -Computer input wins: Adds 1 to computer's score, a computer win message is printed.
    -User input wins: Adds 1 to user's score, a user win message is printed.

When the 5 rounds are finished, depending on the score, 3 final outputs are possible:
    -Scores are equal: Tie message is printed.
    -Computer score is higher: Computer final win message is printed.
    -User score is higher: User final win message is printed.

End state:
    A message pop ups asking the user if he wnat's to play again,
    if y it's written, scores are reset and another game is called,
    else, program ends.
*/

//getComputerChoice() ==> gets paper, rock or scissors randomly.


//getUserChoice() ==> gets paper, rock or scissors from user's input.


//playRound() ==> gets and compares players inputs, then outputs results.


//playGame() ==> calls playround 5 times and keeps the score, outputs the final winner.


//resetGame ==> ask the user if another game should be played, resets game values and calls playGame() if true.