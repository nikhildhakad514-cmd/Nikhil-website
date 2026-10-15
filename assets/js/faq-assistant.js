(() => {
  const root = document.querySelector("[data-faq-assistant]");
  if (!root) return;

  const launcher = root.querySelector(".faq-launcher");
  const panel = root.querySelector(".faq-panel");
  const closeButton = root.querySelector(".faq-close");
  const questions = Array.from(root.querySelectorAll(".faq-question"));
  const answers = Array.from(root.querySelectorAll(".faq-answer"));

  const setOpen = (open, restoreFocus = false) => {
    panel.hidden = !open;
    launcher.setAttribute("aria-expanded", String(open));
    launcher.setAttribute("aria-label", open ? "Close portfolio FAQ assistant" : "Open portfolio FAQ assistant");
    if (open) closeButton.focus();
    else if (restoreFocus) launcher.focus();
  };

  launcher.addEventListener("click", () => {
    setOpen(panel.hidden);
  });

  closeButton.addEventListener("click", () => setOpen(false, true));

  questions.forEach((question, index) => {
    question.addEventListener("click", () => {
      const shouldOpen = question.getAttribute("aria-expanded") !== "true";
      questions.forEach((item, itemIndex) => {
        const isOpen = itemIndex === index && shouldOpen;
        item.setAttribute("aria-expanded", String(isOpen));
        answers[itemIndex].hidden = !isOpen;
      });
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) setOpen(false, true);
  });

  document.addEventListener("click", (event) => {
    if (!panel.hidden && !root.contains(event.target)) setOpen(false);
  });
})();
