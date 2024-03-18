let dark = true; // or false, depending on your needs

class PageHandler {
  constructor() {
    if (localStorage.getItem("theme") == "dark") {
      document.documentElement.classList.add("dark");
    }

    this.setThemeIcon();

    document.querySelector("#colorSwitch").addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");

      if (localStorage.getItem("theme") == "dark") {
        localStorage.setItem("theme", "");
      } else {
        localStorage.setItem("theme", "dark");
      }

      this.setThemeIcon();
      this.setLogo();
    });
  }

  setThemeIcon() {
    let colorSwitch = document.querySelector("#colorSwitch");
    if (colorSwitch === null) return;

    if (localStorage.getItem("theme") == "dark") {
      colorSwitch.innerHTML = `
        <img src="/icons/moon.svg?a=${Math.random()}" alt="moon" class="w-6 h-6" />
      `;
    } else {
      colorSwitch.innerHTML = `
        <img src="/icons/sun.svg?a=${Math.random()}" alt="sun" class="w-6 h-6" />
      `;
    }
  }

  setLogo() {
    const logoImage = document.querySelector("#logotest");
    if (logoImage === null) return;

    if (localStorage.getItem("theme") == "dark") {
      logoImage.innerHTML = `
        <img src="/icons/logo.svg?a=${Math.random()}" alt="logo" class="w-96 h-96" />
      `;
    } else {
      logoImage.innerHTML = `
        <img src="/icons/logo.svg?a=${Math.random()}" alt="logo" class="w-6 h-6" />
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
    let cursorVisible = true;
  
    // Function to toggle cursor visibility
    let toggleCursor = () => {
      cursorVisible = !cursorVisible;
      if (cursorVisible) {
        dynamicHeaderElement.innerHTML = currentText + '<span style="color: #D1D1D1;">|</span>';
      } else {
        dynamicHeaderElement.innerHTML = currentText + '<span style="color: #1b1b1b;">|</span>';
      }
    };
  
    // Call toggleCursor every 500ms to blink the cursor when there's no activity
    setInterval(toggleCursor, 500);
  
    let typeWriter = () => {
      currentWord = textArray[i];
  
      if (isDeleting) {
        currentText = currentWord.substring(0, currentText.length - 1);
      } else {
        currentText = currentWord.substring(0, currentText.length + 1);
      }
  
      dynamicHeaderElement.innerHTML = currentText + (cursorVisible && !isDeleting ? '<span style="color: #D1D1D1;">|</span>' : '');
  
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
  pageHandler.applyTextEffects();
  pageHandler.setLogo(); // Set logo based on initial theme
};

document.addEventListener("DOMContentLoaded", () => init());

const swup = new Swup({
  animationSelector: '[class*="swuptransition-"]',
  plugins: [new SwupA11yPlugin(), new SwupHeadPlugin(), new SwupScrollPlugin()],
});

swup.on("contentReplaced", init);