
    //CODE EINGABE
    const inputElement = document.getElementById("userInput");
    const outputElement = document.getElementById("outputText");
    const submitButton = document.getElementById("submitButton");
    const input = document.getElementById("input");

    function handleInput() {
        const inputValue = inputElement.value;
        let outputText = "";

        if (inputValue === "hallo") {
            outputText = "Hallo Welt";
            // Hide input and button
            inputElement.classList.add("hidden");
            input.classList.add("hidden");
        } else if (inputValue === "servus") {
            outputText = "Servus Welt";
            // Hide input and button
            inputElement.classList.add("hidden");
            input.classList.add("hidden");
        } else if (inputValue === "snooker") {
            inputElement.classList.add("hidden");
            input.classList.add("hidden");
            // Zeige das Eingabefeld für die Spielernamen an
            snooker.classList.remove("hidden");

            // Erstelle das iframe-Element für das YouTube-Video
            var iframe = document.createElement("iframe");
            iframe.width = "100%";
            iframe.height = "115%"; // Ändere die Höhe, um das Video zu strecken
            iframe.src =
                "https://www.youtube.com/embed/eaWgG9anVYM?autoplay=1&loop=1&playlist=eaWgG9anVYM&mute=1&controls=0";
            iframe.style.position = "absolute"; // Positioniere absolut, um den gesamten Bildschirm zu bedecken
            iframe.style.top = "50%";
            iframe.style.left = "50%";
            iframe.style.transform = "translate(-50%, -50%)"; // Zentriere das Video
            iframe.style.zIndex = "-1"; // Stelle sicher, dass das Video im Hintergrund liegt
            iframe.style.border = "0";
            iframe.allowFullscreen = true;
            iframe.style.pointerEvents = "none"; // Deaktiviere Maussteuerung für das Video
            iframe.style.objectFit = "cover"; // Strecke das Video, um den gesamten Bereich abzudecken

            // Füge das iframe-Element zum body hinzu
            document.body.appendChild(iframe);
        }
        else if (inputValue === "tetris") {
            inputElement.classList.add("hidden");
            input.classList.add("hidden");
            tetris.classList.remove("hidden");

        }
        else
        {
            outputText = "Ungültiger Code!";
        }

        // Clear input
        inputElement.value = "";

        outputElement.textContent = outputText;
    }

    // Handle click on submitButton
    submitButton.addEventListener("click", function () {
        handleInput();
    });

    // Handle Enter key press
    inputElement.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            handleInput();
        }
    });









































    //SNOOKER - Erweiterte Version für mehr Spieler (bis 20)
const snooker = document.getElementById("snooker");
const playerNamesInput = document.getElementById("playerNamesInput");
const submitplayerButton = document.getElementById("submitplayerButton");

// Konfiguration - Hier kannst du die maximale Anzahl Spieler anpassen
const MAX_PLAYERS = 20; // Erhöht von 5 auf 20

function handlePlayerInput() {
    const playerName = playerNamesInput.value.trim();
    if (leaderboardData.length < MAX_PLAYERS) {
        if (playerName.length > 0) {
            addPlayerToLeaderboard(playerName);
            playerNamesInput.value = "";
        }
    } else {
        playerNamesInput.placeholder = `Max. ${MAX_PLAYERS} Players Reached`;
    }
    playerNamesInput.focus();
}

// Leaderboard-Datenstruktur
let leaderboardData = [];

function addPlayerToLeaderboard(playerName) {
    const newPlayer = {
        name: playerName,
        score: 0,
    };

    leaderboardData.push(newPlayer);
    leaderboardData.sort((a, b) => a.name.localeCompare(b.name));

    updateLeaderboard();

    if (leaderboardData.length === MAX_PLAYERS) {
        playerNamesInput.placeholder = `Max. ${MAX_PLAYERS} Players Reached`;
        playerNamesInput.disabled = true;
    }
}

let sortTimeout;

