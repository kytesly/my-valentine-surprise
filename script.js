const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const h1 = document.querySelector('h1');
const gif = document.querySelector('#gifContainer img');

let moveCount = 0; // Tracks how many times it moved

function moveButton() {
    if (moveCount < 11) {
        // Force the button to move
        noButton.style.position = 'fixed'; 
        
        // Calculate random position within the screen
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
        
        moveCount++; // Increase the count by 1
    } else {
        // After 11 times, the button disappears to force a 'Yes'
        noButton.style.display = 'none';
    }
}

// Triggers for both Desktop and Mobile
noButton.addEventListener('mouseover', moveButton);
noButton.addEventListener('touchstart', (e) => {
    e.preventDefault(); 
    moveButton();
});

yesButton.addEventListener('click', () => {
    // Your custom message
    h1.innerHTML = "Welcome, welcome, welcome. Welcome, welcome, my beloved and amazing, wonderful girlfriend. Thanks for clicking yes. Love you too.";
    
    // Yabu man / Happy celebration GIF
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/6oMKugqovQ2pQV5u4z/giphy.gif"; 
    
    // Clean up screen
    noButton.style.display = 'none';
    yesButton.style.display = 'none';
});
