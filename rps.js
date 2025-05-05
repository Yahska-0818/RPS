const startButton = document.getElementById("start")
const startH1 = document.getElementById("welcome")
const startMain = document.querySelector(".main")
const header = document.querySelector(".header")
const footer = document.querySelector(".footer")

// adding divs for new ui
const textDiv = document.createElement("div")
const buttonDiv = document.createElement("div")
const actionDiv = document.createElement("div")
const messageDiv = document.createElement("div")

// adding content to new ui
const textH1 = document.createElement("h1")

// adding buttons
const rockButton = document.createElement("button")
const paperButton = document.createElement("button")
const scissorButton = document.createElement("button")

//main action area

const userCont = document.createElement("div")
const userText = document.createElement("p")
const userImg = document.createElement("img")
const compCont = document.createElement("div")
const compText = document.createElement("p")
const compImg = document.createElement("img")
const userScore = document.createElement("p")
const compScore = document.createElement("p")
const messageText = document.createElement("p")


// keeping score
let scoreOne = 0
let scoreTwo = 0

// Choices


startButton.addEventListener("click", ()=> {

    // changing existing ui
    startMain.removeChild(startButton)
    startMain.removeChild(startH1)
    header.style.height = "1vh"
    footer.style.height = "1vh"

    textH1.textContent = "Make a move Gunslinger!"
    textH1.style.cssText = "color:white; fontSize = 2vh; margin: 0;"
    textDiv.appendChild(textH1)
    startMain.appendChild(textDiv)

    rockButton.textContent = "Rock"
    rockButton.style.cssText = `width: 15vh; height: 5vh; fontFamily: "Winky Rough", sans-serif; borderRadius: 1vh; padding: 0; fontSize: 3vh; color: #540B05; cursor: pointer; borderColor: #540B05;`
    buttonDiv.appendChild(rockButton)

    paperButton.textContent = "Paper"
    paperButton.style.cssText = `width: 15vh; height: 5vh; fontFamily: "Winky Rough", sans-serif; borderRadius: 1vh; padding: 0; fontSize: 3vh; color: #540B05; cursor: pointer; borderColor: #540B05;`
    buttonDiv.appendChild(paperButton)

    scissorButton.textContent = "Scissor"
    scissorButton.style.cssText = `width: 15vh; height: 5vh; fontFamily: "Winky Rough", sans-serif; borderRadius: 1vh; padding: 0; fontSize: 3vh; color: #540B05; cursor: pointer; borderColor: #540B05;`
    buttonDiv.appendChild(scissorButton)
    
    buttonDiv.style.cssText = "display:flex; gap: 2vh;"
    startMain.appendChild(buttonDiv)

    userText.textContent = "Your move"
    compText.textContent = "Computer's move"
    userText.style.cssText = "margin: 0; color: white;"
    compText.style.cssText = "margin: 0; color: white;"
    userText.style.fontSize = "2vh"
    compText.style.fontSize = "2vh"

    userImg.style.cssText = "height: 25vh; width: 25vh;"
    compImg.style.cssText = "height: 25vh; width: 25vh;"
    userImg.style.borderRadius = "1vh"
    compImg.style.borderRadius = "1vh"
    userImg.style.border = "5px solid #540B05"
    compImg.style.border = "5px solid #540B05"

    userScore.textContent = `Your score: ${scoreOne}`
    compScore.textContent = `Your score: ${scoreTwo}`
    userScore.style.cssText = "margin: 0; color: white;"
    compScore.style.cssText = "margin: 0; color: white;"
    userScore.style.fontSize = "2vh"
    compScore.style.fontSize = "2vh"

    userCont.appendChild(userText)
    userCont.appendChild(userImg)
    userCont.appendChild(userScore)
    compCont.appendChild(compText)
    compCont.appendChild(compImg)
    compCont.appendChild(compScore)

    userCont.style.cssText = "display: flex; gap: 1vh"
    compCont.style.cssText = "display: flex; gap: 1vh"
    userCont.style.flexDirection = "column"
    compCont.style.flexDirection = "column"
    userCont.style.alignItems = "center"
    compCont.style.alignItems = "center"

    actionDiv.appendChild(userCont)
    actionDiv.appendChild(compCont)
    actionDiv.style.cssText = "display:flex; gap: 50vh;"

    startMain.appendChild(actionDiv)

    messageDiv.appendChild(messageText)
    messageDiv.style.cssText = "display:flex; justifyContent: center"
    messageText.style.cssText = "margin: 0; color: white;"
    messageText.style.fontSize = "3vh"
    startMain.appendChild(messageDiv)

    startGame()

})

