// Инициализация карусели
$('.carousel').carousel({
  interval: 5000,
  pause: 'hover'
});

// Инициализация анимаций при прокрутке
AOS.init({
  duration: 1000,
  once: true
});
