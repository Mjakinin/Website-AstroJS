document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('.page');
  
  // Sicherstellen, dass die Seite sichtbar ist, wenn sie geladen wird
  page.classList.add('page-visible');
  
  // Optional: Füge eine Event-Listener für den Seitenwechsel hinzu
  window.addEventListener('beforeunload', () => {
    page.classList.remove('page-visible');
    page.classList.add('page-hidden');
  });
});