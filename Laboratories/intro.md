# 🧪 Laboratory Experiments

<div class="cover">
  <div class="orb"></div>
  <div class="orb"></div>

  <img src="../assets/logo.png" alt="Logo" class="cover-logo"/>
  <h1>Laboratory Experiments</h1>
  <p>Hands-on coding sessions and applied data experiments.<br>
  Click a laboratory card below to explore each interactive notebook.</p>

  <div class="gallery-grid">
    <a class="gallery-card" href="../Laboratories/laboratory1.html">
      <h3>Laboratory 1</h3>
      <p>Exploring Data Fundamentals</p>
    </a>
    <a class="gallery-card" href="../Laboratories/laboratory2.html">
      <h3>Laboratory 2</h3>
      <p>Signal Processing Basics</p>
    </a>
    <a class="gallery-card" href="../Laboratories/laboratory3.html">
      <h3>Laboratory 3</h3>
      <p>Feature Extraction & Analysis</p>
    </a>
    <a class="gallery-card" href="../Laboratories/laboratory4.html">
      <h3>Laboratory 4</h3>
      <p>Model Training & Evaluation</p>
    </a>
    <a class="gallery-card" href="../Laboratories/laboratory5.html">
      <h3>Laboratory 5</h3>
      <p>Model Optimization & Validation</p>
    </a>
    <a class="gallery-card" href="../Laboratories/laboratory6.html">
      <h3>Laboratory 6</h3>
      <p>Final Integration Project</p>
    </a>
  </div>
</div>

<style>
/* === Main Content Alignment === */
.bd-content,
.bd-main .bd-content,
.bd-article-container {
  max-width: 1550px !important;     /* slightly wider layout */
  margin: 0 auto !important;
  padding-left: 4rem !important;    /* more comfortable side spacing */
  padding-right: 4rem !important;
}

/* === Cover Layout === */
.cover {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(145deg, #0d0d0d, #1b1b1b);
  color: #f5f5f5;
  font-family: 'Poppins', sans-serif;
  padding: 3rem 0;
}

/* === Floating Logo === */
.cover-logo {
  width: 120px;
  margin-bottom: 1.2rem;
  animation: float 3s ease-in-out infinite;
  filter: drop-shadow(0 0 12px rgba(255,255,255,0.25));
}

/* === Ambient Orbs === */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.2;
  animation: pulse 10s infinite alternate;
}

.orb:nth-child(1) {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, rgba(255,255,255,0.12), rgba(200,200,200,0.08));
  top: -60px;
  left: -120px;
}

.orb:nth-child(2) {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(150,150,150,0.05));
  bottom: -100px;
  right: -150px;
}

/* === Grid Layout === */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* same card size */
  gap: 2.5rem;  /* spacing between cards */
  margin-top: 3rem;
  width: 100%;
  padding: 0 3rem; /* slightly more breathing room on the sides */
  box-sizing: border-box;
}

/* === Card Style === */
.gallery-card {
  display: block;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 18px;
  padding: 2rem 1.5rem;
  text-decoration: none;
  color: #f1f1f1;
  backdrop-filter: blur(15px) saturate(140%);
  transition: all 0.4s ease;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  overflow: hidden;
}

.gallery-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.3px;
}

.gallery-card p {
  font-size: 0.95rem;
  color: #cccccc;
}

/* === Hover Effects === */
.gallery-card:hover {
  transform: translateY(-10px) scale(1.03);
  border-color: rgba(255, 255, 255, 0.35);
  background: rgba(255,255,255,0.12);
  box-shadow: 0 8px 40px rgba(255,255,255,0.08);
}

.gallery-card:hover h3 {
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255,255,255,0.8);
}

.gallery-card:hover p {
  color: #e0e0e0;
}

/* === Responsive Design === */
@media (max-width: 1200px) {
  .gallery-grid {
    grid-template-columns: repeat(3, minmax(240px, 1fr));
  }
}

@media (max-width: 992px) {
  .gallery-grid {
    grid-template-columns: repeat(2, minmax(220px, 1fr));
  }
}

@media (max-width: 600px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}

/* === Animations === */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  from { transform: scale(1); opacity: 0.25; }
  to { transform: scale(1.15); opacity: 0.4; }
}
</style>
