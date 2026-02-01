const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const mainPage = document.querySelector('#mainPage');
const successPage = document.querySelector('#successPage');

let moveCount = 0;

function moveNoButton() {
    if (moveCount < 11) {
        // Random position logic
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
        
        moveCount++;
    } else {
        noBtn.style.display = 'none'; // Disappear after 11 tries
    }
}

// Move on hover (desktop) or touch (mobile)
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents clicking it on mobile
    moveNoButton();
});

// Success action
yesBtn.addEventListener('click', () => {
    mainPage.classList.add('hidden');
    successPage.classList.remove('hidden');
});
