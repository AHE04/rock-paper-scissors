let funcChoice
let input
let humanScore = 0
let computerScore = 0
let humanChoice
let computerChoice
let a
let b
let score


function getComputerChoice(){
   funcChoice = Math.floor(Math.random() * 3) 
   if (funcChoice == 0){
    return "rock"
   }
    else if(funcChoice == 1) {
        return "paper"
    }
        else{
            return "scissors"
        } 
}

function getHumanChoice(){
    input = prompt("what will you play?", "")
    if (input == "rock"){
        return "rock"
    }
    if (input == "paper"){
        return "paper"
    }
    if (input == "scissors"){
        return "scissors"
    }
    else {
        return "invalid choice, please choose rock, paper or scissors"
    }
    }

    function playRound(a , b ){

        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
    
    
    
    
        if ( humanChoice == computerChoice){
            console.log( "it is a draw!" )
        }
        else if (humanChoice == "rock" && computerChoice == "scissors"){
            humanScore = humanScore + 1
            console.log("human is winner!")
    
        }
        else if (humanChoice == "paper" && computerChoice == "rock"){
            humanScore = humanScore + 1
            console.log("human is winner!")
            
            
        }
        else if (humanChoice == "scissors" && computerChoice == "paper"){
            humanScore = humanScore + 1
            console.log("human is winner!")
        }
        else {
            computerScore = computerScore + 1
            console.log("computer is winner")
            
        }


    }

function playGame(){
    for(let i = 0 ; i < 5 ; i++){
        playRound()
        console.log("you played:" + humanChoice)
        console.log("computer played: " + computerChoice)
        console.log("human score:" + humanScore)
        console.log("computer score:" + computerScore)
        console.log("-------------------------")
    }
    if (computerScore > humanScore){
        console.log("computer won the game! " + computerScore + " to " + humanScore)
    }
    else if(computerScore == humanScore){
        console.log("the game is a draw!")
    }
    else{
        console.log("you won the game! " + humanScore + " to " + computerScore)
    }
}





score = playGame()
console.log(score)


