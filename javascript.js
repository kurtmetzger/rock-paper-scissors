function getComputerChoice(){
    let choice = "rock";
    let rand = Math.floor(Math.random() * 3);
    if (rand == 0){
        choice = "rock"
    } else if (rand == 1){
        choice = "paper"
    } else {
        choice = "scissors"
    }       
    return choice;
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let result = "No result given";
    if (playerSelection == "rock"){
        if (computerSelection == "rock"){
            result = "Tie! Rock ties with rock."
        } else if (computerSelection == "paper"){
            result = "You lose! Rock loses to paper"
        } else{
            result = "You win! Rock beats scissors"
        }
    } else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            result = "You win! Paper beats rock."
        } else if (computerSelection == "paper"){
            result = "Tie! Paper ties with paper"
        } else{
            result = "You lose! Paper loses to scissors"
        }
    //playerSelection is paper
    } else{
        if (computerSelection == "rock"){
            result = "You lose! Scissors loses to rock"
        } else if (computerSelection == "paper"){
            result = "You win! Scissors beats paper"
        } else{
            result = "Tie! Scissors ties with scissors"
        }
    }
    return result;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


