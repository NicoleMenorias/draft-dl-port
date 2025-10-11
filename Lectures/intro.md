<div class="section-intro">
  <div class="glass-card">
    <h1>Lectures Overview</h1>
    <p>Explore my lecture notes and interactive notebooks. Each lecture covers a key concept with explanations, code demos, and visualizations.</p>
  </div>

  <div class="gallery">
    <div class="gallery-card" onclick="window.location.href='lecture1.html'">
      <h3>Lecture 1</h3>
      <p>Foundations and Core Concepts</p>
    </div>
  </div>
</div>

---

<style>
/* === Base Layout === */
body, .bd-article-container {
  background-color: #121212 !important;
  color: #e0e0e0 !important;
}

.bd-article-container {
  max-width: 1200px !important;
  margin: 0 auto !important;
  padding: 3rem 2rem !important;
  font-family: 'Poppins', sans-serif;
}

/* === Section Intro === */
.section-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* === Glass Card Header === */
.glass-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  max-width: 800px;
  margin-bottom: 3rem;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px) saturate(130%);
  -webkit-backdrop-filter: blur(12px) saturate(130%);
}

.glass-card h1 {
  font-size: 2.3rem;
  color: #ffffff;
  margin-bottom: 1rem;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.1);
}

.glass-card p {
  font-size: 1.1rem;
  color: #cccccc;
  line-height: 1.6;
}

/* === Gallery Grid === */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 2rem;
  width: 100%;
  justify-content: center;
  box-sizing: border-box;
}

/* === Individual Card === */
.gallery-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(0,0,0,0.5);
  backdrop-filter: blur(10px) saturate(120%);
  -webkit-backdrop-filter: blur(10px) saturate(120%);
}

.gallery-card h3 {
  color: #ffffff;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.gallery-card p {
  color: #b0b0b0;
  font-size: 0.95rem;
}

/* === Hover Effects === */
.gallery-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 25px rgba(255,255,255,0.08);
}

.gallery-card:hover h3 {
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255,255,255,0.3);
}

/* === Responsive === */
@media (max-width: 768px) {
  .glass-card {
    padding: 2rem 1.5rem;
  }
  .gallery {
    grid-template-columns: 1fr;
  }
}
</style>
