let isScrolling = false;
let targetPosition = null;
let originalOverflow;

function startAutoScroll(event) {
    if (isScrolling) {
        return;
    }
    isScrolling = true;

    // Verhindert Scrollen während des automatischen Scrollens
    document.body.style.overflow = 'hidden'; // Immer auf hidden setzen

    const maxScroll = document.body.scrollHeight - window.innerHeight;
    console.log("Max scroll height calculated as:", maxScroll);

    if (event.deltaY > 0) {
        // Scrollen nach unten
        targetPosition = maxScroll;
        console.log("Scrolling down to max scroll height:", maxScroll);
    } else {
        // Scrollen nach oben
        targetPosition = 0;
        console.log("Scrolling up to the top.");
    }

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
    // Überprüfe, ob das Scrollen abgeschlossen ist
    checkScrollEnd();
}

function checkScrollEnd() {
    if (Math.abs(window.scrollY - targetPosition) < 1) {
        isScrolling = false;
    } else {
        requestAnimationFrame(checkScrollEnd);
    }
}

function initAutoScroll() {
    // Überprüfe die URL und Fenstergröße
    if (window.location.pathname === '/' && window.innerWidth >= 1280) {
        // Setze den Overflow-Stil auf hidden
        document.body.style.overflow = 'hidden';
        // Füge den Eventlistener hinzu, um das automatische Scrollen zu starten
        window.addEventListener('wheel', startAutoScroll);
    } else {
        // Stelle den ursprünglichen Overflow-Stil wieder her
        document.body.style.overflow = originalOverflow;
        // Entferne den Eventlistener, wenn die URL nicht "/" ist oder die Fenstergröße kleiner als 1280px
        window.removeEventListener('wheel', startAutoScroll);
    }
}

// Speichere den ursprünglichen Overflow-Stil
originalOverflow = document.body.style.overflow;

// Initialisiere das Skript
initAutoScroll();

// Überwache Änderungen der Fenstergröße und URL
window.addEventListener('resize', initAutoScroll);
window.addEventListener('load', initAutoScroll); // Überprüfe die URL beim Laden der Seite

const autoScrollBtn = document.getElementById('autoscroll');

const autoScrollBtn1 = document.getElementById('auto-scroll-btn');



if (autoScrollBtn) {
    console.log("Auto-scroll button found.");
    autoScrollBtn.addEventListener('click', () => {
        console.log("Auto-scroll button clicked.");
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        checkScrollEnd();
    });
}
if (autoScrollBtn1) {
    console.log("Auto-scroll button found.");
    autoScrollBtn1.addEventListener('click', () => {
        console.log("Auto-scroll button clicked.");
        window.scrollTo({
            top: document.body.scrollHeight - window.innerHeight,
            behavior: 'smooth'
        });
        checkScrollEnd();
    });
}
else {
    console.log("Auto-scroll button not found.");
}
