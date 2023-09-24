const modalBg = document.querySelector(".contacts");
const modal = document.querySelector(".modal"); //
const openModalButton = document.querySelector(".contacts__btn");
const closeModalButton = document.querySelector(".modal__cancel-btn");

const sendFormButton = document.querySelector(".modal__send-btn");

const form = document.querySelector(".modal__form");

// const orgNameInput = document.querySelector(".modal__org-input");
// const phoneInput = document.querySelector(".modal__phone-input");
// const mailInput = document.querySelector(".modal__mail-input");
// const directionInput = document.querySelector(".modal__direction-input");

const reqInputs = document.querySelectorAll(".req-input");

openModalButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  modalBg.classList.add("active");
  modal.classList.add("active");
});

closeModalButton.addEventListener("click", () => {
  modalBg.classList.remove("active");
  modal.classList.remove("active");
});

document.addEventListener("click", (ev) => {
  if (ev.target === modalBg) {
    modalBg.classList.remove("active");
    modal.classList.remove("active");
  }
});

const phonePattern = /^\+7 \d{3} \d{3}-\d{2}-\d{2}$/;

[...reqInputs].map((el) => {
  el.addEventListener("input", () => {
    console.log(el.name);
    switch (el.name) {
      case "org":
        if (!el.value) {
          el.classList.add("invalid");
          sendFormButton.disabled = true;
        } else {
          el.classList.remove("invalid");
          sendFormButton.disabled = false;
        }
      case "phone":
        if (!phonePattern.test(el.value)) {
          el.classList.add("invalid");
          sendFormButton.disabled = true;
        } else {
          el.classList.remove("invalid");
          sendFormButton.disabled = false;
        }
      case "mail":
        if (!el.value) {
          el.classList.add("invalid");
          sendFormButton.disabled = true;
        } else {
          el.classList.remove("invalid");
          sendFormButton.disabled = false;
        }
      case "directions":
        if (!el.value) {
          el.classList.add("invalid");
          sendFormButton.disabled = true;
        } else {
          el.classList.remove("invalid");
          sendFormButton.disabled = false;
        }
      default:
        return;
    }
  });
});
