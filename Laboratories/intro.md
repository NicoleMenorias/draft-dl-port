# 🧪 Laboratory Experiments

<div class="cover">
  <div class="orb"></div>
  <div class="orb"></div>

  <img src="../assets/logo.png" alt="Logo" class="cover-logo"/>
  <h1>Laboratory Experiments</h1>
  <p>Hands-on coding sessions and applied data experiments.<br>
  Click any laboratory card below to open its interactive notebook.</p>

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
/* === Overall page cover === */
.cover {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(20,20,20,1), rgba(45,45,45,1));
  color: #f9f9f9;
  font-family: 'Poppins', sans-serif;
}

.cover-logo {
  width: 120px;
  margin-bottom: 1.2rem;
  animation: float 3s ease-in-out infinite;
  filter: drop-shadow(0 0 8px rgba(255,255,255,0.2));
}

/* === Subtle floating orbs for background glow === */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.25;
  animation: pulse 10s infinite alternate;
}

.orb:nth-child(1) {
  width: 400px;
  height: 400px;
  background: rgba(255,255,255,0.05);
  top: -50px;
  left: -100px;
}

.orb:nth-child(2) {
  width: 400px;
  height: 400px;
  background: rgba(255,255,255,0.05);
  bottom: -80px;
  right: -120px;
}

/* === Grid layout: 2 columns, 3 rows === */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  width: 85%;
  max-width: 900px;
}

/* === Flash card styling === */
.gallery-card {
  display: block;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  padding: 1.8rem;
  text-decoration: none;
  color: #f5f5f5;
  backdrop-filter: blur(15px) brightness(1.1);
  transition: all 0.35s ease;
  box-shadow: 0 0 25px rgba(0,0,0,0.4);
}

.gallery-card:hover {
  transform: translateY(-10px);
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 10px 40px rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.12);
}

.gallery-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.4rem;
  color: #ffffff;
  letter-spacing: 0.5px;
}

.gallery-card p {
  font-size: 0.95rem;
  color: #cfcfcf;
}

/* === Responsive behavior for smaller screens === */
@media (max-width: 768px) {
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
