let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

document.getElementById("increment-btn").addEventListener("click", increment);
function increment() {
    count += 1
    countEl.textContent = count
}

document.getElementById("decrement-btn").addEventListener("click", decrement);
function decrement(){
    count-=1
    countEl.textContent=count
    
}

document.getElementById("save-btn").addEventListener("click", save);
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count=0;
    countEl.textContent=0;
}

document.getElementById("reset-btn").addEventListener("click", reset);
function reset(){
    countEl.textContent=0;
    count=0; 
}

document.getElementById("clear-btn").addEventListener("click", clear);
function clear() {
	saveEl.textContent="Previous entries: ";
}
//features to include: clear history button, no negative numbers
