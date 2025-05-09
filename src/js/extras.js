
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
        if (leaderboardData.length === 4) {
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
            leaderboardElement.style.marginTop = "-20px";
            leaderboardElement.style.marginLeft = "auto"; // Zentrierung
            leaderboardElement.style.marginRight = "auto"; // Zentrierung

            snooker.appendChild(leaderboardElement);
        }
        // Leaderboard-Inhalt aktualisieren
        leaderboardElement.innerHTML = "";

        // Für jeden Spieler im Leaderboard ein Eintrag erstellen
        leaderboardData.forEach((player, index) => {
            const playerEntry = document.createElement("div");
            playerEntry.classList.add("player-entry");
            playerEntry.style.marginBottom = "30px"; // Abstand zwischen den Spielern erhöhen
            playerEntry.style.minHeight = "120px"; // Einheitliche Höhe für alle
            playerEntry.style.display = "flex"; // Flexbox-Ausrichtung
            playerEntry.style.flexDirection = "column";
            playerEntry.style.justifyContent = "center"; // Inhalte vertikal zentrieren
            playerEntry.style.padding = "10px";

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
                crownIcon.style.transform = "translate(-9px, 0px)"; // Verschiebung nach links und unten
                crownIcon.style.marginTop = "0px"; // Ein wenig nach unten verschieben
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
            buttonsContainer.style.display = "flex";
            buttonsContainer.style.flexWrap = "wrap";
            buttonsContainer.style.gap = "10px";
            buttonsContainer.style.marginTop = "10px";

            // Funktion zur Erstellung runder farbiger Buttons
            function createColoredButton(text, scoreChange, bgColor) {
                const btn = document.createElement("button");
                btn.textContent = text;
                btn.onclick = () => {
                    updateScoreWithAnimation(index, scoreChange);
                    handleScoreChange();
                };
                btn.style.width = "50px";
                btn.style.height = "50px";
                btn.style.borderRadius = "50%";
                btn.style.border = "1px solid black";
                btn.style.backgroundColor = bgColor;
                btn.style.color = "white";
                btn.style.fontWeight = "bold";
                btn.style.fontSize = "16px";
                btn.style.cursor = "pointer";
                return btn;
            }

            // ❌ Delete Button
            const deleteButton = createButton("❌", () => deletePlayer(index));
            deleteButton.style.width = "50px";
            deleteButton.style.height = "50px";
            deleteButton.style.borderRadius = "50%";
            buttonsContainer.appendChild(deleteButton);

            // Strafen
            buttonsContainer.appendChild(createColoredButton("-1", -1, "#666"));
            buttonsContainer.appendChild(createColoredButton("-4", -4, "#555"));

            // Farbenpunkte nach Snooker-Regeln
            buttonsContainer.appendChild(createColoredButton("+1", 1, "red"));
            buttonsContainer.appendChild(createColoredButton("+2", 2, "#e0c200")); // leicht dunkleres Gelb
            buttonsContainer.appendChild(createColoredButton("+3", 3, "green"));
            buttonsContainer.appendChild(createColoredButton("+4", 4, "brown"));
            buttonsContainer.appendChild(createColoredButton("+5", 5, "blue"));
            buttonsContainer.appendChild(createColoredButton("+6", 6, "purple"));
            buttonsContainer.appendChild(createColoredButton("+7", 7, "black"));

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
            countdownDisplay.style.position = "fixed";
            countdownDisplay.style.top = "20px";
            countdownDisplay.style.right = "20px";
            countdownDisplay.style.zIndex = "1000"; // damit es über allem liegt
            
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
        button.style.marginRight = "10px";
        button.style.border = "1px solid black";
        button.style.color = "black";
        button.style.backgroundColor = "white";
        button.style.height = "50px";
        button.style.width = "50px";
        button.style.borderRadius = "50%"; // Rund
        button.style.cursor = "pointer";
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
