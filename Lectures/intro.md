# 📘 Lecture Gallery

<div class="section-intro">

  <div class="glass-card">
    <h1>Lectures Overview</h1>
    <p>
      Explore my lecture notes and interactive notebooks.
      Each lecture covers a key concept with explanations, code demos, and visualizations.
    </p>
  </div>

  <div class="gallery">
    <div class="gallery-card" role="button" tabindex="0" onclick="location.href='lecture1.html'">
      <h3>Lecture 1</h3>
      <p>Foundations and Core Concepts</p>
    </div>
  </div>

</div>

---

<style>
body {
  background-color: #121212;
  color: #e0e0e0;
  font-family: 'Inter', sans-serif;
}

.section-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 3rem 0;
}

.glass-card {
  background: rgba(40, 40, 40, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem 3rem;
  text-align: center;
  max-width: 800px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
}

.gallery-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 15px rgba(0,0,0,0.3);
}

.gallery-card:hover {
  transform: scale(1.03);
  background: rgba(255, 255, 255, 0.1);
}

</style>
