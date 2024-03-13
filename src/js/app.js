// pageHandler ist die Klasse, die alle Funktionen enthält, die auf der Seite ausgeführt werden sollen.
class PageHandler {
  constructor() {
    // Wenn im localStorage der Wert "theme" auf "dark" gesetzt ist, wird der Klasse "dark" auf dem HTML-Element hinzugefügt.
    if (localStorage.getItem("theme") == "dark") {
      document.documentElement.classList.add("dark");
    }

    // Initiale Funktionen welche beim Laden der Seite ausgeführt werden sollen.
    this.setThemeIcon();

    // Event-Listener für den Dark-Mode-Switch
    // Bei Klick auf den Switch wird die Klasse "dark" auf dem HTML-Element hinzugefügt oder entfernt.
    document.querySelector("#colorSwitch").addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");

      if (localStorage.getItem("theme") == "dark") {
        localStorage.setItem("theme", "");
      } else {
        localStorage.setItem("theme", "dark");
      }

      this.setThemeIcon();
    });
  }

  // Diese Funktion setzt das Icon für den Dark-Mode-Switch.
  setThemeIcon() {
    let colorSwitch = document.querySelector("#colorSwitch");
    if (colorSwitch === null) return;

    if (localStorage.getItem("theme") == "dark") {
      colorSwitch.innerHTML = `
        <img src="/icons/moon.svg?a=${Math.random()}" alt="moon" class="w-6 h-6" />
      `;
    } else {
      colorSwitch.innerHTML = `
        <img src="/icons/sun.svg?a=${Math.random()}" alt="moon" class="w-6 h-6" />
      `;
    }
  }

  // Es werden die Wörter aus dem Array "dynamicHeaderTextArray" nacheinander in das Element geschrieben.
  typeWriterManager(elementId, textArray) {
    let dynamicHeaderElement = document.querySelector(`#${elementId}`);
    if (dynamicHeaderElement === null || !Array.isArray(textArray) || textArray.length === 0) return;

    let i = 0;
    let currentText = '';
    let currentWord = '';
    let isDeleting = false;

    // Nach jedem Durchlauf wird die Funktion erneut aufgerufen. Bei einem Durchlauf wird ein Buchstabe hinzugefügt oder gelöscht.
    // Je nach Situation wird die Funktion nach einem bestimmten Timeout erneut aufgerufen.
    let typeWriter = () => {
      currentWord = textArray[i];

      if (isDeleting) {
        currentText = currentWord.substring(0, currentText.length - 1);
      }

      if (!isDeleting) {
        currentText = currentWord.substring(0, currentText.length + 1);
      }

      dynamicHeaderElement.innerHTML = currentText;

      if (!isDeleting && currentText === currentWord) {
        isDeleting = true;
        setTimeout(typeWriter, 3000);
      } else if (isDeleting && currentText === "") {
        isDeleting = false;
        i++;

        if (i === textArray.length) {
          i = 0;
        }

        setTimeout(typeWriter, 500);
      } else {
        setTimeout(typeWriter, 100);
      }
    };

    typeWriter();
  }

  // Hier werden die dynamischen Texteffekte auf die entsprechenden Elemente angewendet.
  applyTextEffects() {
    const divs = document.querySelectorAll("[id^='dynamic-text']");

    divs.forEach(div => {
      let text = "";
      
      if (div.id === "dynamic-text1") {
        text = "Wer bin ich?";
      }
      if (div.id === "dynamic-text2") {
        text = "Der Schritt in die Selbstständigkeit neben dem Studium";
      }
      if (div.id === "dynamic-text3") {
        text = "Studium in Berlin und gleichzeitig selbständig in Naumburg?";
      }
      if (div.id === "dynamic-text4") {
        text = "Warum die Selbstständigkeit?";
      }
      if (div.id === "dynamic-text5") {
        text = "Menschliche Verbindung im Fokus";
      }
      if (div.id === "dynamic-text6") {
        text = "Was biete ich an?";
      }
      if (div.id === "dynamic-text7") {
        text = "Was mache ich?";
      }
      if (div.id === "dynamic-text8") {
        text = "Was spricht für mich?";
      }

      function textTypingEffect(element, text, i=0) {
        element.textContent += text[i];
        if (i === text.length - 1) {
          return;
        }
        setTimeout(() => textTypingEffect(element, text, i + 1), 50);
      }

      textTypingEffect(div, text);
    });
  }
}

// Diese Funktion erstellt eine neue Instanz der Klasse PageHandler.
const init = () => {
  const pageHandler = new PageHandler();
  pageHandler.typeWriterManager('dynamic-header-text', ["Maxim", "Informatiker"]);
  pageHandler.applyTextEffects(); // Hier werden die Texteffekte angewendet
};

// Die Funktion init() wird ausgeführt, wenn der DOM geladen wurde.
document.addEventListener("DOMContentLoaded", () => init());

// Swup Page Transition
const swup = new Swup({
  animationSelector: '[class*="swuptransition-"]',
  plugins: [new SwupA11yPlugin(), new SwupHeadPlugin(), new SwupScrollPlugin()],
});

swup.on("contentReplaced", init);
