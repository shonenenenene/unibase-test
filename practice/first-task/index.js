const modalBg = document.querySelector(".contacts");
const modal = document.querySelector(".modal");
const openModalButton = document.querySelector(".contacts__btn");
const closeModalButton = document.querySelector(".modal__cancel-btn");

const sendFormButton = document.querySelector(".modal__send-btn");

const form = document.querySelector(".modal__form");

const reqInputs = document.querySelectorAll(".req-input");

openModalButton.addEventListener("click", (ev) => {
  modalBg.classList.add("active");
  modal.classList.add("active");
});

closeModalButton.addEventListener("click", () => {
  modalBg.classList.remove("active");
  modal.classList.remove("active");
  window.scrollBy(0, -20000);
});

document.addEventListener("mousedown", (ev) => {
  if (ev.target === modalBg) {
    modalBg.classList.remove("active");
    modal.classList.remove("active");
    window.scrollBy(0, -20000);
  }
});

form.addEventListener("submit", (ev) => {
  modalBg.classList.remove("active");
  modal.classList.remove("active");
  window.scrollBy(0, -20000);
  ev.preventDefault();
});
