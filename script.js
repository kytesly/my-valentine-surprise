document.getElementById('noButton').addEventListener('mouseover', function() {
    const noButton = document.getElementById('noButton');
    const container = document.getElementById('container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    const newX = Math.random() * (containerRect.width - buttonRect.width);
    const newY = Math.random() * (containerRect.height - buttonRect.height);

    noButton.style.position = 'absolute';
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('container').style.display = 'none';
    document.getElementById('popup').style.display = 'block';
});
