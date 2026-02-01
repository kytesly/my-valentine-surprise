const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const mainPage = document.querySelector('#mainPage');
const successPage = document.querySelector('#successPage');

let moveCount = 0;

function moveNoButton() {
    if (moveCount < 11) {
        // Calculate random position on the screen
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        // Apply position
        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
        
        moveCount++;
    } else {
        // Hide button after 11 tries
        noBtn.style.display = 'none';
    }
}

// Mouse for laptops, Touch for mobile
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); 
    moveNoButton();
});

// Switch screens
yesBtn.addEventListener('click', () => {
    mainPage.classList.add('hidden');
    successPage.classList.remove('hidden');
});
