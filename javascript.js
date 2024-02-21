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
    let result = null;
    if (playerSelection == "rock"){
        if (computerSelection == "rock"){
            console.log("Tie! Rock ties with rock.")
            result = 2;
        } else if (computerSelection == "paper"){
            console.log("You lose! Rock loses to paper")
            result = 0;
        } else{
            console.log("You win! Rock beats scissors")
            result = 1;
        }
    } else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            console.log("You win! Paper beats rock.")
            result = 1;
        } else if (computerSelection == "paper"){
            console.log("Tie! Paper ties with paper")
            result = 2;
        } else{
            console.log("You lose! Paper loses to scissors")
            result = 0;
        }
    //playerSelection is paper
    } else{
        if (computerSelection == "rock"){
            console.log("You lose! Scissors loses to rock")
            result = 0;
        } else if (computerSelection == "paper"){
            console.log("You win! Scissors beats paper")
            result = 1;
        } else{
            console.log("Tie! Scissors ties with scissors")
            result = 2;
        }
    }
    return result;
}

function playGame(){
    let wins = 0;
    let losses = 0;
    console.log("Lets play a game of rock paper scissors. Best out of 5 wins!");
    for (let i = 0; i < 5; i++){
        let playerChoice = prompt("Rock paper scissors... SHOOT!");
        let result = playRound(playerChoice, getComputerChoice())
        if (result == 0){
            losses++;
        } else if (result == 1){
            wins++;
        } else{
            //tie so do nothing
        }
    }
    if (wins > losses){
        console.log(wins + " total wins and " +losses+ " total losses. You win!")
    } else if (wins < losses){
        console.log(wins + " total wins and " +losses+ " total losses. You lose!")
    } else {
        console.log(wins + " total wins and " +losses+ " total losses. Tie!")
    }
}

playGame();
