body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #ffebee;
    font-family: 'Arial', sans-serif;
    text-align: center;
    overflow: hidden; /* Prevents scrollbars when button moves */
}

.container {
    background: white;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    max-width: 400px;
    width: 90%;
    position: relative;
}

.gif-container img {
    width: 100%;
    border-radius: 10px;
}

h1 {
    color: #d32f2f;
    font-size: 1.4rem;
}

.buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

button {
    padding: 12px 25px;
    font-size: 1.1rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

#yesBtn {
    background-color: #4caf50;
    color: white;
}

#noBtn {
    background-color: #f44336;
    color: white;
    position: absolute; /* Needed for it to jump around */
    transition: 0.1s;
}

.hidden {
    display: none;
}
