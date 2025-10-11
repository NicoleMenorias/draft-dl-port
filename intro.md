# Welcome to My Portfolio Gallery

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

<style>
.cover {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cover-logo {
  width: 150px;
  margin-bottom: 1.5rem;
  animation: float 3s ease-in-out infinite;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: pulse 8s infinite alternate;
}

.orb:nth-child(1) {
  width: 300px;
  height: 300px;
  background: #00e6ff;
  top: -50px;
  left: -100px;
}

.orb:nth-child(2) {
  width: 400px;
  height: 400px;
  background: #ff00d4;
  bottom: -80px;
  right: -120px;
}

.tab-header {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 1rem 1.5rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.tab {
  text-decoration: none;
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  font-weight: 600;
  transition: all 0.3s ease;
  color: #f5f5f5;
}

.tab:hover {
  background: linear-gradient(90deg, #00e6ff, #ff00d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: translateY(-3px);
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  from { transform: scale(1); opacity: 0.3; }
  to { transform: scale(1.2); opacity: 0.5; }
}
</style>
