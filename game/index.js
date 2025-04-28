const inputEl = document.querySelector("input");
const guessEl = document.querySelector(".guess");
const checkBtnEl = document.querySelector("button");
const remainingChancesTextEl = document.querySelector(".chances");
const remainingChancesEl = document.querySelector(".chance");

let randomNumber = Math.floor(Math.random() * 100);

totalChances = 10;

checkBtnEl.addEventListener("click", () => {
    
    totalChances--;
    let inputValue = inputEl.value;
   
    if (totalChances === 0) {
        inputValue = "";
        inputEl.disabled = true;
        guessEl.textContent = "oops...! bad luck ( • ᴖ • ｡), u lost the game."
        guessEl.style.color = "red";
        checkBtnEl.textContent = "play again...";
        remainingChancesTextEl.textContent = "no chances left"
    }
    else if (totalChances < 0) {
        window.location.reload();
    }
    else if (inputValue == randomNumber) {
        inputEl.disabled = true;
        guessEl.textContent = "hurrah...! congratulations , u won the game."
        guessEl.style.color = "green";
        checkBtnEl.textContent = "⸜(｡˃ ᵕ ˂ )⸝♡";
        totalChances = 0;
    } else if (inputValue > randomNumber && inputValue < 100) {
        guessEl.textContent = "ur guess is high 📈";
        remainingChancesEl.textContent = totalChances;
        guessEl.style.color = "#1446a0";
    } else if (inputValue < randomNumber && inputValue > 0) {
        guessEl.textContent = "ur guess is low 📉";
        remainingChancesEl.textContent = totalChances;
        guessEl.style.color = "#1446a0";
    } else {
        guessEl.textContent = "ur number is invalid.";
        remainingChancesEl.textContent = totalChances;
        guessEl.style.color = "red";
    }
});