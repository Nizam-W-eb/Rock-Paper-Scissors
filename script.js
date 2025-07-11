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

let humanScore = 0;
let computerScore = 0;


function game(e) {
    /// get the choice from the buttons
    let item = e.target;
    let human = item.getAttribute('id');
    human = human.toUpperCase()
    /// get computer choice 
    let computer = getComputerGuess();
    
    if (computer === 'PAPER' && human === 'ROCK'){
        computerScore = ++computerScore;
    }
    else if (computer === 'SCISSOR' && human === 'PAPER'){
        computerScore = ++computerScore;
    }
    else if (computer === 'ROCK' && human === 'SCISSOR'){
        computerScore = ++computerScore;
    }
    else {
        humanScore = ++humanScore;
    }
    let scoreHuman = document.querySelector('.human-score');
    let scoreComputer = document.querySelector('.computer-score');
    scoreHuman.textContent = humanScore;
    scoreComputer.textContent = computerScore;

    let winStatment = document.querySelector('.win-statement');
    if (humanScore === 5|| computerScore === 5){
        selector.remove()
       if (humanScore > computerScore){
         winStatment.textContent = 'YOU WON';
       }
       else {
         winStatment.textContent = 'I know that you would lose';
       }
    }

};



let selector = document.querySelector('.selector');
selector.addEventListener('click', game)




