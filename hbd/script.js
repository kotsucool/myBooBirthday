const message = "happy birthday na babe wish u all the best naa and hope u enjoy with ur life ε(´｡•᎑•`)っ i hope we will found each other in someday yeahh (˶ᵔ ᵕ ᵔ˶)";
const messageElement = document.getElementById("message");
let index = 0;

// Typing effect
function typeMessage() {
  if (index < message.length) {
    messageElement.innerHTML += message.charAt(index);
    index++;
    setTimeout(typeMessage, 100);
  }
}
typeMessage();

// Music Play/Pause
const playButton = document.getElementById("playButton");
const bgMusic = document.getElementById("bgMusic");

playButton.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    playButton.textContent = "⏸ pause";
  } else {
    bgMusic.pause();
    playButton.textContent = "🎵 play music";
  }
});

// Snow/Heart falling
function createSnowflake() {
  const snowContainer = document.querySelector('.snow-container');
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');

  // ตั้งค่าข้อความและสี
  if (Math.random() < 0.5) {
    snowflake.textContent = "♡"; // Heart
    snowflake.style.color = "#15f19a"; // สีชมพูม่วงอ่อน
  } else {
    snowflake.textContent = "❄️"; // Snow
    snowflake.style.color = "#D6F6FF"; // สีฟ้าอ่อน
  }

  // ตกแต่งการลอย
  snowflake.style.position = 'absolute';
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animationDuration = (3 + Math.random() * 5) + 's';
  snowflake.style.opacity = 0.6 + Math.random() * 0.3; // 0.6 - 0.9
  snowflake.style.fontSize = (15 + Math.random() * 10) + 'px';
  snowflake.style.pointerEvents = 'none'; // ไม่ขวางคลิก

  snowContainer.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 8000);
}

setInterval(createSnowflake, 300);
