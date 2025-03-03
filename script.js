const container = document.createElement("div");
const heading = document.createElement("h1")
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
const container2 = document.createElement("div");
const paragraph = document.createElement("p");
const paragraph1 = document.createElement("p");
const bigContainer = document.createElement("div");

heading.textContent = "Wanna play a Rock-Paper-Scissors game with a bot, click the buttons below";
button1.textContent = "Rock";
button2.textContent = "Paper";
button3.textContent = "Scissors";
paragraph1.textContent = "Whoever scores 5 points first wins the game"

container.append(button1, button2, button3);
container2.appendChild(paragraph);
bigContainer.append(heading, paragraph1, container, container2);
document.body.append(bigContainer)

document.body.style.cssText = "display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; margin: 0px";
bigContainer.style.cssText = `background-color: #ABC8A2; display: flex; flex-direction: column; align-items: center; height: 50vh; width: 60vw; border-radius: 50px;`
container.style.cssText = "display: flex; justify-content: center; align-items: center; gap: 20px; flex-grow: 1"
button1.style.cssText = "background-color: #4B421B; color: white; font-size: 30px; padding: 30px; border-radius: 50px"
button2.style.cssText = "background-color: #4B421B; color: white; font-size: 30px; padding: 30px; border-radius: 50px"
button3.style.cssText = "background-color: #4B421B; color: white; font-size: 30px; padding: 30px; border-radius: 50px"
paragraph.style.cssText = "background-color: #F0E193; foont-weight: bold; font-size: 30px"
paragraph1.style.cssText = "font-weight: bold"


function getComputerChoice(min, max){
    let randomNum = (Math.floor(Math.random() * (max-min + 1)) + min);
    if (randomNum === 0) {
        return 'rock';
    } else if (randomNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection){
    let computerSelection = getComputerChoice(0, 2);
    if (humanScore < 5 && computerScore < 5){
        if ((computerSelection === 'rock') && (humanSelection === 'scissors')) {
            console.log('You lost');
            computerScore += 1;
        }else if ((computerSelection === 'scissors') && (humanSelection === 'paper')) {
            computerScore += 1;
            paragraph.textContent = `You lost!\n You chose ${humanSelection}, Bot chose ${computerSelection}\n Your score: ${humanScore} Bot score: ${computerScore}`;
        }else if ((computerSelection === 'paper') && (humanSelection === 'rock')) {
            computerScore += 1;
            paragraph.textContent = `You lost!\n You chose ${humanSelection}, Bot chose ${computerSelection}\n Your score: ${humanScore} Bot score: ${computerScore}`;
        }else if (computerSelection === humanSelection) {
            paragraph.textContent = `It's a tie!\n You chose ${humanSelection}, Bot chose ${computerSelection}\n Your score: ${humanScore} Bot score: ${computerScore}`;
        }else {
            humanScore += 1;
            paragraph.textContent = `You won!\nYou chose ${humanSelection}, Bot chose ${computerSelection}\nYour score: ${humanScore} Bot score: ${computerScore}`;
        }
    
    }else if (humanScore === 5 || computerScore === 5){
            paragraph.textContent = `Game Over!! \nYour score: ${humanScore} Bot score: ${computerScore}`;
            if (humanScore > computerScore){
                alert("Game Over!!! \nYou got to point 5 first so you won the game\nCongrats!");
            }else {
                alert("Game Over!!! \nBot got to point 5 first so you lost the game\nBetter luck next time");
            }
            alert("Refresh this tab if you want to play again");
        }
}
    
button1.addEventListener("click", () => {playRound("rock")});
button2.addEventListener("click", () => {playRound("paper")});
button3.addEventListener("click", () => {playRound("scissors")});

