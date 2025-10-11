---
title: "My Portfolio Gallery"
---

# 🧪 Laboratory Experiments

<p align="center">
  <img src="assets/logo.png" alt="Logo" width="120">
</p>

Hands-on coding sessions and applied data experiments.  
Click a laboratory card below to explore each interactive notebook.

<div class="gallery-section">

  <a class="gallery-card" href="../Laboratories/laboratory1.html">
    <h3>Laboratory 1</h3>
    <p>Exploring Data Fundamentals</p>
  </a>

  <a class="gallery-card" href="../Laboratories/laboratory2.html">
    <h3>Laboratory 2</h3>
    <p>Data Visualization and Insights</p>
  </a>

  <a class="gallery-card" href="../Laboratories/laboratory3.html">
    <h3>Laboratory 3</h3>
    <p>Regression Analysis and Forecasting</p>
  </a>

  <a class="gallery-card" href="../Laboratories/laboratory4.html">
    <h3>Laboratory 4</h3>
    <p>Time Series Modeling</p>
  </a>

  <a class="gallery-card" href="../Laboratories/laboratory5.html">
    <h3>Laboratory 5</h3>
    <p>Deep Learning Fundamentals</p>
  </a>

  <a class="gallery-card" href="../Laboratories/laboratory6.html">
    <h3>Laboratory 6</h3>
    <p>Model Evaluation and Deployment</p>
  </a>

</div>

---

<style>
/* === Match JupyterBook's Dark Theme === */
body, .bd-article-container {
  background-color: #000 !important; /* True black background */
  color: #e0e0e0 !important;
}

/* === Page Layout Width Control === */
.bd-article-container {
  max-width: 95% !important;
  margin: 0 auto !important;
  padding: 0 2.5rem !important;
}

/* === Grid Layout (2 per row) === */
.gallery-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  margin-top: 3rem;
  justify-content: center;
}

/* === Glassmorphism Cards (Black/Grey/White Aesthetic) === */
.gallery-card {
  display: block;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 1.5rem;
  padding: 2.5rem;
  text-decoration: none;
  color: #f5f5f5;
  text-align: center;
  backdrop-filter: blur(16px) saturate(120%);
  -webkit-backdrop-filter: blur(16px) saturate(120%);
  transition: all 0.35s ease;
  box-shadow: 0 6px 25px rgba(255, 255, 255, 0.05);
}

/* === Card Titles === */
.gallery-card h3 {
  font-size: 1.4rem;
  margin-bottom: 0.6rem;
  font-weight: 600;
  color: #ffffff;
}

/* === Card Descriptions === */
.gallery-card p {
  font-size: 0.95rem;
  color: #cccccc;
}

/* === Hover Effects (Soft White Glow) === */
.gallery-card:hover {
  transform: translateY(-10px) scale(1.03);
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.15);
}

.gallery-card:hover h3 {
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

.gallery-card:hover p {
  color: #f0f0f0;
}

/* === Headings Glow === */
h1, h2, h3 {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
}

/* === Responsive === */
@media (max-width: 900px) {
  .gallery-section {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .bd-article-container {
    max-width: 100% !important;
    padding: 0 1.5rem !important;
  }
}
</style>
