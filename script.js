/* Global Styles */
body {
    margin: 0;
    font-family: 'Georgia', serif;
    background: linear-gradient(to top, #c7d8e3, #ffafbd);
    color: #4a4a4a;
    overflow-y: auto;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

.container {
    text-align: center;
    padding: 20px;
    max-width: 90%;
    margin: 0 auto;
    border: 5px solid rgba(255, 182, 193, 0.5);
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 1;
}

h1 {
    font-size: 2.5em;
    margin-bottom: 0.5em;
    color: #ff6f61;
    text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.7);
}

p {
    font-size: 1.2em;
    line-height: 1.8;
    opacity: 0.9;
    margin: 10px 0;
    transition: transform 0.3s, color 0.3s;
    background: rgba(255, 182, 193, 0.2);
    padding: 10px;
    border-radius: 10px;
}

/* Proposal Page Background with Mosaic Effect */
.proposal-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../images/background.jpg');
    background-size: cover;
    background-position: center;
    filter: grayscale(100%) blur(8px) contrast(150%);
    z-index: -2;
    animation: mosaicEffect 10s infinite linear;
}

@keyframes mosaicEffect {
    0% {
        background-size: 100%;
    }
    50% {
        background-size: 120%;
    }
    100% {
        background-size: 100%;
    }
}

.floating-images-container {
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    z-index: -1;
}

.floating-image {
    position: absolute;
    width: 150px;
    height: auto;
    object-fit: cover;
    opacity: 0.8;
    border: 5px solid white;
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s, opacity 0.3s;
}

.floating-image:hover {
    transform: scale(1.1);
    opacity: 1;
}

/* Yes and No Pages */
.message-box {
    display: inline-block;
    background: rgba(255, 255, 255, 0.7);
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    max-width: 600px;
    margin-top: 20px;
    text-align: center;
}

.yes-no-container {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 20px;
}

.yes-page img, .no-page img {
    width: 250px;
    height: 250px;
    margin-top: 20px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    transition: transform 0.3s;
}

.yes-page img:hover, .no-page img:hover {
    transform: scale(1.1);
}

.surprise-link {
    color: #ff6f61;
    font-size: 1.5em;
    text-decoration: none;
    cursor: pointer;
}

.surprise-link:hover {
    text-decoration: underline;
}

/* Hover Effects */
p:hover {
    color: #ff6f61;
    cursor: pointer;
    transform: scale(1.05);
}

.surprise-link:active {
    transform: scale(0.95);
}
