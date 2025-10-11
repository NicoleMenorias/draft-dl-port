// Custom interactive glow effect
document.addEventListener("mousemove", e => {
  const cards = document.querySelectorAll(".gallery-card");
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background = `
      radial-gradient(circle at ${x}px ${y}px,
      rgba(255,255,255,0.15),
      rgba(255,255,255,0.05))
    `;
  });
});

// Glow effect on hover
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('mouseenter', () => {
    tab.classList.add('active');
  });
  tab.addEventListener('mouseleave', () => {
    tab.classList.remove('active');
  });
});
