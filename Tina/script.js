const heartsContainer = document.querySelector('.hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 7 + 's'; // Thời gian rơi ngẫu nhiên từ 7-10s
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000); // Loại bỏ trái tim sau 10 giây
}

setInterval(createHeart, 300); // Tạo trái tim mỗi 0.3 giây

document.querySelector('.heart-button').addEventListener('click', () => {
  window.location.href = "tina.html"; // Chuyển đến trang khác khi click button
});
