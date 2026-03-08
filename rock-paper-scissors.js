let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const number = Math.floor(Math.random() * 3);

  if (number === 0) return "rock";
  else if (number === 1) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  const choice = prompt("Choose rock, paper, or scissors");

  return choice;
}

function playRound(humanChoice, computerChoice) {
  const humanCh = humanChoice.toLowerCase();

  if (humanCh === "rock" && computerChoice === "paper") {
    computerScore++;
    return console.log("Computer wins! Paper beats Rock!");
  } else if (humanCh === "scissors" && computerChoice === "paper") {
    humanScore++;
    return console.log("You win! Scissors beats Paper!");
  } else if (humanCh === "paper" && computerChoice === "rock") {
    humanScore++;
    return console.log("You win! Paper beats Rock!");
  } else if (humanCh === "scissors" && computerChoice === "rock") {
    computerScore++;
    return console.log("Computer wins! Rock beats Scissors!");
  } else if (humanCh === "paper" && computerChoice === "scissors") {
    computerScore++;
    return console.log("Computer wins! Scissors beats Paper!");
  } else if (humanCh === "rock" && computerChoice === "scissors") {
    humanScore++;
    return console.log("You win! Rock beats Scissors!");
  } else {
    return console.log("It's a tie!");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(`You chose: ${humanSelection}`);
console.log(`Computer chose: ${computerSelection}`);

console.log(`Your score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);
