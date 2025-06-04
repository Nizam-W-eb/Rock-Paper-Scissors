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
let computerGuess = getComputerGuess();
let humanGuess = getHumanGuess()
console.log(computerGuess)
console.log(humanGuess)
let humanScore = 0;
let computerScore = 0;

function gameRound(){
    if (computerGuess === humanGuess){
        console.log("its a DRAW!");
    }
    else if(computerGuess === "ROCK" && humanGuess === "SCISSOR"){
        console.log("YOU lose " + computerGuess + " beats the " + humanGuess);
    }
    else if (computerGuess === "PAPER" && humanGuess === "ROCK"){
        console.log("YOU lose " + computerGuess + " beats the " + humanGuess);
    }
    else if (computerGuess === "SCISSOR" && humanGuess == "PAPER"){
        console.log("YOU lose " + computerGuess + " beats the " + humanGuess);
    }
    else {
        console.log("YOU win " + computerGuess + " beats the "+ humanGuess);
    }
}
function game(){

}


