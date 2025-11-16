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
    <strong>D</strong>efying <strong>E</strong>rrors, <strong>E</strong>mbracing <strong>P</strong>rogress — every mistake is a lesson, every challenge a step forward.
  </p>

  <p class="intro-text">
    Welcome to my Deep Learning Portfolio! Explore the sections for lecture, lab exercises, and projects — all crafted in Jupyter Notebook. To return here anytime, just click the Jupyter Book logo at the top-left. Arigatou gozaimasu!
  </p>

  <!-- Improved Tabs: Separate containers for each tab, arranged horizontally with individual outlines -->
  <div class="tabs-wrapper">
    <div class="tab-container">
      <a class="tab" href="Lectures/intro.html">Lectures</a>
    </div>
    <div class="tab-container">
      <a class="tab" href="Laboratories/intro.html">Laboratories</a>
    </div>
    <div class="tab-container">
      <a class="tab" href="Projects/intro.html">Projects</a>
    </div>
  </div>

  <!-- Magic Dust Layer -->
  <div class="magic-dust"></div>
</div>

<!-- Magical Cursor -->
<div class="magic-cursor"></div>

<style>
/* === Font: Poppins Everywhere === */
body, .bd-article-container, .cover, .tabs-wrapper, .tab-container, h1, h2, p, .tab {
  font-family: 'Poppins', sans-serif !important;
}

/* === Solid Dark Background Everywhere === */
body, .bd-article-container, .cover, .tabs-wrapper, .tab-container {
  background-color: #121212 !important; /* uniform deep dark gray-black */
  color: #e0e0e0 !important;
  cursor: none;
}

/* === Layout Width === */
.bd-article-container {
  max-width: 95% !important;
  margin: 0 auto !important;
  padding: 0 2.5rem !important;
}

/* === Cover Section === */
.cover {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  text-align: center;
  position: relative;
  /* overflow removed to allow glow to show */
}

/* === Subtitle ===*/
.intro-text {
  font-size: 0.70rem;        /* smaller font than subtitle */
  color: #cccccc;            /* slightly lighter gray */
  max-width: 600px;
  line-height: 1.5;
  margin-top: 0.8rem;
  font-weight: 300;          /* light weight for subtlety */
}

/* === Floating Logo (Perfectly Transparent, No Box, No Drop Shadow) === */
.cover-logo {
  width: auto;
  height: 150px;
  max-width: 90%;
  margin-bottom: 1.8rem;
  animation: float 3.5s ease-in-out infinite;
  opacity: 1; /* visible but clean */
  filter: none !important; /* remove drop-shadow or brightness adjustments */
  background: transparent !important; /* enforce no background */
  image-rendering: -webkit-optimize-contrast; /* keep edges clean on transparent pngs */
  z-index: 10;
  display: block;
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

/* === Typewriter Animation for H2 (Keyboard Typing Effect) === */
.typewriter {
  font-size: 2.8rem;
  color: #ffffff;
  text-shadow: 0 0 15px rgba(255,255,255,0.25);
  margin-bottom: 1rem;
  font-weight: 700;
  overflow: hidden; /* Required for typewriter effect */
  border-right: .15em solid #ffffff; /* Blinking cursor */
  white-space: nowrap; /* Keeps text on one line */
  margin: 0 auto; /* Center alignment */
  letter-spacing: .15em; /* Slight spacing for typing feel */
  animation: 
    typing 3.5s steps(40, end), /* Typing animation: 40 steps for ~40 characters */
    blink-caret 0.75s step-end infinite; /* Blinking cursor */
}

/* Typewriter Keyframes */
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

/* Blinking Cursor Keyframes */
@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: #ffffff; }
}

.cover p {
  font-size: 1.1rem;
  color: #dddddd;
  max-width: 650px;
  line-height: 1.6;
  font-weight: 400; /* Lighter weight for body text */
}

/* === Improved Tabs: Wrapper for horizontal layout === */
.tabs-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem; /* Spacing between individual tab containers */
  margin-top: 3rem;
  padding: 1rem; /* Light padding around the group */
}

/* === Individual Tab Container (Separate for Each Tab: Darker Outline & Subtle 3D Effect) === */
.tab-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #1a1a1a, #121212); /* Subtle dark gradient for depth */
  border-radius: 20px; /* Rounded corners for each container */
  padding: 0.5rem; /* Inner padding around the tab */
  border: 2px solid #2a2a2a; /* Darker outline (gray-black for cohesion with dark bg) */
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.4), /* Reduced outer dark shadow for subtlety */
    inset 0 1px 0 rgba(255, 255, 255, 0.03), /* Very subtle inner highlight for 3D raised effect */
    inset 0 -1px 2px rgba(0, 0, 0, 0.3); /* Reduced inner dark shadow for minimal inset 3D feel */
  transition: all 0.35s ease; /* Smooth transitions */
  min-width: 120px; /* Minimum width for consistency */
  position: relative; /* For potential pseudo-elements if needed */
}

/* === Tabs Inside Containers === */
.tab {
  text-decoration: none;
  cursor: pointer;
  padding: 1rem 1.5rem;
  border-radius: 15px;
  font-weight: 600;
  transition: all 0.35s ease;
  color: #ffffff; /* Changed to white as requested */
  background-color: transparent; /* No background on tab itself */
  border: none; /* Remove border from tab */
  outline: none; /* No outline on tab */
  font-size: 1rem;
}

