const choices = ["rock", "paper", "scissors"];

const playerChoiceText = document.getElementById("playerChoice");

const computerChoiceText = document.getElementById("computerChoice");

const resultText = document.getElementById("result");

const playerScoreText = document.getElementById("playerScore");

const computerScoreText = document.getElementById("computerScore");

const resetBtn = document.getElementById("resetBtn");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const randomIndex = Math.floor(Math.random() * 3);

  const computerChoice = choices[randomIndex];

  playerChoiceText.textContent = `You: ${playerChoice}`;

  computerChoiceText.textContent = `Computer: ${computerChoice}`;

  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a Draw!";

    return;
  }

  const playerWins =
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper");

  if (playerWins) {
    playerScore++;

    playerScoreText.textContent = playerScore;

    resultText.textContent = "You Win!";
  } else {
    computerScore++;

    computerScoreText.textContent = computerScore;

    resultText.textContent = "Computer Wins!";
  }
}

resetBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;

  playerScoreText.textContent = 0;
  computerScoreText.textContent = 0;

  playerChoiceText.textContent = "You: -";

  computerChoiceText.textContent = "Computer: -";

  resultText.textContent = "Choose a move!";
});
