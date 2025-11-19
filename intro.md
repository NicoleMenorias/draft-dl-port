<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Deep Learning Portfolio</title>
  <!-- Google Fonts: Poppins -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body>
<div class="cover">
  <div class="orb"></div>
  <div class="orb"></div>

  <!-- Floating Logo using transparent PNG -->
  <img src="logo.png" alt="Logo" class="cover-logo">

  <h2 class="typewriter"><strong>Learning through the D.E.E.P.</strong></h2>
  <p class="subtitle">
    <strong>D</strong>efying <strong>E</strong>rrors, <strong>E</strong>mbracing <strong>P</strong>rogress <br>
    — every mistake is a lesson, every challenge a step forward.
  </p>

  <p class="intro-text" style="font-size: 0.8rem;">
    Welcome to my Deep Learning Portfolio! Explore the sections for lecture, lab exercises, and projects — all crafted in Jupyter Notebook. To return here anytime, just click the Deep Learning icon at the top-left. 
    Arigatou gozaimasu!
  </p>

  <div class="tabs-wrapper">
    <div class="tab-container">
      <a class="tab" href="Lectures/intro.html">Lectures</a>
    </div>
    <div class="tab-container">
      <a class="tab" href="Laboratories/intro.html">Laboratories</a>
    </div>
    <div class="tab-container">
      <a class="tab" href="Project/intro.html">Project</a>
    </div>
  </div>

  <div class="magic-dust"></div>
</div>

<div class="magic-cursor"></div>

<style>
/* === Font: Poppins Everywhere === */
body, .bd-article-container, .cover, .tabs-wrapper, .tab-container, h1, h2, p, .tab {
  font-family: 'Poppins', sans-serif !important;
}

/* === Solid Dark Background Everywhere === */
body, .bd-article-container, .cover, .tabs-wrapper, .tab-container {
  background-color: #121212 !important;
  color: #e0e0e0 !important;
  cursor: none;
}

/* === Layout Width === */
.bd-article-container {
  max-width: 95% !important;
  margin: 0 auto !important;
  padding: 0 2.5rem !important;
}

.cover {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  text-align: center;
  position: relative;
}

/* === Subtitle ===*/
.intro-text {
  font-size: 0.70rem;
  color: #cccccc;
  max-width: 600px;
  line-height: 1.5;
  margin-top: 0.8rem;
  font-weight: 300;
}

/* === Floating Logo === */
.cover-logo {
  width: auto;
  height: 150px;
  max-width: 90%;
  margin-bottom: 1.8rem;
  animation: float 3.5s ease-in-out infinite;
  opacity: 1;
  filter: none !important;
  background: transparent !important;
  z-index: 10;
}

/* === Glow Orbs === */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.35;
  animation: pulse 8s infinite alternate;
  mix-blend-mode: lighten;
}

.orb:nth-child(1) {
  width: 400px;
  height: 400px;
  background: rgba(200, 200, 200, 0.3);
  top: -60px;
  left: -100px;
}

.orb:nth-child(2) {
  width: 500px;
  height: 500px;
  background: rgba(150, 150, 150, 0.25);
  bottom: -120px;
  right: -150px;
}

/* === Typewriter === */
.typewriter {
  font-size: 2.8rem;
  color: #ffffff;
  text-shadow: 0 0 15px rgba(255,255,255,0.25);
  margin-bottom: 1rem;
  font-weight: 700;
  overflow: hidden;
  border-right: .15em solid #ffffff;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation: typing 3.5s steps(40, end),
             blink-caret 0.75s step-end infinite;
}

@keyframes typing { from { width: 0; } to { width: 100%; } }
@keyframes blink-caret { from, to { border-color: transparent; } 50% { border-color: #ffffff; } }

.cover p {
  font-size: 1.1rem;
  color: #dddddd;
  max-width: 650px;
  line-height: 1.6;
}

/* === Tabs === */
.tabs-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 3rem;
  padding: 1rem;
}

.tab-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #1a1a1a, #121212);
  border-radius: 20px;
  padding: 0.5rem;
  border: 2px solid #2a2a2a;
  box-shadow: 0 2px 8px rgba(0,0,0,0.4),
              inset 0 1px 0 rgba(255,255,255,0.03),
              inset 0 -1px 2px rgba(0,0,0,0.3);
  transition: all 0.35s ease;
  min-width: 120px;
}

