const heartsContainer = document.querySelector('.hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw'; // Vị trí trái tim ngẫu nhiên theo chiều ngang
  heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Thời gian bay ngẫu nhiên từ 3-5 giây
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000); // Loại bỏ trái tim sau 5 giây
}

setInterval(createHeart, 300); // Tạo trái tim mỗi 0.3 giây
