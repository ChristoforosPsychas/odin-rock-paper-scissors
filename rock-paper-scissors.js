const ROUNDS = 5;

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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const humanCh = humanChoice.toLowerCase();

    if (humanCh === "rock" && computerChoice === "paper") {
      return "computer";
    } else if (humanCh === "scissors" && computerChoice === "paper") {
      return "human";
    } else if (humanCh === "paper" && computerChoice === "rock") {
      return "human";
    } else if (humanCh === "scissors" && computerChoice === "rock") {
      return "computer";
    } else if (humanCh === "paper" && computerChoice === "scissors") {
      return "computer";
    } else if (humanCh === "rock" && computerChoice === "scissors") {
      return "human";
    } else {
      return "tie";
    }
  }

  for (let i = 0; i < ROUNDS; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    const result = playRound(humanSelection, computerSelection);

    if (result === "human") {
      console.log("You win this round!");
      humanScore++;
    } else if (result === "computer") {
      console.log("Computer wins this round!");
      computerScore++;
    } else {
      console.log("This round is a tie!");
    }

    console.log(`You chose: ${humanSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("You won! Congrats!");
  } else if (computerScore > humanScore) {
    console.log("Computer won! Better luck next time!");
  } else {
    console.log("Game over! It's a tie!");
  }
}

playGame();
