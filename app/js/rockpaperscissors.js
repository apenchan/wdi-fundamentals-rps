////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    //return /* Your Expression */; 
    if (move === null) {
        return getInput();
    } 
    else {
        return move;
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move === null) {
        return getInput(); 
    } else {
        return move;
    }/* Your Expression */
}

function getWinner(playerMove,computerMove) {
    var winner;
        while ("rock" > "scissors" && "scissors" > "paper" && "paper" > "rock");
    if (playerMove === computerMove){
        winner="tie";
    } else if (playerMove ==="scissors" && computerMove==="rock"){
        winner="computer";
    } else if (playerMove==="rock"&& computerMove==="paper"){
        winner="computer";
    } else if (playerMove==="paper"&& computerMove==="rock"){
        winner="player";
    } else if  (playerMove==="scissors"&& computerMove==="paper"){
        winner="player";
    } else if (playerMove==="rock"&& computerMove==="scissors"){
        winner="player";
    } else if (playerMove==="scissors"&& computerMove==="rock"){
        winner="computer";
    }
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}
console.log (getWinner);

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
    var playerMove = playerWins ();
    var computerMove = ComputerWins ();
    var winner = getWinner (playerMove, computerMove);
    if (playerWins === ComputerWins) {
        return ("tie! You're cutting it close!");
    } else if (winner === playerWins) {
        playerWins = +1;
        return ("Awesome, you won! Your score is" + playerMove + ". Competion is catching up with a score of" + computerMove);
    }
    else if (winner === computerWins) {
        computerMove = +1;
        return ("Oh no! It looks like you lost! Your competition has" + computerMove + "while you have" + playerMove);
        //computerMove = +1;    
    }
    if (playerWins === 5) {
        console.log ("Game over. You're the champion");
    } else {
        console.log ("You lost. It's cool, you might be better at other things...");
    }
  }
  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  /* YOUR CODE HERE */
  return [playerWins, computerWins];
}
console.log (playToFive);
}

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
 

