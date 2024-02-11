function render() {
  ctx.clearRect(-aspect, -1, aspect * 2, 2);
  
  for (let [ mass, color, density, x, y, z, _vx, _vy, _vz ] of particles) {
    let [ visible, screenX, screenY, objDist ] = transform3DTo2D(x, y, z, dist, elev, azim);
    
    if (visible) {
      let size = (mass / density) ** (1 / 3);
      let visualSize = size / objDist;
      
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(screenX, screenY, visualSize, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function renderText() {
  dist_text.textContent = dist.toExponential(3);
  elev_text.textContent = (elev * 180 / Math.PI).toFixed(2);
  azim_text.textContent = (azim * 180 / Math.PI).toFixed(2);
  scenario_text.textContent = scenarioNum;
  running_text.textContent = running;
}
