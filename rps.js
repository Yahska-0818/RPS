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

console.log(getHumanChoice());
