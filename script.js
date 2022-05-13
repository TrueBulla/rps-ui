
//Function to select the computers choice randomly
computerPlays = () => {
    //Selects a number between 0 and 2
    let computerChoice = Math.floor(Math.random() * 3);
    //Returns a choice based on that number
    if (computerChoice === 2) {
        return "ROCK";
    } else if (computerChoice === 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}
//Function declared to compare player choice vs computer choice
function gameStart(playerSelection,computerSelection){
    //computerSection takes the returned value of computerPlays.
    computerSelection = computerPlays();
    //Player is asked for their choice, their answer is made uppercase to avoid issues with comparison.
    playerSelection = prompt("Rock, Paper, or Scissors?").toUpperCase();
    //Compare playerSelection choice to computerSelection
    if(playerSelection === computerSelection){
        return "Tie! Play Again!";
    }else if (playerSelection === "ROCK" && computerSelection === "PAPER" || playerSelection === "PAPER" && computerSelection === "SCISSORS" || playerSelection === "SCISSORS" && computerSelection === "ROCK"){
        return "Computer wins!"
    }else {
        return "Player wins!"
    }
}

game = () => {
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0; i<5; i++){
        let gameResults = gameStart();
        
        if(gameResults == "Computer wins!"){
            computerScore++;
        }else if(gameResults == "Player wins!"){
            playerScore++;
        }else{
             alert("Tie. No points given");
        }
    }
    console.log(`Game finished! Final score: Player ${playerScore} | Computer: ${computerScore}`)
}

//Calls the function and logs the output 
console.log(game());
