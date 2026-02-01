const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainPage = document.getElementById('mainPage');
const successPage = document.getElementById('successPage');

let moveCount = 0;
const maxMoves = 11;

// Function to move the "No" button
function moveButton() {
    if (moveCount < maxMoves) {
        // Calculate a random spot on the screen
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
        
        moveCount++;
    } else {
        // After 11 times, make the button disappear
        noBtn.style.display = 'none';
    }
}

// Event listeners
noBtn.addEventListener('mouseover', moveButton); // For mouse
noBtn.addEventListener('touchstart', moveButton); // For mobile touch

yesBtn.addEventListener('click', () => {
    mainPage.classList.add('hidden');
    successPage.classList.remove('hidden');
});
