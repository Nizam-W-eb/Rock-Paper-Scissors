function getComputerGuess(){
   let random = Math.floor(Math.random()*3)+1;
   
   let computerGuess;
   if (random === 1) {
    computerGuess = "ROCK";
    
    
   }
   else if (random === 2){
    computerGuess = "PAPER";
    
   }
   else if(random === 3){
    computerGuess = "SCISSOR";
    
   }
   return computerGuess
}

function getHumanGuess(){
    let Guess = prompt("Select Rock,Paper or Scissor");
    let humanGuess = Guess.toUpperCase()
    
    return humanGuess
       
}



let humanScore = 0;
let computerScore = 0;

function gameRound(){
    let computerGuess = getComputerGuess();
    let humanGuess = getHumanGuess();
    if (computerGuess === humanGuess){
        console.log("its a DRAW!");
    }
    else if(computerGuess === "ROCK" && humanGuess === "SCISSOR"){
        console.log("YOU lose " + computerGuess + " beats the " + humanGuess);
        computerScore = ++computerScore
    }
    else if (computerGuess === "PAPER" && humanGuess === "ROCK"){
        console.log("YOU lose " + computerGuess + " beats the " + humanGuess);
        computerScore = ++computerScore
    }
    else if (computerGuess === "SCISSOR" && humanGuess == "PAPER"){
        console.log("YOU lose " + computerGuess + " beats the " + humanGuess);
        computerScore = ++computerScore
    }
    else {
        console.log("YOU win " + humanGuess + " beats the "+ computerGuess);
        humanScore = ++humanScore
       
    }
}

function playGame(){
    for (let i = 0 ; i<= 4 ; i++){
        gameRound();
    }
    if (humanScore > computerScore){
        alert("YOU WIN AGAINST COMPUTER WITH SOCRE OF " + humanScore + " to " + computerScore);
    }
    else if (humanScore < computerScore){
        alert("YOU LOSE AGAINST COMPUTER WITH SCORE OF  " + humanScore + " to "+ computerScore)
    }
    else{
        alert("DRAW")
    }

}

