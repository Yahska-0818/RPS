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

console.log(getComputerChoice(getRandomNumber(1,4)))