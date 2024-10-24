(() => {
  const openModalButtons = document.querySelectorAll(
    "[data-modal-open], .about-btn, .prices-btn"
  );
  const modal = document.querySelector("[data-modal]");
  const closeModalButton = document.querySelector("[data-modal-close]");

  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modal.classList.remove("is-hidden");
    });
  });

  closeModalButton.addEventListener("click", () => {
    modal.classList.add("is-hidden");
  });
})();
