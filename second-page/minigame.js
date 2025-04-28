let score = 0;

const heart = document.getElementById('heart');
const scoreDisplay = document.getElementById('score');

function randomPosition() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
}

heart.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    randomPosition();  // หัวใจจะโผล่ขึ้นในตำแหน่งใหม่
});

// ให้หัวใจโผล่ขึ้นมาในตำแหน่งสุ่มเมื่อโหลดหน้าเว็บ
randomPosition();