.tab:hover {
  color: #ffffff; /* Already white, but kept for consistency; could adjust if needed */
  text-shadow: 0 0 8px rgba(255,255,255,0.3); /* Subtle glow, less intense */
  transform: scale(1.02); /* Minimal scale for cohesion */
}

/* === Hover Effects on Individual Containers (Subtle 3D) === */
.tab-container:hover {
  border-color: #404040; /* Slightly lighter dark gray for subtle highlight (not white) */
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.5), /* Milder deeper outer shadow */
    inset 0 1px 0 rgba(255, 255, 255, 0.05), /* Subtle inner highlight */
    inset 0 -2px 4px rgba(0, 0, 0, 0.4); /* Milder deeper inner shadow for 3D pop */
  transform: translateY(-2px); /* Reduced lift for less exaggeration */
  background: linear-gradient(145deg, #202020, #121212); /* Darker gradient shift on hover */
}

/* === Magic Dust === */
.magic-dust {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: visible;
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

.magic-dust::before { top: 30%; left: 40%; animation-delay: 0s; }
.magic-dust::after { top: 60%; left: 65%; animation-delay: 1.5s; }

.cover:hover .magic-dust::before,
.cover:hover .magic-dust::after {
  opacity: 1;
  animation: sparkle 2s ease-in-out infinite;
}

/* === Floating Animation === */
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
@keyframes pulse { from { transform: scale(1); opacity: 0.3; } to { transform: scale(1.2); opacity: 0.5; } }
@keyframes sparkle { 0% { transform: scale(0.8) translateY(0); opacity: 0; } 50% { transform: scale(1.3) translateY(-20px); opacity: 1; } 100% { transform: scale(0.8) translateY(0); opacity: 0; } }

/* === Magical Cursor === */
.magic-cursor {
  position: fixed;
  pointer-events: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  transition: width 0.15s ease, height 0.15s ease, background 0.15s ease;
  z-index: 9999;
}

/* === Trailing Sparkles (Improved) === */
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

/* === Responsive (Tabs Stay Horizontal) === */
@media (max-width: 900px) {
  .bd-article-container { max-width: 100% !important; padding: 0 1.5rem !important; }
  .tabs-wrapper { 
    gap: 1rem; /* Reduce gap on mobile */
    padding: 0.5rem; 
  }
  .tab-container { 
    min-width: 100px; /* Smaller min-width on mobile */
    padding: 0.3rem; 
    border-width: 1.5px; /* Slightly thinner border on mobile */
  }
  .tab { 
    padding: 0.8rem 1.2rem; /* Smaller padding for tabs on mobile */
    font-size: 0.95rem; /* Slightly smaller font */
  }
  .cover-logo { height: 120px; max-width: 80%; }
  .typewriter { 
    font-size: 2rem; /* Responsive size for h2 */
    letter-spacing: .1em; /* Adjust spacing on mobile */
  }
}
</style>

<script>
// === Improved Cursor Magic with Longer, Smoother Trailing Sparkles ===
const cursor = document.querySelector('.magic-cursor');
const sparkles = [];
let lastMouseX = 0;
let lastMouseY = 0;

document.addEventListener('mousemove', e => {
  const currentX = e.clientX;
  const currentY = e.clientY;
  
  // Update cursor position
  cursor.style.left = currentX + 'px';
  cursor.style.top = currentY + 'px';

  // Create a sparkle at the current position
  const sparkle = document.createElement('div');
  sparkle.className = 'magic-sparkle';
  sparkle.style.left = currentX + 'px';
  sparkle.style.top = currentY + 'px';
  document.body.appendChild(sparkle);
  sparkles.push(sparkle);

  // Limit to 50 sparkles for a longer trail (increased from 30)
  if (sparkles.length > 50) {
    const old = sparkles.shift();
    old.remove();
  }

  // Animate each sparkle: fade out over 800ms (longer duration) with random drift and scale
  setTimeout(() => {
    if (sparkle.parentNode) {
      sparkle.style.opacity = '0';
      const driftX = (Math.random() - 0.5) * 40; // Wider random drift for more dynamic trail
      const driftY = (Math.random() - 0.5) * 40;
      const scale = Math.random() * 1.5 + 0.5; // Random scale for variety
      sparkle.style.transform = `translate(${driftX}px, ${driftY}px) scale(${scale})`;
    }
  }, 100); // Slight delay before starting fade for better visibility

  // Update last position for potential velocity-based effects (future-proof)
  lastMouseX = currentX;
  lastMouseY = currentY;
});

// Optional: Add sparkle creation on mouse down for extra magic
document.addEventListener('mousedown', e => {
  for (let i = 0; i < 5; i++) { // Burst of 5 sparkles on click
    setTimeout(() => {
      const sparkle = document.createElement('div');
      sparkle.className = 'magic-sparkle';
      sparkle.style.left = e.clientX + (Math.random() - 0.5) * 20 + 'px';
      sparkle.style.top = e.clientY + (Math.random() - 0.5) * 20 + 'px';
      document.body.appendChild(sparkle);
      sparkles.push(sparkle);

      if (sparkles.length > 50) {
        const old = sparkles.shift();
        old.remove();
      }

      setTimeout(() => {
        if (sparkle.parentNode) {
          sparkle.style.opacity = '0';
          const driftX = (Math.random() - 0.5) * 30;
          const driftY = (Math.random() - 0.5) * 30;
          sparkle.style.transform = `translate(${driftX}px, ${driftY}px)`;
        }
      }, 200);
    }, i * 50);
  }
});
</script>
</body>
</html>
