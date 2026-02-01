* {
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    margin: 0;
    height: 100vh;
    background: #ff69b4;
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup {
    background: white;
    padding: 25px;
    border-radius: 20px;
    text-align: center;
    width: 90%;
    max-width: 420px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    position: relative;
}

.gif-container img {
    width: 180px;
    max-width: 100%;
    margin: 15px 0;
}

.buttons {
    position: relative;
    height: 60px;
    margin-top: 20px;
}

button {
    padding: 12px 22px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    cursor: pointer;
}

#yesBtn {
    background: #ff1493;
    color: white;
}

#noBtn {
    background: #ddd;
    position: absolute;
}

.hidden {
    display: none;
}
