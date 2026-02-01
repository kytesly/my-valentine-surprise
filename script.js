body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #ffe6e6;
    font-family: 'Arial', sans-serif;
    overflow: hidden;
}

.container {
    text-align: center;
    width: 90vw;
}

#gifContainer img {
    width: 100%;
    max-width: 400px; /* Big image box */
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

h1 {
    color: #d63384;
    font-size: 2rem; /* Big text */
    margin: 25px 0;
}

.buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    height: 80px;
    position: relative;
}

button {
    padding: 20px 45px; /* Large buttons */
    font-size: 1.5rem;
    font-weight: bold;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

#yesButton {
    background-color: #ff4d6d; /* Bright Pink */
    color: white;
}

#noButton {
    background-color: #888888; /* Grey */
    color: white;
    transition: 0.1s;
}
