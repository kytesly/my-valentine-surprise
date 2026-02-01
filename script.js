const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');

yesBtn.addEventListener('click', () => {
    card1.classList.add('hidden');
    card2.classList.remove('hidden');
});

// desktop: runs away when mouse gets close
noBtn.addEventListener('mouseenter', moveNoButton);

// mobile: runs away when finger touches it
noBtn.addEventListener('touchstart', moveNoButton);

// extra safety: even if she somehow clicks
noBtn.addEventListener('click', moveNoButton);

function moveNoButton() {
    const cardRect = card1.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = cardRect.width - btnRect.width - 20;
    const maxY = cardRect.height - btnRect.height - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}