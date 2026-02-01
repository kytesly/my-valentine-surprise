const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const mainPage = document.querySelector('#mainPage');
const successPage = document.querySelector('#successPage');

let moveCount = 0;

function moveNoButton() {
    if (moveCount < 11) {
        // Move button to a random spot
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
        
        moveCount++;
    } else {
        // Disappear after 11 tries
        noBtn.style.display = 'none';
    }
}

// Works for both computer and mobile touch
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Important: stops the click from happening
    moveNoButton();
});

// Show the second page
yesBtn.addEventListener('click', () => {
    mainPage.classList.add('hidden');
    successPage.classList.remove('hidden');
});
