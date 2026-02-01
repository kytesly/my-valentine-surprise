* {
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    margin: 0;
    height: 100vh;
    background: #ffb6c1; /* Beautiful light pink */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Stops screen scrolling */
}

.popup {
    background: white;
    padding: 30px;
    border-radius: 25px;
    text-align: center;
    width: 95vw; /* Almost full phone width */
    max-width: 500px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    position: relative;
    z-index: 5;
}

.gif-container img {
    width: 100%; /* Makes the image BIG to fill the container */
    max-height: 350px;
    border-radius: 15px;
    margin: 15px 0;
}

h1 {
    font-size: 1.6rem;
    color: #d63384;
}

.buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    min-height: 80px;
}

button {
    padding: 18px 35px;
    border: none;
    border-radius: 20px;
    font-size: 1.3rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

#yesBtn {
    background: #ff1493;
    color: white;
}

#noBtn {
    background: #888;
    color: white;
    /* transition makes the jump look smooth */
    transition: all 0.2s ease; 
}

.hidden {
    display: none !important;
}
