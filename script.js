
const rockEvent = document.querySelector('.rockEvent');
const paperEvent = document.querySelector('.paperEvent');
const scissorsEvent = document.querySelector('.scissorsEvent');
const rockArenaLeft = document.querySelector('.rockArenaLeft');
const paperArenaLeft = document.querySelector('.paperArenaLeft');
const scissorsArenaLeft = document.querySelector('.scissorsArenaLeft');
const rockArenaRight = document.querySelector('.rockArenaRight');
const paperArenaRight = document.querySelector('.paperArenaRight');
const scissorsArenaRight = document.querySelector('.scissorsArenaRight');

const choices = document.querySelectorAll('.arenaChoice');
const computerSelection = document.querySelectorAll('.computerSelection');
const playerSelection = document.querySelectorAll('.playerSelection');

const gameText = document.querySelector('.gameText');

const playerScoreboard = document.querySelector('.main-content__container--scoreboard-left');
const computerScoreboard = document.querySelector('.main-content__container--scoreboard-right');

let playerScore = 0;
let computerScore = 0;
let computerChose;
let playerChose;

//Listen for a click on the rock picture
rockEvent.addEventListener("click", rockEventListener);
//Listen for a click on the paper picture
paperEvent.addEventListener("click", paperEventListener);
//Listen for a click on the scissor picture
scissorsEvent.addEventListener("click", scissorsEventListener);

function rockEventListener(){
    arenaReset();
    rockArenaLeft.classList.add("active");
    compareSelection();
}
function paperEventListener(){
    arenaReset();
    paperArenaLeft.classList.add("active");
    compareSelection();
}
function scissorsEventListener(){
    arenaReset();
    scissorsArenaLeft.classList.add("active");
    compareSelection();
}

//Function declared to compare player choice vs computer choice
function compareSelection() {
    //If someone has 5 points, the game ends and no comparison is needed. 
    if(playerScore == 5 || computerScore == 5){
        return
    }else{
        computerPlays();
        // Determines computer choice based on nodelist index, all selections (rock, paper or scissors)
        // have the same index for the player and for the computer
        for (i = 0; i < 3; i++) {
            if (computerSelection[i].classList.contains('active')) {
                computerChose = i;
            }
        }
        //Determines player choice based on nodelist index
        for (j = 0; j < 3; j++) {
            if (playerSelection[j].classList.contains('active')) {
                playerChose = j;
            }
        }
        //Logic to determine who won the round
        if (computerChose == playerChose) {
            gameText.textContent = "Tie! Make another selection";
        }
        //
        else if (computerChose == 0 && playerChose == 1 || computerChose == 1 && playerChose == 2 || computerChose == 2 && playerChose == 0) {
            gameText.textContent = "Player wins this round!";
            playerScoreboard.textContent = playerScore += 1;
        }else{
            gameText.textContent = "Computer wins this round!"
            computerScoreboard.textContent = computerScore += 1;
        }
        if(playerScore == 5){
            gameText.textContent = "Player wins the game! Press the play button or refresh to play again!"
            endGame();
        }else if(computerScore == 5){
            gameText.textContent = "Computer wins the game! Press the play button or refresh to play again!"
            endGame();
        }
    }
}

//Function to select the computers choice randomly
computerPlays = () => {
    //Selects a number between 0 and 2
    let computerChoice = Math.floor(Math.random() * 3);
    //Returns a choice based on that number
    computerSelection[computerChoice].classList.add('active')
    return computerSelection[computerChoice].classList;
}

//Resets the arena so another selection can be made 
const arenaReset = () => {
    choices.forEach(choice => {
        choice.classList.remove("active")
    });
}

//Ends the game by resetting the arena and removing event listeners 
const endGame = () => {
    arenaReset();
    rockEvent.removeEventListener("click", rockEventListener);
    paperEvent.removeEventListener("click", paperEventListener);
    scissorsEvent.removeEventListener("click", scissorsEventListener);
}

