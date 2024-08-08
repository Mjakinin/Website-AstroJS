
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









































    //SNOOKER
    const snooker = document.getElementById("snooker");
    const playerNamesInput = document.getElementById(
        "playerNamesInput"
    );
    const submitplayerButton = document.getElementById("submitplayerButton");

    function handlePlayerInput() {
        const playerName = playerNamesInput.value.trim(); // Spielername erfassen und Leerzeichen entfernen
        if (leaderboardData.length < 5) {
            if (playerName.length > 0) {
                // Neuen Spieler zum Leaderboard hinzufügen
                addPlayerToLeaderboard(playerName);
                // Eingabefeld zurücksetzen
                playerNamesInput.value = "";
            }
        } else {
            playerNamesInput.placeholder = "Max. Player Reached"; // Platzhalter aktualisieren
        }
        // Fokus wieder auf das Eingabefeld setzen
        playerNamesInput.focus();
    }
    // Leaderboard-Datenstruktur
    let leaderboardData = [];

    // Funktion zum Hinzufügen eines Spielers zum Leaderboard
    function addPlayerToLeaderboard(playerName) {
        // Neuen Spieler erstellen
        const newPlayer = {
            name: playerName,
            score: 0,
        };

        // Spieler zum Leaderboard hinzufügen
        leaderboardData.push(newPlayer);

        leaderboardData.sort((a, b) => a.name.localeCompare(b.name));

        // Leaderboard aktualisieren
        updateLeaderboard();

        // Platzhalter aktualisieren, wenn die maximale Spieleranzahl erreicht ist
        if (leaderboardData.length === 5) {
            playerNamesInput.placeholder = "Max. Player Reached";
            playerNamesInput.disabled = true; // Eingabefeld deaktivieren
        }
    }

    // Funktion zum Aktualisieren des Leaderboards
    let sortTimeout; // Variable zum Speichern des Timer-Handles

    function updateLeaderboard() {
        // Leaderboard-Element auswählen oder erstellen
        let leaderboardElement = document.querySelector(
            "#leaderboard"
        );
        if (!leaderboardElement) {
            leaderboardElement = document.createElement("div");
            leaderboardElement.id = "leaderboard";
            leaderboardElement.classList.add("leaderboard");
            leaderboardElement.style.width = "60%"; // Breite auf die Hälfte der Seite setzen
            leaderboardElement.style.top = "0"; // Leaderboard nach oben setzen
            leaderboardElement.style.marginLeft = "auto"; // Zentrierung
            leaderboardElement.style.marginRight = "auto"; // Zentrierung

            document.body.appendChild(leaderboardElement);
        }
        // Leaderboard-Inhalt aktualisieren
        leaderboardElement.innerHTML = "";

        // Für jeden Spieler im Leaderboard ein Eintrag erstellen
        leaderboardData.forEach((player, index) => {
            const playerEntry = document.createElement("div");
            playerEntry.classList.add("player-entry");
            playerEntry.style.marginBottom = "30px"; // Abstand zwischen den Spielern erhöhen
            playerEntry.style.padding = "10px"; // Innenabstand erhöhen
            playerEntry.style.flexDirection = "column"; // Flexbox-Ausrichtung auf Spalten setzen
            playerEntry.style.backgroundColor = "rgba(255, 255, 255, 0.9)"; // Weißer Hintergrund mit 75% Deckkraft

            // Spielername
            const playerNameElement = document.createElement("span");
            playerNameElement.innerHTML = `${index + 1}&nbsp;&nbsp;&nbsp;${
                player.name
            }`;
            playerNameElement.style.fontSize = "40px"; // Textgröße erhöhen
            playerNameElement.style.color = "black"; // Textfarbe setzen
            playerNameElement.style.flex = "1"; // Spielername flexibel machen
            playerNameElement.style.marginRight = "20px"; // Abstand zwischen Name und Punktzahl

            // Crown SVG-Bild einfügen, wenn der erste Spieler im Leaderboard
            if (index === 0) {
                const crownIcon = document.createElement("img");
                crownIcon.src = "/icons/crown.svg"; // Pfadeinstellung für das crown.svg-Bild
                crownIcon.alt = "Crown Icon";
                crownIcon.style.width = "40px"; // Breite des Kronenbildes
                crownIcon.style.transform = "translate(-9px, 12px)"; // Verschiebung nach links und unten
                crownIcon.style.marginTop = "-10px"; // Ein wenig nach unten verschieben
                crownIcon.style.verticalAlign = "middle"; // Vertikal zentriert
                playerNameElement.insertBefore(
                    crownIcon,
                    playerNameElement.firstChild
                );
            }

            // Punktzahl
            const playerScoreElement = document.createElement("span");
            playerScoreElement.textContent = `${player.score}`;
            playerScoreElement.style.fontSize = "50px"; // Textgröße erhöhen
            playerScoreElement.style.color = "black"; // Textfarbe setzen
            playerScoreElement.style.textAlign = "right"; // Textausrichtung rechts
            playerScoreElement.style.width = "100px"; // Breite festlegen für rechtsbündige Ausrichtung

            // Container für Spielername und Punktzahl
            const playerInfoContainer = document.createElement("div");
            playerInfoContainer.style.display = "flex"; // Flexbox verwenden
            playerInfoContainer.style.alignItems = "center"; // Vertikal zentriert
            playerInfoContainer.style.marginBottom = "10px"; // Abstand zum nächsten Eintrag
            playerInfoContainer.appendChild(playerNameElement);
            playerInfoContainer.appendChild(playerScoreElement);

            playerEntry.appendChild(playerInfoContainer);

            // Buttons zum Ändern der Punktzahl
            const buttonsContainer = document.createElement("div");
            buttonsContainer.classList.add("buttons-container");
            buttonsContainer.style.display = "flex"; // Flexbox verwenden
            buttonsContainer.style.flexDirection = "row"; // Flexbox-Ausrichtung auf Zeilen setzen
            buttonsContainer.style.justifyContent = "flex-end"; // Elemente rechtsbündig ausrichten

            const deleteButton = createButton("❌", () => deletePlayer(index)); // X Symbol
            deleteButton.style.width = "75px"; // Breite verdoppeln
            deleteButton.style.borderRadius = "10%"; // Runde Ecken
            buttonsContainer.appendChild(deleteButton);

            // Buttons zum Ändern der Punktzahl
            const decreaseButton = createButton("-1", () => {
                updateScoreWithAnimation(index, -1);
                handleScoreChange();
            });
            decreaseButton.style.width = "75px"; // Breite verdoppeln
            decreaseButton.style.borderRadius = "10%"; // Runde Ecken
            decreaseButton.style.fontSize = "24px"; // Schriftgröße erhöhen für -1
            buttonsContainer.appendChild(decreaseButton);

            const increaseButton = createButton("+1", () => {
                updateScoreWithAnimation(index, 1);
                handleScoreChange();
            });
            increaseButton.style.width = "75px"; // Breite verdoppeln
            increaseButton.style.borderRadius = "10%"; // Runde Ecken
            increaseButton.style.fontSize = "24px"; // Schriftgröße erhöhen für +1
            buttonsContainer.appendChild(increaseButton);

            const increaseButton5 = createButton("+5", () => {
                updateScoreWithAnimation(index, 5);
                handleScoreChange();
            });
            increaseButton5.style.width = "75px"; // Breite verdoppeln
            increaseButton5.style.borderRadius = "10%"; // Runde Ecken
            increaseButton5.style.fontSize = "24px"; // Schriftgröße erhöhen für +5
            buttonsContainer.appendChild(increaseButton5);

            const increaseButton10 = createButton("+10", () => {
                updateScoreWithAnimation(index, 10);
                handleScoreChange();
            });
            increaseButton10.style.width = "75px"; // Breite verdoppeln
            increaseButton10.style.borderRadius = "10%"; // Runde Ecken
            increaseButton10.style.fontSize = "24px"; // Schriftgröße erhöhen für +10
            buttonsContainer.appendChild(increaseButton10);

            playerEntry.appendChild(buttonsContainer);

            // Spieler zum Leaderboard hinzufügen
            leaderboardElement.appendChild(playerEntry);
        });

        // Funktion zur Behandlung von Punkteänderungen
        function handleScoreChange() {
            // Timer zurücksetzen, falls vorhanden
            if (sortTimeout) {
                clearTimeout(sortTimeout);
            }

            // Timer neu setzen, aber nur wenn eine Änderung vorgenommen wurde
            let countdown = 2000; // Startzeit des Timers in Millisekunden
            const countdownInterval = 100; // Intervall für die Aktualisierung des Countdowns

            const countdownDisplay = document.createElement("div");
            leaderboardElement.appendChild(countdownDisplay);

            sortTimeout = setInterval(() => {
                countdown -= countdownInterval;
                countdownDisplay.textContent = `Sorting in ${(
                    countdown / 1000
                ).toFixed(1)} seconds`; // Countdown aktualisieren

                if (countdown <= 0) {
                    clearInterval(sortTimeout); // Timer stoppen, wenn der Countdown abgelaufen ist
                    leaderboardData.sort((a, b) => {
                        // Zuerst nach Punktzahl sortieren
                        if (a.score !== b.score) {
                            return b.score - a.score;
                        } else {
                            // Wenn die Punktzahlen gleich sind, nach Namen sortieren
                            return a.name.localeCompare(b.name);
                        }
                    });

                    // Leaderboard neu rendern, um die sortierte Reihenfolge anzuzeigen
                    updateLeaderboard();

                    leaderboardElement.removeChild(countdownDisplay); // Countdown-Anzeige entfernen
                }
            }, countdownInterval);
        }
    }

    // Funktion zum Aktualisieren der Punktzahl eines Spielers mit Animation
    function updateScoreWithAnimation(index, change) {
        leaderboardData[index].score += change;
        updateLeaderboard();
    }

    // Funktion zum Erstellen eines Buttons
    function createButton(text, onClick) {
        const button = document.createElement("button");
        button.textContent = text;
        button.addEventListener("click", onClick);
        button.style.marginRight = "10px"; // Abstand zwischen den Buttons
        button.style.border = "1px solid black"; // Schwarze runde Border
        button.style.color = "black"; // Textfarbe setzen
        button.style.height = "50px"; // Button-Höhe setzen
        return button;
    }

    // Funktion zum Löschen eines Spielers aus dem Leaderboard
    function deletePlayer(index) {
        leaderboardData.splice(index, 1);
        updateLeaderboard();
        if (leaderboardData.length < 5) {
            // Prüfen, ob weniger als 5 Spieler im Leaderboard sind
            playerNamesInput.placeholder = "Enter Player Name"; // Platzhalter zurücksetzen
            playerNamesInput.disabled = false; // Eingabefeld aktivieren
        }
    }
    // Handle player names input
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
