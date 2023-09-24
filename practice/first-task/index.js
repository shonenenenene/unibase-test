const modalBg = document.querySelector(".contacts"); // Фон попап окна
const modal = document.querySelector(".modal"); // Само окно
const openModalButton = document.querySelector(".contacts__btn"); // Кнопки для показа окна
const closeModalButton = document.querySelector(".modal__cancel-btn"); // Кнопка для скрытия окна

openModalButton.addEventListener("click", (e) => {
  // Для каждой вешаем обработчик событий на клик
  e.preventDefault(); // Предотвращаем дефолтное поведение браузера
  modalBg.classList.add("active"); // Добавляем класс 'active' для фона
  modal.classList.add("active"); // И для самого окна
});

closeModalButton.addEventListener("click", () => {
  // Вешаем обработчик на крестик
  modalBg.classList.remove("active"); // Убираем активный класс с фона
  modal.classList.remove("active"); // И с окна
});

document.addEventListener("click", (e) => {
  // Вешаем обработчик на весь документ
  if (e.target === modalBg) {
    // Если цель клика - фот, то:
    modalBg.classList.remove("active"); // Убираем активный класс с фона
    modal.classList.remove("active"); // И с окна
  }
});
