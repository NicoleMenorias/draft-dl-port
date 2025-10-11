// --- Animated Tabs with Gradient Motion ---
document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  // Create underline indicator
  const indicator = document.createElement("div");
  indicator.className = "tab-indicator";
  document.querySelector(".tab-buttons").appendChild(indicator);

  // Move indicator under active button
  const moveIndicator = (btn) => {
    const rect = btn.getBoundingClientRect();
    const parentRect = btn.parentElement.getBoundingClientRect();
    indicator.style.width = rect.width + "px";
    indicator.style.transform = `translateX(${rect.left - parentRect.left}px)`;
  };

  // Initialize
  const active = document.querySelector(".tab-btn.active");
  if (active) moveIndicator(active);

  // Tab click
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("active")) return;

      tabButtons.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active", "fade-in"));

      btn.classList.add("active");
      moveIndicator(btn);

      const target = document.getElementById(btn.dataset.tab);
      target.classList.add("active", "fade-in");
    });
  });

  // Animate cards on scroll
  const cards = document.querySelectorAll(".card");
  const revealCards = () => {
    const triggerBottom = window.innerHeight * 0.85;
    cards.forEach(card => {
      const top = card.getBoundingClientRect().top;
      if (top < triggerBottom) {
        card.classList.add("visible");
      } else {
        card.classList.remove("visible");
      }
    });
  };
  window.addEventListener("scroll", revealCards);
  revealCards();
});
