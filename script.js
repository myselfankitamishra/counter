let counterValue = 0;
const upperLimit = 30;
const counterDisplay = document.getElementById("counter");

function increase() {
    if(counterValue < upperLimit){
    counterValue++;
    updateCounterDisplay();}
    else{
        alert("Hey! You reach the upper upper limit.")
    }
}

function decrease() {
    if (counterValue > 0) {
        counterValue--;
        updateCounterDisplay();
    }
}

function reset() {
    counterValue = 0;
    updateCounterDisplay();
}

function updateCounterDisplay() {
    counterDisplay.textContent = counterValue;
}