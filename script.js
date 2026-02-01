const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const container = document.getElementById('container');
const popup = document.getElementById('popup');

// Function to move the "No" button
noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// Function to handle the "Yes" click
yesButton.addEventListener('click', () => {
    container.style.display = 'none'; // Hide the original question
    popup.style.display = 'block';   // Show the cute success message
});
