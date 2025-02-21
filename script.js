

let humanScore = 0;
let computerScore = 0;


function getComputerChoice(min, max){
    let randomNum = (Math.floor(Math.random() * (max-min + 1)) + min);
    console.log(randomNum);
    if (randomNum === 0) {
        return 'rock';
    } else if (randomNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}



function getHumanChoice(){
    return prompt('To play the game, enter rock or paper or scissors').toLowerCase();
}
  


function playRound(){
    for (r = 1; r <= 5; ++r) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(0, 2);
        if ((computerSelection === 'rock') && (humanSelection === 'scissors')) {
            console.log('You lost');
            ++computerScore;
        }else if ((computerSelection === 'scissors') && (humanSelection === 'paper')) {
            console.log('You lost');
            ++computerScore;
        }else if ((computerSelection === 'paper') && (humanSelection === 'rock')) {
            console.log('You lost');
            ++computerScore;
        }else if (computerSelection === humanSelection) {
            console.log('Its a tie');
        }else {
            console.log('You won');
            ++humanScore;
        }   
    }
}
    

    
playRound();


if ((computerScore > humanScore)) {
    console.log(`Game Over, Computer wins. Scores---> Computer ${computerScore} : You ${humanScore}`);
} else if ((computerScore === humanScore)) {
    console.log(`Game Over, It's a draw. Scores---> Computer ${computerScore} : You ${humanScore}`);
} else {
    console.log(`Game Over, Hurray!!!, You won. Scores---> Computer ${computerScore} : You ${humanScore}`);
    }
        

