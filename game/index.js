const inputEl = document.querySelector("input");
const guessEl = document.querySelector(".guess");
const checkBtnEl = document.querySelector("button");
const remainingChancesTextEl = document.querySelector(".chances");
const remainingChancesEl = document.querySelector(".chance");

let randomNumber = Math.floor(Math.random() * 100);
let totalChances = 5;

checkBtnEl.addEventListener("click", () => {
    totalChances--;
    let inputValue = inputEl.value;
   
    if (totalChances === 0) {
        inputValue = "";
        inputEl.disabled = true;
        guessEl.textContent = "oops...! bad luck ( • ᴖ • ｡), u lost the game."
        guessEl.style.color = "red";
        checkBtnEl.textContent = "play again...";
        remainingChancesTextEl.textContent = "no chances left";
    }
    else if (totalChances < 0) {
        window.location.reload();
    }
    // else if (inputValue == randomNumber) {
    //     inputEl.disabled = true;
    //     guessEl.textContent = "hurrah...! congratulations , u won the game.";
    //     guessEl.style.color = "green";
    //     checkBtnEl.textContent = "⸜(｡˃ ᵕ ˂ )⸝♡";
    //     totalChances = 0;
    // } 

    else if (inputValue == randomNumber) {
      guessEl.textContent = "hurrah...! congratulations , u won the game.";
      guessEl.style.color = "green";
      
      setTimeout(() => {
          window.location.href = "./hbd/happy.html"; // ไปหน้าอวยพร (ตั้งชื่อไฟล์ได้ตามใจเลย)
      }, 1500); // รอ 1.5 วิให้แสดงข้อความชนะก่อนค่อยเปลี่ยนหน้า
  }
  

    else if (inputValue > randomNumber && inputValue <= 100) {
        guessEl.textContent = "ur guess is high 📈";
        guessEl.style.color = "#1446a0";
        remainingChancesEl.textContent = totalChances;
        blinkGuess();  // ✨ เพิ่มกระพริบ
    } 
    else if (inputValue < randomNumber && inputValue > 0) {
        guessEl.textContent = "ur guess is low 📉";
        guessEl.style.color = "#1446a0";
        remainingChancesEl.textContent = totalChances;
        blinkGuess();  // ✨ เพิ่มกระพริบ
    } 
    else {
        guessEl.textContent = "ur number is invalid.";
        guessEl.style.color = "red";
        remainingChancesEl.textContent = totalChances;
    }
});

// ✨ ฟังก์ชันทำกระพริบ
function blinkGuess() {
    guessEl.classList.add("blink");
    setTimeout(() => {
        guessEl.classList.remove("blink");
    }, 800); // ตรงนี้รอให้ animation ทำงานเสร็จแล้วค่อยลบ
}
