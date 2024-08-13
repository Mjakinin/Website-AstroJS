var showPopup = true; //URLAUB

if (showPopup) {
  // Show popup and overlay
  window.onload = function() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('popup-overlay').style.display = 'block';
  };

  // Close popup and overlay
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popup-overlay').style.display = 'none';
  }

  // Add event listener to overlay
  document.getElementById('popup-overlay').addEventListener('click', closePopup);

  // Add event listener to close button
  document.querySelector('.close-btn').addEventListener('click', closePopup);

  // Add event listener to document body to detect clicks outside popup
  document.body.addEventListener('click', function(event) {
    if (!event.target.closest('.popup-content')) {
      closePopup();
    }
  });
}