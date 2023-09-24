const modalBg = document.querySelector(".contacts");
const modal = document.querySelector(".modal"); //
const openModalButton = document.querySelector(".contacts__btn");
const closeModalButton = document.querySelector(".modal__cancel-btn");

openModalButton.addEventListener("click", (e) => {
  e.preventDefault();
  modalBg.classList.add("active");
  modal.classList.add("active");
});

closeModalButton.addEventListener("click", () => {
  modalBg.classList.remove("active");
  modal.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target === modalBg) {
    modalBg.classList.remove("active");
    modal.classList.remove("active");
  }
});
