const img1 = document.querySelector(".image1");
const img2 = document.querySelector(".image2");

// Проверка существования элементов во избежание ошибок
if (img1 && img2) {
  window.addEventListener("scroll", () => {
    // Вычисляем прогресс (скролл от 0 до 20% высоты экрана)
    const maxScroll = window.innerHeight * 0.2;
    const progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
    // Применяем прозрачность
    img1.style.opacity = 1 - progress;
    img2.style.opacity = progress;
  });
}

