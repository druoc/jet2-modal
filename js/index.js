/*waits till the full document has loaded, 
then sets the modal-trigger-button and modal to variables, 
then adds an event listener to the button to make the modal appear when clicked*/
document.addEventListener("DOMContentLoaded", () => {
  const modalTriggerBtn = document.querySelector(".modal-trigger-btn");
  const modalCancelBtn = document.querySelector(".modal__buttons-top");
  const modal = document.querySelector(".modal");

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
});
