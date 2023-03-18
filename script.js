const player = document.getElementById('player');
const gameContainer = document.getElementById('game-container');

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    jump();
  }
});

function jump() {
  if (player.classList.contains('jump')) return;
  player.classList.add('jump');

  setTimeout(() => {
    player.classList.remove('jump');
  }, 500);
}