body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #ffdeeb;
    font-family: 'Arial', sans-serif;
    text-align: center;
}

.container {
    background: white;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    width: 85%;
    max-width: 400px;
}

.main-gif {
    width: 200px;
    height: auto;
}

.buttons {
    margin-top: 20px;
    position: relative;
    height: 60px;
}

button {
    padding: 15px 30px;
    font-size: 18px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

#yesBtn {
    background-color: #f06292;
    color: white;
}

#noBtn {
    background-color: #9e9e9e;
    color: white;
    position: absolute; /* Allows movement */
}

.hidden {
    display: none !important;
}
