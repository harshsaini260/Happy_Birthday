
function createConfetti() {
  const container = document.body;
  for (let i = 0; i < 150; i++) {
    const conf = document.createElement('div');
    conf.classList.add('confetti-piece');
    conf.style.left = Math.random() * 100 + '%';
    conf.style.background = `hsl(${Math.random() * 360}, 70%, 50%)`;
    conf.style.animationDuration = 2 + Math.random() * 3 + 's';
    container.appendChild(conf);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const yesBtn = document.getElementById('yes-btn');
  const noBtn = document.getElementById('no-btn');
  if (yesBtn) yesBtn.addEventListener('click', () => window.location.href = 'wise.html');
  if (noBtn) noBtn.addEventListener('click', () => {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('shake');
    setTimeout(() => overlay.classList.remove('shake'), 500);
  });
  if (window.location.pathname.includes('surprise.html')) createConfetti();
});

// —————— Background Music Toggle ——————
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');

// Set initial volume (optional)
bgMusic.volume = 0.5;

musicToggle.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.textContent = '🔇';
  } else {
    bgMusic.pause();
    musicToggle.textContent = '🔊';
  }
});
