<div class="cover">
  <div class="orb"></div>
  <div class="orb"></div>

  <img src="logo.png" alt="Logo" class="cover-logo">

  <h1>Welcome to My Portfolio Gallery</h1>
  <p>Explore my lectures, laboratories, and projects — all built in Jupyter Notebook.</p>

  <div class="tab-header">
    <a class="tab" href="Lectures/intro.html">📘 Lectures</a>
    <a class="tab" href="Laboratories/intro.html">🧪 Laboratories</a>
    <a class="tab" href="Projects/intro.html">💡 Projects</a>
  </div>
</div>

<style>
/* === Page Background (matches Lab theme) === */
body, .bd-article-container {
  background-color: #121212 !important;
  color: #e0e0e0 !important;
}

/* === Cover Section === */
.cover {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 85vh;
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* === Floating Logo === */
.cover-logo {
  width: 140px;
  margin-bottom: 1.5rem;
  animation: float 3.5s ease-in-out infinite;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.15));
}

/* === Glow Orbs === */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.35;
  animation: pulse 8s infinite alternate;
}

.orb:nth-child(1) {
  width: 300px;
  height: 300px;
  background: rgba(0, 200, 255, 0.45); /* cyan tone */
  top: -60px;
  left: -100px;
}

.orb:nth-child(2) {
  width: 400px;
  height: 400px;
  background: rgba(255, 0, 180, 0.4); /* magenta tone */
  bottom: -100px;
  right: -120px;
}

/* === Text === */
.cover h1 {
  font-size: 2.4rem;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255,255,255,0.15);
  margin-bottom: 1rem;
}

.cover p {
  font-size: 1.1rem;
  color: #cccccc;
  max-width: 600px;
  line-height: 1.6;
}

/* === Tabs (Glass style) === */
.tab-header {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 1rem 2rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(14px) saturate(120%);
  -webkit-backdrop-filter: blur(14px) saturate(120%);
}

/* === Tabs Buttons === */
.tab {
  text-decoration: none;
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.35s ease;
  color: #f5f5f5;
}

/* === Hover Effects === */
.tab:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  box-shadow: 0 0 15px rgba(255,255,255,0.1);
  transform: translateY(-3px);
  text-shadow: 0 0 8px rgba(255,255,255,0.4);
}

/* === Animations === */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}

@keyframes pulse {
  from { transform: scale(1); opacity: 0.3; }
  to { transform: scale(1.2); opacity: 0.5; }
}
</style>