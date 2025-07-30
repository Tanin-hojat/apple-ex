  const slider = document.getElementById('slider');
  const bulletsContainer = document.getElementById('bullets');
  const totalImages = 10;
  let currentIndex = 0;
  let direction = 1;
  let interval;

  // ساخت بولت‌ها
  for (let i = 0; i < totalImages; i++) {
    const bullet = document.createElement('div');
    bullet.classList.add('bullet');
    bullet.dataset.index = i;
    bullet.addEventListener('click', () => {
      currentIndex = i;
      direction = 1;
      updateSlider();
      resetInterval();
    });
    bulletsContainer.appendChild(bullet);
  }

  const bullets = document.querySelectorAll('.bullet');
  const images = slider.querySelectorAll('img');

  function updateSlider() {
    slider.style.transform = `translateX(-${(currentIndex * (80 + 2))}vw)`; // عکس 80vw + فاصله 2vw تقریبی

    bullets.forEach((b, i) => {
      b.classList.toggle('active', i === currentIndex);
    });

    images.forEach((img, i) => {
      img.classList.toggle('active', i === currentIndex);
    });

    currentIndex += direction;
    if (currentIndex >= totalImages) {
      direction = -1;
      currentIndex = totalImages - 2;
    } else if (currentIndex < 0) {
      direction = 1;
      currentIndex = 1;
    }
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(updateSlider, 5000);
  }

  // شروع
  updateSlider();
  interval = setInterval(updateSlider, 5000);

  document.querySelectorAll('footer .containe2222222 p').forEach(p => {
    p.addEventListener('click', () => {
      const nextUl = p.nextElementSibling;
      if (nextUl && nextUl.tagName === 'UL') {
        nextUl.classList.toggle('open');
        p.classList.toggle('open');
      }
    });
  });

    const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.custom-header nav');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });