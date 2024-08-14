let isScrolling = false;
let targetPosition = null;
let originalOverflow;

function startAutoScroll(event) {
    if (isScrolling) return;
    isScrolling = true;

    // Verhindert Scrollen während des automatischen Scrollens
    document.body.style.overflow = 'hidden'; // Immer auf hidden setzen

    const maxScroll = document.body.scrollHeight - window.innerHeight;

    if (event.deltaY > 0) {
        // Scrollen nach unten
        targetPosition = maxScroll;
    } else {
        // Scrollen nach oben
        targetPosition = 0;
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
