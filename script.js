// Global score variables
let humanScore = 0;
let computerScore = 0;

// Function to get a random computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to get the human player's choice
function getHumanChoice() {
  const validChoices = ["rock", "paper", "scissors"];
  let choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();

  while (!validChoices.includes(choice)) {
    choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
  }

  return choice;
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    alert(`It's a tie! You both chose ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    alert(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
  } else {
    computerScore++;
    alert(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
  }

  alert(`Score => You: ${humanScore}, Computer: ${computerScore}`);
}

// Example: Play 5 rounds
function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  console.log("Game over!");
  if (humanScore > computerScore) {
    alert("🎉 You won the game!");
  } else if (humanScore < computerScore) {
    alert("😞 The computer won the game.");
  } else {
    alert("It's a draw!");
  }
}

// Start the game
playGame();
