let tempNumber = document.getElementById('meter');
let tempDisplay = document.getElementById('temp-display');
let resetButton = document.getElementById('reset-button');
let hotButton = document.getElementById("hot-button");
let coldButton = document.getElementById("cold-button");
let evaluate = document.getElementById("evaluate-answer");
let displayTempNum = document.getElementById('temp-number');
let numCorrect = 0;
let numIncorrect = 0;
let scorePercentage = 0;
let totalAnswered = 0;
let numCorrectDisplay = document.getElementById('num-correct');
let numIncorrectDisplay = document.getElementById('num-incorrect');
let totalAnsweredDisplay = document.getElementById('num-answered');
let scorePercentageDisplay = document.getElementById('score-percentage');


newNumber();


resetButton.addEventListener("click", function () {
    newNumber();
    evaluate.innerText = ""
    document.getElementById("evaluate-answer").style.padding = '0px';
})

hotButton.addEventListener("click", function () {
    if ((tempNumber.value) >= 60) {
        correct();
    }
    else {
        incorrect();
    }
})

coldButton.addEventListener("click", function () {
    if ((tempNumber.value) < 60) {
        correct()
    }
    else {
        incorrect();
    }
})


function playCorrect() {
    var audio = document.getElementById("correct-sound");
    audio.play();
}

function playIncorrect() {
    var audio = document.getElementById("incorrect-sound");
    audio.play();
}


function correct() {
    evaluate.innerText = "Correct!"
    document.getElementById("evaluate-answer").style.backgroundColor = "green";
    document.getElementById("evaluate-answer").style.padding = '30px';
    numCorrect += 1
    totalAnswered += 1
    numCorrectDisplay.innerText = numCorrect;
    totalAnsweredDisplay.innerText = totalAnswered
    calculateScorePercentage();
    playCorrect();
    newNumber();
}

function incorrect() {
    evaluate.innerText = "Incorrect!"
    document.getElementById("evaluate-answer").style.backgroundColor = "red";
    document.getElementById("evaluate-answer").style.padding = '30px';
    numIncorrect += 1
    totalAnswered += 1
    numIncorrectDisplay.innerText = numIncorrect;
    totalAnsweredDisplay.innerText = totalAnswered
    calculateScorePercentage();
    playIncorrect();
    newNumber();
}

function newNumber() {
    tempNumber.value = Math.floor(Math.random() * 100);
    tempDisplay.innerText = "Tempature is: "
    displayTempNum.innerText = tempNumber.value + String.fromCharCode(176) + "F"
}

function calculateScorePercentage() {
    let percentage = Math.round((numCorrect / totalAnswered) * 100);
    scorePercentageDisplay.innerHTML = percentage + "%";
}
