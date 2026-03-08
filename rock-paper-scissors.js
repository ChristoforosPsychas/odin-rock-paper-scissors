function getComputerChoice() {
  const number = Math.floor(Math.random() * 3);

  if (number === 0) return "rock";
  else if (number === 1) return "paper";
  else return "scissors";
}

const result = getComputerChoice();
console.log(result);

function getHumanChoice() {
  const choice = prompt("Choose rock, paper, or scissors");

  return choice;
}

const choice = getHumanChoice();
console.log(choice);
