const moles = document.querySelectorAll('.mole');
const scoreDisplay = document.querySelector('score');
const restartBtn = document.getElementById('restart-btn');

let score = 0;
let gameinterval;

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    winMessage.textContent = '';
    restartBtn.style.display = 'none';

    gameInterval = setInterval(randomMole, 1000);
}

function randomMole() {
    moles.forEach(Mole => moles.classList.remove('active'));
    const index = Math.floor(Math.random() * moles.length);
    moles[index].classList.add('active');
}

moles.forEach(mole => {
    mole.addEventListener('click', () => {
        if (mole.classList.contains('active')){
            score++;
            scoreDisplay.textContent = score;
            if (score >= 5) stopGame(); 
        }
    })
})

function stopGame() {
    clearInterval(gameInterval);
    moles.forEach(mole => mole.classList.remove('active'));
    winMessage.style.display = 'block';
    restartBtn.style.display = 'inline-block';
}

restartBtn.addEventListener('click', () => {
    startGame();
});