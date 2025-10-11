/* ================================
   🚀 Custom Interactivity Script
   For Jupyter Book Portfolio Tabs
   ================================ */

// Dynamically handle tab switching based on TOC structure
function navigateTab(path) {
  const base = window.location.origin + window.location.pathname.split('/').slice(0, -2).join('/');
  const newPath = `${base}/${path}`.replace(/\/+/g, '/');
  window.location.href = newPath;
}

// Open notebooks directly (supports .ipynb in subfolders)
function navigateToNotebook(path) {
  const base = window.location.origin + window.location.pathname.split('/').slice(0, -2).join('/');
  const newPath = `${base}/${path}`.replace(/\/+/g, '/');
  window.location.href = newPath;
}

// Animate tab selection
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const currentPath = window.location.pathname.toLowerCase();

  tabs.forEach(tab => {
    const href = tab.getAttribute("onclick") || "";
    if (href.toLowerCase().includes("lectures") && currentPath.includes("lectures")) {
      tab.classList.add("active");
    } else if (href.toLowerCase().includes("laboratories") && currentPath.includes("laboratories")) {
      tab.classList.add("active");
    } else if (href.toLowerCase().includes("projects") && currentPath.includes("projects")) {
      tab.classList.add("active");
    }

    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });

  // Add smooth fade animation for section intro
  const section = document.querySelector(".section-intro");
  if (section) {
    section.style.opacity = 0;
    setTimeout(() => {
      section.style.transition = "opacity 0.8s ease-in-out";
      section.style.opacity = 1;
    }, 200);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".gallery-card");
  cards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    });
  });
});

function navigateToNotebook(path) {
  // If using Jupyter Book, .ipynb notebooks are converted to .html automatically
  const notebookHtml = path.replace(".ipynb", ".html");
  window.location.href = `/${notebookHtml}`;
}

