console.log('HI')

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log();
    return(choice);
}

function checkWinner(playerSelection, computerSelection){
        if (playerSelection == computerSelection){
            return "tie"
        }
        else if (
            (playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "paper") ||
            (playerSelection == "paper" & computerSelection == "rock")
        ){
            return "Player";
        }
        else {
            return "Computer";
        }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection)
    if(result == "tie"){
        return "it's a Tie!"
    }
    else if (result == "player"){
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }

}

function game()