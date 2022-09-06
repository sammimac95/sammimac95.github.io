let tempNumber = document.getElementById('meter');
let tempDisplay = document.getElementById('temp-display');
let resetButton = document.getElementById('reset-button');
let hotButton = document.getElementById("hot-button");
let coldButton = document.getElementById("cold-button");
let evaluate = document.getElementById("evaluate-answer");
let displayTempNum = document.getElementById('temp-number');


tempNumber.value = Math.floor(Math.random() * 100);
tempDisplay.innerText = "Tempature is: "
displayTempNum.innerText = tempNumber.value + String.fromCharCode(176) + "F"



resetButton.addEventListener("click", function () {
    tempNumber.value = Math.floor(Math.random() * 100);
    displayTempNum.innerText = tempNumber.value + String.fromCharCode(176) + "F"
    tempDisplay.innerText = "Tempature is: "
    evaluate.innerText = ""
    document.getElementById("evaluate-answer").style.padding = '0px';
})

hotButton.addEventListener("click", function () {
    if ((tempNumber.value) >= 60) {
        evaluate.innerText = "Correct!"
        document.getElementById("evaluate-answer").style.backgroundColor = "green";
        document.getElementById("evaluate-answer").style.padding = '30px';
        playCorrect();

    }
    if ((tempNumber.value) < 60) {
        evaluate.innerText = "Incorrect!"
        document.getElementById("evaluate-answer").style.backgroundColor = "red";
        document.getElementById("evaluate-answer").style.padding = '30px';
        playIncorrect();

    }
})

coldButton.addEventListener("click", function () {
    if ((tempNumber.value) < 60) {
        evaluate.innerText = "Correct!"
        document.getElementById("evaluate-answer").style.backgroundColor = "green";
        document.getElementById("evaluate-answer").style.padding = '30px';
        playCorrect();


    }
    if ((tempNumber.value) >= 60) {
        evaluate.innerText = "Incorrect!"
        document.getElementById("evaluate-answer").style.backgroundColor = "red";
        document.getElementById("evaluate-answer").style.padding = '30px';
        playIncorrect();


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
