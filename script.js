const noButton = document.getElementById('no-button');

function moveButton() {
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}

noButton.addEventListener('mouseover', moveButton);
noButton.addEventListener('touchstart', moveButton);
