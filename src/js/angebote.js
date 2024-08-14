/*
//ANGEBOTE
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
const checkpoints = document.querySelectorAll('.checkpoint');
const sections = document.querySelectorAll('section');

// Funktion, um die Positionen der Sections zu berechnen
function calculateSectionPositions() {
  const sectionPositions = Array.from(sections).map((section) => {
    return section.offsetTop;
  });
  return sectionPositions;
}

// Funktion, um den Fortschritt der Scrollbar zu berechnen
function calculateProgress() {
  const scrollPosition = window.scrollY;
  const sectionPositions = calculateSectionPositions();
  const progressHeight = progressBar.offsetHeight;
  const documentHeight = document.body.offsetHeight;
  const windowHeight = window.innerHeight;

  let progressValue = 0;
  let currentCheckpoint = 0;

  for (let i = 0; i < sectionPositions.length; i++) {
    if (scrollPosition >= sectionPositions[i] - windowHeight / 2) {
      currentCheckpoint = i;
    }
  }

  const currentSectionHeight = sectionPositions[currentCheckpoint + 1] - sectionPositions[currentCheckpoint];
  const progressInSection = (scrollPosition - (sectionPositions[currentCheckpoint] - windowHeight / 2)) / currentSectionHeight;
  progressValue = (currentCheckpoint / (sectionPositions.length - 1)) * progressHeight + (progressInSection * (progressHeight / (sectionPositions.length - 1)));

  progress.style.height = `${progressValue}px`;


  const nearEnd = scrollPosition + windowHeight >= documentHeight - 1000; // adjust the value to your liking
  if (nearEnd) {
    progressBar.classList.add('fading-out');
  } else {
    progressBar.classList.remove('fading-out');
  }

}



// Funktion, um die Checkpoints zu aktivieren
function activateCheckpoints() {
  const scrollPosition = window.scrollY;
  const sectionPositions = calculateSectionPositions();

  checkpoints.forEach((checkpoint, index) => {
    const sectionPosition = sectionPositions[index];
    if (scrollPosition >= sectionPosition - window.innerHeight / 2) {
      checkpoint.classList.add('active');
      checkpoint.querySelector('span').textContent = `${index + 1}`; // update the span text content
    } else {
      checkpoint.classList.remove('active');
      checkpoint.querySelector('span').textContent = ''; // reset the span text content
    }
  });
}


// Event-Listener für das Scrollen
window.addEventListener('scroll', () => {
  calculateProgress();
  activateCheckpoints();
});*/
