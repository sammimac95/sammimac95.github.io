let tempNumber = document.getElementById('meter');
let tempDisplay = document.getElementById('temp-display');
let resetButton = document.getElementById('reset-button');
let hotButton = document.getElementById("hot-button");
let coldButton = document.getElementById("cold-button");
let evaluate = document.getElementById("evaluate-answer");

tempNumber.value = Math.floor(Math.random() * 100);
tempDisplay.innerText = "Tempature is: " + tempNumber.value + String.fromCharCode(176) + "F"




resetButton.addEventListener("click", function () {
    tempNumber.value = Math.floor(Math.random() * 100);
    tempDisplay.innerText = "Tempature is: " + tempNumber.value + String.fromCharCode(176) + "F"
    evaluate.innerText = ""
})

hotButton.addEventListener("click", function () {
    if ((tempNumber.value) >= 50) {
        evaluate.innerText = "Correct!"
    }
    if ((tempNumber.value) < 50) {
        evaluate.innerText = "Incorrect!"
    }
})

coldButton.addEventListener("click", function () {
    if ((tempNumber.value) < 50) {
        evaluate.innerText = "Correct!"
    }
    if ((tempNumber.value) >= 50) {
        evaluate.innerText = "Incorrect!"
    }
})