function getUserChoice() {
    return new Promise((resolve) => {
        function handleClick(choice) {
            rockButton.removeEventListener("click", onRock)
            paperButton.removeEventListener("click", onPaper)
            scissorButton.removeEventListener("click", onScissors)
            resolve(choice)
        }

        const onRock = () => handleClick("rock")
        const onPaper = () => handleClick("paper")
        const onScissors = () => handleClick("scissors")

        rockButton.addEventListener("click", onRock)
        paperButton.addEventListener("click", onPaper)
        scissorButton.addEventListener("click", onScissors)
    })
}

function getRandomNumber(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

function getComputerChoice(number) {
    return new Promise((resolve,reject)=>{
        if (number === 1) {
            resolve("rock")
        }
    
        else if (number === 2) {
            resolve("paper")
        }
    
        else if (number === 3) {
            resolve("scissors")
        }
    })
}

function roundLogic(humanChoice,computerChoice) {
    if (humanChoice === computerChoice) {
        messageText.textContent = `${humanChoice} ties with ${computerChoice}`
        userScore.textContent = `Your score: ${scoreOne}`
        compScore.textContent = `Your score: ${scoreTwo}`
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        messageText.textContent = `${humanChoice} beats ${computerChoice}`
        scoreOne++
        userScore.textContent = `Your score: ${scoreOne}`
        compScore.textContent = `Your score: ${scoreTwo}`
    }

    else if (humanChoice === "rock" && computerChoice === "paper") {
        messageText.textContent = `${computerChoice} beats ${humanChoice}`
        scoreTwo++
        userScore.textContent = `Your score: ${scoreOne}`
        compScore.textContent = `Your score: ${scoreTwo}`
    }

    else if (humanChoice === "paper" && computerChoice === "rock") {
        messageText.textContent = `${humanChoice} beats ${computerChoice}`
        scoreOne++
        userScore.textContent = `Your score: ${scoreOne}`
        compScore.textContent = `Your score: ${scoreTwo}`
    }

    else if (humanChoice === "paper" && computerChoice === "scissors") {
        messageText.textContent = `${computerChoice} beats ${humanChoice}`
        scoreTwo++
        userScore.textContent = `Your score: ${scoreOne}`
        compScore.textContent = `Your score: ${scoreTwo}`
        
    }

    else if (humanChoice === "scissors" && computerChoice === "paper") {
        messageText.textContent = `${humanChoice} beats ${computerChoice}`
        scoreOne++
        userScore.textContent = `Your score: ${scoreOne}`
        compScore.textContent = `Your score: ${scoreTwo}`
    }

    else if (humanChoice === "scissors" && computerChoice === "rock") {
        messageText.textContent = `${computerChoice} beats ${humanChoice}`
        scoreTwo++
        userScore.textContent = `Your score: ${scoreOne}`
        compScore.textContent = `Your score: ${scoreTwo}`
    }
}

async function startGame() {
    for (let i = 0; i < 5; i++) {
        const userChoice = await getUserChoice()
        userImg.src = `imgs/${userChoice}.png`

        const randomNum = getRandomNumber(1, 4)
        const compChoice = await getComputerChoice(randomNum)
        compImg.src = `imgs/${compChoice}.png`

        roundLogic(userChoice, compChoice)
    }
    if (scoreOne>scoreTwo) {
        messageText.textContent = "Game over. You win!"
    }

    else if (scoreTwo > scoreOne) {
        messageText.textContent = "Game over. Computer wins!"
    }

    else {
        messageText.textContent = "Game over. Draw"
    }
}
