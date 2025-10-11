<div class="cover">
  <div class="orb"></div>
  <div class="orb"></div>

  <img src="assets/logo.png" alt="Logo" class="cover-logo"/>
  <h1>Welcome to My Portfolio Gallery</h1>
  <p>Explore my lectures, laboratories, and projects — all built in Jupyter Notebook.</p>

  <div class="tab-header">
    <a class="tab" href="Lectures/intro.html">📘 Lectures</a>
    <a class="tab" href="Laboratories/intro.html">🧪 Laboratories</a>
    <a class="tab" href="Projects/intro.html">💡 Projects</a>
  </div>
</div>

---

<style>
/* === Base Background and Text === */
body, .bd-article-container {
  background-color: #121212 !important; /* dark coding background */
  color: #e0e0e0 !important;
}

.bd-article-container {
  max-width: 90% !important;
  margin: 0 auto !important;
  padding: 2rem !important;
}

/* === Hero Section === */
.cover {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.4);
}

/* === Logo === */
.cover-logo {
  width: 150px;
  margin-bottom: 1.5rem;
  animation: float 3s ease-in-out infinite;
  filter: drop-shadow(0 0 10px rgba(255,255,255,0.15));
}

/* === Floating Orbs (muted glass style) === */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.25;
  animation: pulse 8s infinite alternate;
}

.orb:nth-child(1) {
  width: 300px;
  height: 300px;
  background: #ffffff10; /* soft white tint */
  top: -50px;
  left: -100px;
}

.orb:nth-child(2) {
  width: 400px;
  height: 400px;
  background: #ffffff08; /* soft gray glow */
  bottom: -80px;
  right: -120px;
}

/* === Header Text === */
h1 {
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(255,255,255,0.1);
}

p {
  font-size: 1.1rem;
  color: #cccccc;
  max-width: 650px;
}

/* === Tab Navigation (Glass style) === */
.tab-header {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 1rem 2rem;
  box-shadow: 0 8px 25px rgba(0,0,0,0.5);
  backdrop-filter: blur(10px) saturate(120%);
  -webkit-backdrop-filter: blur(10px) saturate(120%);
}

/* === Tabs === */
.tab {
  text-decoration: none;
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  color: #f5f5f5;
}

.tab:hover {
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
  color: #ffffff;
}

/* === Animations === */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  from { transform: scale(1); opacity: 0.25; }
  to { transform: scale(1.2); opacity: 0.35; }
}

/* === Responsive === */
@media (max-width: 900px) {
  .tab-header {
    flex-direction: column;
    gap: 1rem;
  }
  .cover {
    padding: 2rem 1.5rem;
  }
}
</style>
