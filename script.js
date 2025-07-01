// Global score variables
let humanScore = 0;
let computerScore = 0;
const winningScore = 5;

// Create buttons and event listeners
const buttons = document.querySelector("#buttons");

  const rock = document.createElement("button");
  const paper = document.createElement("button");
  const scissors = document.createElement("button");

  rock.textContent = "ROCK";
  paper.textContent = "PAPER";
  scissors.textContent = "SCISSORS";

  rock.classList.add("rock");
  paper.classList.add("paper");
  scissors.classList.add("scissors");

  rock.addEventListener("click", () => playRound("rock"));
  paper.addEventListener("click", () => playRound("paper"));
  scissors.addEventListener("click", () => playRound("scissors"));

  buttons.appendChild(rock);
  buttons.appendChild(paper);
  buttons.appendChild(scissors);


// Function to get a random computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to play round
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let result = "";

  if (humanChoice === computerChoice) {
        result = `It's a tie! You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    result = `You win! ${capitalize(humanChoice)} beats ${computerChoice}`;
  } else {
    computerScore++;
    result = `You lose! ${capitalize(computerChoice)} beats ${humanChoice}`;
  }
  updateDisplay(result);
  checkWinner();
  } 

// Display Result and player's choice
  const display = document.querySelector("#display");
  function updateDisplay(resultText) {
      display.innerHTML = `
        <p id="resultText">${resultText}</p>
        <p id="score"><strong style="color: rgb(255, 0, 0);">Score:</strong> You: ${humanScore} | Computer: ${computerScore}</p>`;
  }
// Winner announce after scoring 5 points
 function checkWinner() {
  if (humanScore === winningScore || computerScore === winningScore) {
    const winnerText = humanScore === winningScore
    ? "You Win the game!" : "The computer wins the game";

    const winnerMsg = document.createElement("div");
    winnerMsg.classList.add("winner");
    winnerMsg.textContent = winnerText;
    display.appendChild(winnerMsg);

    disableButtons();
    showPlayAgainButton();
  }
 }

// Disable buttons after winner announcement
function disableButtons() {
  const allButtons = document.querySelectorAll("#buttons button");
  allButtons.forEach(btn => btn.disabled = true);
}

// Reload page and create play again button
const playAgainDiv = document.querySelector("#play-again");
function showPlayAgainButton () {
  const playAgainBtn = document.createElement("button");
  playAgainBtn.textContent = "Play Again";
  playAgainBtn.classList.add("playAgain");
  playAgainBtn.addEventListener("click", function() {
    location.reload();
  });
  playAgainDiv.appendChild(playAgainBtn);
}  


// Utility function to capitalize
    function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }




/* The Odin Project
    made by : mahipat makwana
    completed on : 01/07/2025 */