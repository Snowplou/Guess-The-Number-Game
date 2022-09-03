document.getElementById("startGame").style = "margin-top: " + (window.screen.availHeight / 3.2) + "px;"
document.getElementById("rangeDisplay").style = "margin-top: " + (window.screen.availHeight / 10) + "px;"
//test
let maxNum = 100
let numberChosen
let numbersPicked = []

function start() {
    document.getElementById("page1").style = "display: none;"
    document.getElementById("page2").style = "display: block;"
    // document.getElementById("numberInput").style = "max: " + maxNum + ";"
    document.getElementById("numberInput").max = maxNum

    numberChosen = Math.round(Math.random() * (Number(maxNum) + 1))
    console.log(numberChosen)
}

function rangeInput() {
    maxNum = document.getElementById("rangeSelect").value
    document.getElementById("rangeDisplay").innerText = "Range: 0-" + maxNum
}

function inputSubmitted() {
    let numberPicked = Number(document.getElementById("numberInput").value)
    if (isNaN(numberPicked) || numberPicked < 0 || numberPicked > maxNum || numbersPicked.includes(numberPicked)) return
    numbersPicked.push(numberPicked)

    let newLi = document.createElement("li")
    newLi.innerText = numberPicked
    newLi.style.margin = "3%"

    if (numberPicked > numberChosen) {

        newLi.innerText += "\nHigh"
        newLi.style.color = "blue"
        document.getElementById("history").append(newLi)
    }
    else if (numberPicked < numberChosen) {

        newLi.innerText += "\nLow"
        newLi.style.color = "red"
        document.getElementById("history").append(newLi)
    }
    else {
        newLi.innerText += "\nCorrect"
        newLi.style.color = "lightGreen"
        document.getElementById("history").append(newLi)

        document.getElementById("numberInput").style = "display: none;"
        document.getElementById("playAgain").style = "display: block;"

    }

    document.getElementById("numberInput").value = ""
}

function refresh(){
    location.reload()
}

function activateSecret(){
    document.getElementById("startGame").style.color = "white"
    document.getElementById("startGame").style.backgroundColor = "red"
    document.getElementById("startGame").innerText = "Start Game  😈"
    document.getElementById("rangeSelect").min = 1000
    document.getElementById("rangeSelect").max = 10000
    document.getElementById("rangeSelect").value = 5000
    maxNum = 5000
    document.getElementById("rangeDisplay").innerText = "Range: 0-" + maxNum
}