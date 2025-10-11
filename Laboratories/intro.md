# 🧪 Laboratory Tasks

<div class="section-intro">
  <div class="glass-card">
    <h1>Laboratory Experiments</h1>
    <p>Hands-on coding sessions and applied data experiments. Click a lab to open its interactive notebook.</p>
  </div>

  <div class="gallery">
    {% for i in range(1,7) %}
    <div class="gallery-card" onclick="window.location.href='laboratory{{i}}.html'">
      <h3>Laboratory {{i}}</h3>
      <p>Interactive Experiment {{i}}</p>
    </div>
    {% endfor %}
  </div>
</div>
