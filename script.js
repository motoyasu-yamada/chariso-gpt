const player = document.getElementById('player');
const gameContainer = document.getElementById('game-container');
const obstacle = document.getElementById('obstacle');
const scoreDisplay = document.getElementById('score');
let score = 0;

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

function moveObstacle() {
  obstacle.style.right = parseInt(obstacle.style.right) + 5 + 'px';

  if (parseInt(obstacle.style.right) > gameContainer.clientWidth) {
    obstacle.style.right = '-30px';
    score++;
    scoreDisplay.textContent = `スコア: ${score}`;
  }

  if (isColliding(player, obstacle)) {
    alert('ゲームオーバー！リロードしてもう一度挑戦してください。');
    location.reload();
  }

  setTimeout(moveObstacle, 20);
}

function isColliding(element1, element2) {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  return !(
    rect1.top > rect2.bottom ||
    rect1.bottom < rect2.top ||
    rect1.left > rect2.right ||
    rect1.right < rect2.left
  );
}

// ゲーム開始時に障害物を動かす
obstacle.style.right = '-30px';
moveObstacle();