.tab {
  text-decoration: none;
  cursor: pointer;
  padding: 1rem 1.5rem;
  border-radius: 15px;
  font-weight: 600;
  transition: all 0.35s ease;
  color: #ffffff !important;  /* Ensures tab text is white */
  background-color: transparent;
  border: none;
  font-size: 1rem;
}

.tab:hover {
  text-shadow: 0 0 8px rgba(255,255,255,0.3);
  transform: scale(1.02);
}

.tab-container:hover {
  border-color: #404040;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5),
              inset 0 1px 0 rgba(255,255,255,0.05),
              inset 0 -2px 4px rgba(0,0,0,0.4);
  transform: translateY(-2px);
}

/* === Force All Links White (Overrides Browser Defaults) === */
a, a:link, a:visited, a:hover, a:active {
  color: #ffffff !important;
  text-decoration: none !important;  /* Optional: Removes underlines for a cleaner look */
}

/* === Magic Dust === */
.magic-dust {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.magic-dust::before,
.magic-dust::after {
  content: '';
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 70%);
  opacity: 0;
  animation: sparkle 3s ease-in-out infinite;
}

.magic-dust::before { top: 30%; left: 40%; }
.magic-dust::after { top: 60%; left: 65%; animation-delay: 1.5s; }

@keyframes sparkle {
  0% { transform: scale(0.8) translateY(0); opacity: 0; }
  50% { transform: scale(1.3) translateY(-20px); opacity: 1; }
  100% { transform: scale(0.8) translateY(0); opacity: 0; }
}

/* === Float, Pulse === */
@keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px);} }
@keyframes pulse { from { transform: scale(1); opacity: 0.3; } to { transform: scale(1.2); opacity: 0.5; } }

/* === Magic Cursor === */
.magic-cursor {
  position: fixed;
  pointer-events: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  transition: width 0.15s ease, height 0.15s ease;
  z-index: 9999;
}

.magic-sparkle {
  position: fixed;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.9) 0%, transparent 70%);
  pointer-events: none;
  z-index: 9998;
  opacity: 0.8;
  mix-blend-mode: lighten;
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

/* === Responsive === */
@media (max-width: 900px) {
  .bd-article-container { max-width: 100% !important; padding: 0 1.5rem !important; }
  .tabs-wrapper { gap: 1rem; padding: .5rem; }
  .tab-container { min-width: 100px; padding: .3rem; }
  .tab { padding: .8rem 1.2rem; font-size: .95rem; }
  .cover-logo { height: 120px; }
  .typewriter { font-size: 2rem; letter-spacing: .1em; }
}

/* ===================================================== */
/* === JUPYTER BOOK OVERRIDES: HIDE WIDGETS & SIDEBAR === */
/* ===================================================== */

.headerbtn,
button.theme-switch,
button#navbar-icon,
div.header-article__buttons,
div.sidebar-toggle,
nav.bd-header-nav,
.bd-sidebar-secondary {
  display: none !important;
  visibility: hidden !important;
}

.bd-main {
  grid-template-columns: 100% !important;
}

</style>

<script>
// === Sparkling Cursor ===
const cursor = document.querySelector('.magic-cursor');
const sparkles = [];

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

  const sp = document.createElement('div');
  sp.className = 'magic-sparkle';
  sp.style.left = e.clientX + 'px';
  sp.style.top = e.clientY + 'px';
  document.body.appendChild(sp);
  sparkles.push(sp);

  if (sparkles.length > 50) sparkles.shift().remove();

  setTimeout(() => {
    sp.style.opacity = '0';
    const dx = (Math.random() - 0.5) * 40;
    const dy = (Math.random() - 0.5) * 40;
    sp.style.transform = `translate(${dx}px, ${dy}px) scale(${Math.random()*1.5+0.5})`;
  }, 100);
});
</script>

</body>
</html>
