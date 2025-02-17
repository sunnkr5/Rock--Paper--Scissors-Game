//function to get computer choice
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
const computerChoice = options[Math.floor(Math.random() * options.length)];
return computerChoice;
}

//function to get human choice
function getHumanChoice() {
    const humanChoice = prompt("Choose between rock, paper, or scissors:").toLowerCase();
//error handling without using loop
    if (["rock", "paper", "scissors"].includes(humanChoice)) {
        return humanChoice;
    } else {
        alert("Invalid choice. Please choose rock, paper, or scissors.");
        return getHumanChoice(); 
    }
}

//players score
let humanScore = 0;
let computerScore = 0;




    //logic to play a single round
function playRound(humanChoice, computerChoice) {
    console.log("Your choice:", humanChoice); // For debugging
    console.log("Computer choice:", computerChoice); // For debugging
if (humanChoice === computerChoice) {
    console.log("It's a Tie");
} else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You Won! Rock beats Scissors");
    humanScore++;
} else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You Won! Scissors beats Paper");
    humanScore++;
} else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You won! Paper beats Rock");
    humanScore++;
} else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("Computer Won! Rock beats Scissors");
    computerScore++;
} else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("Computer Won! Scissors beats Paper");
    computerScore++;
} else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("Computer Won! Paper beats Rock");
    computerScore++;
}
}


//playing game for 5 times without using loop
function playGame() {
    console.log("Welcome to Rock Paper Scissors Game!");
    console.log("------------------------------------");

const humanSelection1 = getHumanChoice();
const computerSelection1 = getComputerChoice();
playRound(humanSelection1, computerSelection1);
console.log(`1st Round Score - You: ${humanScore}, Computer: ${computerScore}`);
console.log("----------------------------------------------------");

const humanSelection2 = getHumanChoice();
const computerSelection2 = getComputerChoice();
playRound(humanSelection2, computerSelection2);
console.log(`2nd Round Score - You: ${humanScore}, Computer: ${computerScore}`);
console.log("----------------------------------------------------");

const humanSelection3 = getHumanChoice();
const computerSelection3 = getComputerChoice();
playRound(humanSelection3, computerSelection3);
console.log(`3rd Round Score - You: ${humanScore}, Computer: ${computerScore}`);
console.log("----------------------------------------------------");

const humanSelection4 = getHumanChoice();
const computerSelection4 = getComputerChoice();
playRound(humanSelection4, computerSelection4);
console.log(`4th Round Score - You: ${humanScore}, Computer: ${computerScore}`);
console.log("----------------------------------------------------");

const humanSelection5 = getHumanChoice();
const computerSelection5 = getComputerChoice();
playRound(humanSelection5, computerSelection5);
console.log(`5th Round Score - You: ${humanScore}, Computer: ${computerScore}`);
console.log("----------------------------------------------------");


// Output final scores (optional)
console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
if (humanScore > computerScore) {
    console.log("You win the game!");
} else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
} else {
    console.log("It's a tie game!");
}
}
//Calling playGame function
playGame();
