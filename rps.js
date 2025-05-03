function getRandomNumber(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

function getComputerChoice(number) {
    if (number === 1) {
        return "Rock"
    }

    else if (number === 2) {
        return "Paper"
    }

    else if (number === 3) {
        return "Scissors"
    }
}

function getHumanChoice() {
    let userChoice = parseInt(prompt("Type 1 for Rock, 2 for Paper or 3 for Scissors to make a choice"))
    if (userChoice === 1) {
        return "Rock"
    }

    else if (userChoice === 2) {
        return "Paper"
    }

    else if (userChoice === 3) {
        return "Scissors"
    }
}

let humanScore = 0;
let computerScore = 0;

function roundLogic(humanChoice,computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`${humanChoice} ties with ${computerChoice}`)
        alert(`${humanChoice} ties with ${computerChoice}`)
    }

    else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log(`${humanChoice} beats ${computerChoice}`);
        alert(`${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }

    else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log(`${computerChoice} beats ${humanChoice}`);
        alert(`${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log(`${humanChoice} beats ${computerChoice}`);
        alert(`${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }

    else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log(`${computerChoice} beats ${humanChoice}`);
        alert(`${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

    else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log(`${humanChoice} beats ${computerChoice}`);
        alert(`${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }

    else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log(`${computerChoice} beats ${humanChoice}`);
        alert(`${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

for (let i = 1; i < 6; i++) {
    roundLogic(getHumanChoice(),getComputerChoice(getRandomNumber(1,4)))
}
console.log(`Your Score: ${humanScore}`);
console.log(`Computer Score: ${computerScore}`);