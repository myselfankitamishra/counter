let counterValue = 0;
const upperLimit = 30;
// Do not forget to add semicolons at the end of the lines.
// While JS is forgiving and does not enforce it, its a good practice to keep doing it. 
// You can also find an extension for the VS Code that would automatically do some tweaking 
// of your js file to keep it consistent. I think its called Pretier, but double check.
let counterDisplay = document.getElementById("counter")
 
function increase(){
   
    if(counterValue<upperLimit){
         counterValue++
          updateCounterDispay()
    }else{
        return alert(`You have reached the Upper Limit.`)
    }
   spanDisplay()
}
// Add an empty line after any function. This increases readibility.
function decrease(){
    if(counterValue>0){
        counterValue--;
        updateCounterDispay();
    }
    spanDisplay()
}
function reset(){
    counterValue = 0;
    newSpan.style.visibility = "hidden";
    plusButton.style.backgroundColor = "burlywood";
    return updateCounterDispay();
}
// Good job with extracting the same functionality into a function!
function updateCounterDispay(){
    counterDisplay.textContent=counterValue;
    console.log(counterValue);
}

const newSpan = document.createElement("span");
newSpan.textContent = "You have free shipping";
newSpan.style.width = "200px";
newSpan.style.visibility = "hidden";
newSpan.style.display = "flex";
newSpan.style.justifyContent = "center";
newSpan.style.margin = "auto";
newSpan.style.marginTop = "10px";
newSpan.style.backgroundColor = "olive";
newSpan.style.color = "white";
document.body.appendChild(newSpan);

const plusButton = document.getElementById("plus");
// This function is really hard to read due to the lack of indentation.
function spanDisplay(){
if(counterValue>=20){
newSpan.textContent = "Out of Stock";
plusButton.style.backgroundColor = "red";
}else if(counterValue > 9 && counterValue < 20){
    // console.log("hello");
    newSpan.style.visibility = "visible";
    newSpan.textContent = "You have free shipping";
    plusButton.style.backgroundColor = "burlywood";}
else{
    
    newSpan.style.visibility = "hidden";
}
}
