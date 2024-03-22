document.addEventListener("DOMContentLoaded", function() {
    const colorDisplay = document.getElementById("color-display");
    const optionsContainer = document.getElementById("options");
    const message = document.getElementById("message");
    const livesDisplay = document.getElementById("lives");
    const replayButton = document.getElementById("replay-btn");

    let lives = 3;
    let score = 0;

    // Generate a random RGB color
    function generateColor() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }

    // Generate options including the correct color
    function generateOptions(correctColor) {
        const options = [];
        options.push(correctColor);

        while (options.length < 3) {
            const randomColor = generateColor();
            if (!options.includes(randomColor)) {
                options.push(randomColor);
            }
        }

        return shuffleArray(options);
    }

    // Shuffle an array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Initialize the game
    function initGame() {
        const correctColor = generateColor();
        colorDisplay.style.backgroundColor = correctColor;

        const options = generateOptions(correctColor);
        optionsContainer.innerHTML = "";
        options.forEach(option => {
            const optionElement = document.createElement("div");
            optionElement.classList.add("option");
            optionElement.style.backgroundColor = option;
            optionElement.addEventListener("click", function() {
                if (option === correctColor) {
                    score++;
                    message.textContent = "Correct!";
                } else {
                    lives--;
                    livesDisplay.textContent = lives;
                    message.textContent = "Incorrect!";
                    if (lives === 0) {
                        endGame();
                        return;
                    }
                }
                initGame();
            });
            optionsContainer.appendChild(optionElement);
        });

        message.textContent = "";
    }

    // End the game
    function endGame() {
        message.textContent = `Game Over! Your score: ${score}`;
        replayButton.style.display = "block";
    }

    // Replay the game
    replayButton.addEventListener("click", function() {
        lives = 3;
        score = 0;
        livesDisplay.textContent = lives;
        replayButton.style.display = "none";
        initGame();
    });

    // Start the game
    initGame();
});
