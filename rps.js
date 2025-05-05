const startButton = document.getElementById("start")
const startH1 = document.getElementById("welcome")
const startMain = document.querySelector(".main")
const header = document.querySelector(".header")
const footer = document.querySelector(".footer")

startButton.addEventListener("click", ()=> {

    // changing existing ui
    startMain.removeChild(startButton)
    startMain.removeChild(startH1)
    header.style.height = "5vh"
    footer.style.height = "5vh"

    // adding divs for new ui
    const textDiv = document.createElement("div")
    const buttonDiv = document.createElement("div")
    const actionDiv = document.createElement("div")
    const resultDiv = document.createElement("div")
    const scoreDiv = document.createElement("div")

    // adding content to new ui
    const textH1 = document.createElement("h1")
    textH1.textContent = "Make a move Gunslinger!"
    textH1.style.cssText = "color:white; fontSize = 2vh; margin: 0;"
    textDiv.appendChild(textH1)
    startMain.appendChild(textDiv)


    const rockButton = document.createElement("button")
    rockButton.textContent = "Rock"
    rockButton.style.cssText = `width: 15vh; height: 5vh; fontFamily: "Winky Rough", sans-serif; borderRadius: 1vh; padding: 0; fontSize: 3vh; color: #540B05; cursor: pointer; borderColor: #540B05;`
    buttonDiv.appendChild(rockButton)
    
    const paperButton = document.createElement("button")
    paperButton.textContent = "Paper"
    paperButton.style.cssText = `width: 15vh; height: 5vh; fontFamily: "Winky Rough", sans-serif; borderRadius: 1vh; padding: 0; fontSize: 3vh; color: #540B05; cursor: pointer; borderColor: #540B05;`
    buttonDiv.appendChild(paperButton)
    
    const scissorButton = document.createElement("button")
    scissorButton.textContent = "Scissor"
    scissorButton.style.cssText = `width: 15vh; height: 5vh; fontFamily: "Winky Rough", sans-serif; borderRadius: 1vh; padding: 0; fontSize: 3vh; color: #540B05; cursor: pointer; borderColor: #540B05;`
    buttonDiv.appendChild(scissorButton)
    
    
    buttonDiv.style.cssText = "display:flex; gap: 2vh;"
    startMain.appendChild(buttonDiv)
    
    const imgOne = document.createElement("div")
    const imgTwo = document.createElement("div")
    imgOne.style.cssText = "height: 25vh; width: 25vh;"
    imgTwo.style.cssText = "height: 25vh; width: 25vh;"
    imgOne.style.backgroundColor = "#F38C26"
    imgTwo.style.backgroundColor = "#F38C26"
    imgOne.style.borderRadius = "1vh"
    imgTwo.style.borderRadius = "1vh"
    imgOne.style.border = "5px solid black"
    imgTwo.style.border = "5px solid black"

    actionDiv.appendChild(imgOne)
    actionDiv.appendChild(imgTwo)
    actionDiv.style.cssText = "display:flex; gap: 30vh;"

    startMain.appendChild(actionDiv)
})

/* function getRandomNumber(min, max) {
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
} */