const startButton = document.getElementById("start")
const startH1 = document.getElementById("welcome")
const startMain = document.querySelector(".main")
const header = document.querySelector(".header")
const footer = document.querySelector(".footer")

startButton.addEventListener("click", ()=> {

    // changing existing ui
    startMain.removeChild(startButton)
    startMain.removeChild(startH1)
    header.style.height = "1vh"
    footer.style.height = "1vh"

    // adding divs for new ui
    const textDiv = document.createElement("div")
    const buttonDiv = document.createElement("div")
    const actionDiv = document.createElement("div")

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
    
    const userCont = document.createElement("div")
    const userText = document.createElement("p")
    const imgOne = document.createElement("div")
    const compCont = document.createElement("div")
    const compText = document.createElement("p")
    const imgTwo = document.createElement("div")
    const userScore = document.createElement("p")
    const compScore = document.createElement("p")

    userText.textContent = "Your move"
    compText.textContent = "Computer's move"
    userText.style.cssText = "margin: 0; color: white;"
    compText.style.cssText = "margin: 0; color: white;"
    userText.style.fontSize = "2vh"
    compText.style.fontSize = "2vh"
    
    imgOne.style.cssText = "height: 25vh; width: 25vh;"
    imgTwo.style.cssText = "height: 25vh; width: 25vh;"
    imgOne.style.backgroundColor = "#F38C26"
    imgTwo.style.backgroundColor = "#F38C26"
    imgOne.style.borderRadius = "1vh"
    imgTwo.style.borderRadius = "1vh"
    imgOne.style.border = "5px solid #540B05"
    imgTwo.style.border = "5px solid #540B05"

    let scoreOne = 0
    let scoreTwo = 0

    userScore.textContent = `Your score: ${scoreOne}`
    compScore.textContent = `Your score: ${scoreTwo}`
    userScore.style.cssText = "margin: 0; color: white;"
    compScore.style.cssText = "margin: 0; color: white;"
    userScore.style.fontSize = "2vh"
    compScore.style.fontSize = "2vh"

    userCont.appendChild(userText)
    userCont.appendChild(imgOne)
    userCont.appendChild(userScore)
    compCont.appendChild(compText)
    compCont.appendChild(imgTwo)
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
})

