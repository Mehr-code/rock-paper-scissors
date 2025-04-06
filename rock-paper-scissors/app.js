const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");

const choices = ["rock", "paper", "scissors"];

let userChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  computerChoice = choices[randomNumber];
  computerChoiceDisplay.innerHTML = computerChoice;

  getResult();
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "it's a draw!";
  } else {
    if (computerChoice === "rock") {
      if (userChoice === "scissors") {
        result = "you lose!";
      } else {
        result = "you win!";
      }
    }
    if (computerChoice === "paper") {
      if (userChoice === "scissors") {
        result = "you win!";
      } else {
        result = "you lose!";
      }
    }
    if (computerChoice === "scissors") {
      if (userChoice === "rock") {
        result = "you win!";
      } else {
        result = "you lose!";
      }
    }
  }
  resultDisplay.innerHTML = result;
}