function updateLeaderboard() {
    let leaderboardElement = document.querySelector("#leaderboard");
    if (!leaderboardElement) {
        leaderboardElement = document.createElement("div");
        leaderboardElement.id = "leaderboard";
        leaderboardElement.classList.add("leaderboard");
        leaderboardElement.style.width = "80%"; // Breiter für mehr Spieler
        leaderboardElement.style.marginTop = "-20px";
        leaderboardElement.style.marginLeft = "auto";
        leaderboardElement.style.marginRight = "auto";
        leaderboardElement.style.maxHeight = "80vh"; // Scrollbar bei vielen Spielern
        leaderboardElement.style.overflowY = "auto";

        snooker.appendChild(leaderboardElement);
    }
    
    leaderboardElement.innerHTML = "";

    leaderboardData.forEach((player, index) => {
        const playerEntry = document.createElement("div");
        playerEntry.classList.add("player-entry");
        playerEntry.style.marginBottom = "15px"; // Kleinerer Abstand für mehr Spieler
        playerEntry.style.minHeight = "80px"; // Kompakter
        playerEntry.style.display = "flex";
        playerEntry.style.flexDirection = "column";
        playerEntry.style.justifyContent = "center";
        playerEntry.style.padding = "8px";
        playerEntry.style.backgroundColor = "rgba(255, 255, 255, 0.9)";

        // Spielername
        const playerNameElement = document.createElement("span");
        playerNameElement.innerHTML = `${index + 1}. ${player.name}`;
        playerNameElement.style.fontSize = "28px"; // Etwas kleiner
        playerNameElement.style.color = "black";
        playerNameElement.style.flex = "1";
        playerNameElement.style.marginRight = "10px";

        // Crown nur für Platz 1
        if (index === 0) {
            const crownIcon = document.createElement("img");
            crownIcon.src = "/icons/crown.svg";
            crownIcon.alt = "Crown Icon";
            crownIcon.style.width = "30px";
            crownIcon.style.transform = "translate(-5px, 0px)";
            crownIcon.style.verticalAlign = "middle";
            playerNameElement.insertBefore(crownIcon, playerNameElement.firstChild);
        }

        // Punktzahl
        const playerScoreElement = document.createElement("span");
        playerScoreElement.textContent = `${player.score}`;
        playerScoreElement.style.fontSize = "36px";
        playerScoreElement.style.color = "black";
        playerScoreElement.style.textAlign = "right";
        playerScoreElement.style.width = "80px";

        const playerInfoContainer = document.createElement("div");
        playerInfoContainer.style.display = "flex";
        playerInfoContainer.style.alignItems = "center";
        playerInfoContainer.style.marginBottom = "5px";
        playerInfoContainer.appendChild(playerNameElement);
        playerInfoContainer.appendChild(playerScoreElement);

        playerEntry.appendChild(playerInfoContainer);

        // Buttons
        const buttonsContainer = document.createElement("div");
        buttonsContainer.classList.add("buttons-container");
        buttonsContainer.style.display = "flex";
        buttonsContainer.style.flexWrap = "wrap";
        buttonsContainer.style.gap = "5px"; // Kleinerer Gap
        buttonsContainer.style.marginTop = "5px";

        // Funktion für farbige Buttons
        function createColoredButton(text, scoreChange, bgColor) {
            const btn = document.createElement("button");
            btn.textContent = text;
            btn.onclick = () => {
                updateScoreWithAnimation(index, scoreChange);
                handleScoreChange();
            };
            btn.style.width = "40px"; // Kleiner
            btn.style.height = "40px";
            btn.style.borderRadius = "50%";
            btn.style.border = "1px solid black";
            btn.style.backgroundColor = bgColor;
            btn.style.color = "white";
            btn.style.fontWeight = "bold";
            btn.style.fontSize = "14px";
            btn.style.cursor = "pointer";
            return btn;
        }

        // Delete Button
        const deleteButton = createButton("❌", () => deletePlayer(index));
        deleteButton.style.width = "40px";
        deleteButton.style.height = "40px";
        buttonsContainer.appendChild(deleteButton);

        // Strafen
        buttonsContainer.appendChild(createColoredButton("-1", -1, "#666"));
        buttonsContainer.appendChild(createColoredButton("-4", -4, "#555"));

        // Snooker-Punkte
        buttonsContainer.appendChild(createColoredButton("+1", 1, "red"));
        buttonsContainer.appendChild(createColoredButton("+2", 2, "#e0c200"));
        buttonsContainer.appendChild(createColoredButton("+3", 3, "green"));
        buttonsContainer.appendChild(createColoredButton("+4", 4, "brown"));
        buttonsContainer.appendChild(createColoredButton("+5", 5, "blue"));
        buttonsContainer.appendChild(createColoredButton("+6", 6, "purple"));
        buttonsContainer.appendChild(createColoredButton("+7", 7, "black"));

        playerEntry.appendChild(buttonsContainer);
        leaderboardElement.appendChild(playerEntry);
    });

    // handleScoreChange als nested function (wie im Original)
    function handleScoreChange() {
        if (sortTimeout) {
            clearTimeout(sortTimeout);
        }

        let countdown = 2000;
        const countdownInterval = 100;

        const countdownDisplay = document.createElement("div");
        countdownDisplay.style.position = "fixed";
        countdownDisplay.style.top = "20px";
        countdownDisplay.style.right = "20px";
        countdownDisplay.style.zIndex = "1000";
        countdownDisplay.style.fontSize = "20px";
        countdownDisplay.style.color = "white";
        countdownDisplay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        countdownDisplay.style.padding = "8px 14px";
        countdownDisplay.style.borderRadius = "10px";
        countdownDisplay.style.fontWeight = "bold";
        countdownDisplay.style.boxShadow = "0 2px 8px rgba(0,0,0,0.5)";

        leaderboardElement.appendChild(countdownDisplay);

        sortTimeout = setInterval(() => {
            countdown -= countdownInterval;
            countdownDisplay.textContent = `Sorting in ${(countdown / 1000).toFixed(1)} seconds`;

            if (countdown <= 0) {
                clearInterval(sortTimeout);
                leaderboardData.sort((a, b) => {
                    if (a.score !== b.score) {
                        return b.score - a.score;
                    } else {
                        return a.name.localeCompare(b.name);
                    }
                });
                updateLeaderboard();
                leaderboardElement.removeChild(countdownDisplay);
            }
        }, countdownInterval);
    }
}

function updateScoreWithAnimation(index, change) {
    leaderboardData[index].score += change;
    updateLeaderboard();
}

function createButton(text, onClick) {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", onClick);
    button.style.marginRight = "5px";
    button.style.border = "1px solid black";
    button.style.color = "black";
    button.style.backgroundColor = "white";
    button.style.height = "40px";
    button.style.width = "40px";
    button.style.borderRadius = "50%";
    button.style.cursor = "pointer";
    return button;
}

function deletePlayer(index) {
    leaderboardData.splice(index, 1);
    updateLeaderboard();
    if (leaderboardData.length < MAX_PLAYERS) {
        playerNamesInput.placeholder = "Enter Player Name";
        playerNamesInput.disabled = false;
    }
}

// Event Listeners
playerNamesInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        handlePlayerInput();
    }
});

submitplayerButton.addEventListener("click", function () {
    handlePlayerInput();
});



























    //TETRIS
    const tetris = document.getElementById("tetris");
