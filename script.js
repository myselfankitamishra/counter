// Very good job on the script, there is not much I would chage myself.
// I like that you are using a common function updateCounterDisplay, while its not actually
// required for such task, its a good practice to think about what could be moved away into 
// a separate function.
// 
// While it is a fine practice to use alerts for a debugging purposes, it is rarely used in the 
// web development. If you want, you can programatically change some of your html to communicate
// that there is a upper limit and the user has reached it. 
// Starting with adding a text element and changing the color upon reaching the limit,
// to actually disabling the button when the counter hits upperLimit.
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