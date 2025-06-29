// Увеличение постера при клике
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
  
    items.forEach(item => {
      item.addEventListener('click', () => {
        const bgImage = window.getComputedStyle(item).backgroundImage;
  
        const overlay = document.createElement('div');
        overlay.classList.add('fullscreen-overlay');
  
        const bigItem = document.createElement('div');
        bigItem.classList.add('fullscreen-image');
        bigItem.style.backgroundImage = bgImage;
  
        overlay.appendChild(bigItem);
        document.body.appendChild(overlay);
  
        overlay.addEventListener('click', () => {
          overlay.remove();
        });
      });
    });
  });

// переход на страницу 404 
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.submit_btn, .submit_btn2');
  
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = '404page.html'; 
      });
    });
  });
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('404page.html')) {
      document.body.addEventListener('click', () => {
        if (window.history.length > 1) {
          window.history.back();
        } else {
          window.location.href = 'index.html'; 
        }
      });
    }
  });


// Цветы на сайте
  document.addEventListener('DOMContentLoaded', () => {
    const images = ['images/flower1.svg', 'images/flower2.svg'];
    const numFlowers = 10; 
  
    for (let i = 0; i < numFlowers; i++) {
      const img = document.createElement('img');
      img.src = images[Math.floor(Math.random() * images.length)];
      img.style.position = 'fixed';
      img.style.width = '40px';
      img.style.height = '40px';
      img.style.pointerEvents = 'none'; 
      img.style.top = `${Math.random() * 100}vh`;
      img.style.left = `${Math.random() * 100}vw`;
      img.style.zIndex = 9999;
      img.style.willChange = 'transform';
      document.body.appendChild(img);
  
      animateFlower(img);
    }
  
    function animateFlower(el) {
      let x = parseFloat(el.style.left);
      let y = parseFloat(el.style.top);
      let directionX = (Math.random() * 0.3 + 0.1) * (Math.random() < 0.5 ? -1 : 1);
      let directionY = (Math.random() * 0.3 + 0.1) * (Math.random() < 0.5 ? -1 : 1);
  
      function move() {
        x += directionX;
        y += directionY;
  
        if (x < 0) { x = 0; directionX *= -1; }
        if (x > 100) { x = 100; directionX *= -1; }
        if (y < 0) { y = 0; directionY *= -1; }
        if (y > 100) { y = 100; directionY *= -1; }
  
        el.style.left = x + 'vw';
        el.style.top = y + 'vh';
  
        requestAnimationFrame(move);
      }
      move();
    }
  });