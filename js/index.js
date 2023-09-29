/*waits till the full document has loaded, 
then sets the buttons and modal to variables, 
then adds an event listener and function to the relevant buttons*/
document.addEventListener("DOMContentLoaded", () => {
  const modalTriggerBtn = document.querySelector(".modal-trigger-btn");
  const modalCancelBtn = document.querySelector(".modal__buttons-cancel");
  const modal = document.querySelector(".modal");
  const continueBtn = document.querySelector(".modal__buttons-continue");

  let originalDisplay = "";

  modalTriggerBtn.addEventListener("click", () => {
    originalDisplay = getComputedStyle(modalTriggerBtn).display;
    modalTriggerBtn.style.display = "none";
    modal.classList.remove("hidden");
  });

  modalCancelBtn.addEventListener("click", () => {
    modalTriggerBtn.style.display = originalDisplay;
    modal.classList.add("hidden");
  });

  continueBtn.addEventListener("click", () => {
    window.location.href = "https://www.jet2holidays.com";
  });
});
